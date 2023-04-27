
import styles from '../styles/Header.module.scss'
import { useState} from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import ConnectWallet from './ConnectWallet';
import {Megamenu} from './Megamenu.js';
//import logo from '../creatorbox_logo_sw.svg';
import logo from '../logo_creatorbox.svg';
import "../styles/Navbar.module.scss";

const Header = ({childToParent}) => {

    const [menuOpen, setMenuOPen] = useState(false);
    const [menuOpen2, setMenuOPen2] = useState(false);
    const [wallet, setWallet] = useState(0);
    const [open, setOpen] = useState(false);
/*     const childToParent = (data) => {
        //alert(data)
       childToParent2={childToParent2(data)};
      } */


    const menuToggleHandler = () => {
        setMenuOPen((p) => !p);
        console.log("Test");
        };

        const menuToggleHandler2 = () => {
            setMenuOPen2((p) => !p);
            console.log("Test");
            }; 
    
    const handleClick = (num) => {
        setWallet(wallet+1)
        console.log(num);
      
      };

    return(
        <div className={styles.container}>
        <header className={styles.header}>
            <div className={styles.content}>

                <div className={styles.logo}><a href="/"><img src={logo} alt="cboxlogo" width="250"></img></a></div>

                <nav className={`${styles.menu} ${menuOpen ? styles.isMenu : ""}`}>
                <ul class={styles.menumain} onClick={()=>setOpen(!open)}>
             
                <div className={styles.toggle2}>
                        {!menuOpen2 ? <BiMenuAltRight onClick={menuToggleHandler2} /> : <AiOutlineClose onClick={menuToggleHandler2}/> }
                    </div><li><a href="#"  onMouseEnter={() => setOpen(!open)} onMouseLeave={() => setOpen(open)}>WORK</a></li>
                <li><a href="/about"  onMouseEnter={() => setOpen(false)} onMouseLeave={() => setOpen(false)}>ABOUT</a></li>
                <li><a href="/project-space" onMouseEnter={() => setOpen(false)} onMouseLeave={() => setOpen(false)}>CREATE</a></li>
           
                </ul>
                    <button type="button" className={styles.btn_connect} ><ConnectWallet childToParent={childToParent} /></button>
              
                    </nav>
                    <div className={styles.toggle}>
                        {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler} /> : <AiOutlineClose onClick={menuToggleHandler}/> }
                    </div>

                </div>
              
            </header>
          <div className={styles.megam} onMouseLeave={() => setOpen(false)}>{open ? <Megamenu /> : null}</div>
         
        </div>
    )
}

export default Header;