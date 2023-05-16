
//import styles from '../styles/Header.module.scss'
import { useState} from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import ConnectWallet from './ConnectWallet';
import {Megamenu} from './Megamenu.js';
//import logo from '../creatorbox_logo_sw.svg';
import logo from '../logo_creatorbox.svg';
import logo_small from '../logo_small.png'
import styles from "../styles/Navbar.module.scss";
import Mailto from "./Mail.js";

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
        console.log(menuOpen);
        };

    const menuToggleHandler2 = () => {
            setMenuOPen2((p) => !p);
            console.log(menuOpen2);
            }; 
    
    const handleClick = (num) => {
        setWallet(wallet+1)
        console.log(num);
      
      };

    return(
       <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.container}>
                <nav className={styles.navigation}>           
                <div className={styles.logo}><a href="/"><img src={logo} alt="cboxlogo" width="250px"></img></a></div>
                <ul className={`${styles.nav_menu} ${menuOpen ? styles.isMenu : ""}`}>
                <li className={styles.nav_list}>
                <div className={styles.nav_list_menu} onClick={()=>setOpen(!open)}>
                <a href="#"  className={styles.nav_link}>
                    <span className={styles.animation}>Work</span>
                        <ion-icon name="chevron-down-outline"></ion-icon>
                    </a>
                    <div className={`${styles.dropdown} ${open ? styles.open : ""}`}>
                        <div className={styles.dropdowninner}>
                           {/* <div className={styles.dropdownitem}>
                            <a href="/work"><h2 className={styles.item_heading}>Physical Collections</h2></a>
                            <div className={styles.item_list}>
                            <div className={styles.item_list_info}>
                            <p>Collections and Pieces available as printed version</p>
                                </div>
                             </div>
                            </div> */}
                            <div className={styles.dropdownitem}>
                            <a href="/work"><h2 className={styles.item_heading}>Physical Collections</h2></a>
                            <div className={styles.item_list}>
                            <div className={styles.item_list_info}>
                                    <p>Physical Collections are available as printed Version only. All images
                                        are produced only once and therefore unique. Each piece is hand-numbered and contains my maker's stamp
                                        on the back.
                                    </p>
                                </div>
                             </div>
                            </div>
                            <div className={styles.dropdownitem}>
                            <a href="/digital"><h2 className={styles.item_heading}>Digital Collections</h2></a>
                            <div className={styles.item_list}>
                                <div className={styles.item_list_info}>
                                    <p>Digital Collections are available as NFT and partly as printed Version.<br></br> 
                                       The Collections are minted on the Ethereum Chain, Polygon or Smart Chain (Tezos). 
                                    </p>
                                </div>
                             </div>
                            </div>
                            <div className={styles.dropdownitem}>
                            <a href="/projects"><h2 className={styles.item_heading}>Projects</h2></a>
                            <div className={styles.item_list}>
                                <div className={styles.item_list_info}>
                                    <p>In the future it will be possible to generate your own seed via mouse interaction and create and mine a unique work of art. At the moment, the minting service is still disabled.</p>
                                </div>
                             </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </li>
                    <li className={styles.nav_list}>
                    <a href="/about" className={styles.nav_link}>
                    <span className={styles.animation}>About</span>
                    </a>
                    </li>
                <li className={styles.nav_list}>
                    <a href="/project-space" className={styles.nav_link}>
                    <span className={styles.animation}>Create</span>
                </a>
                </li>
          </ul>
          <div className={styles.nav_action}>
            {/* <a href="#!" className={styles.hcontact}>Contact</a> */}
            <div className={styles.hcontact}><span className={styles.animation}>
            <a href={`mailto:${"hello@creatorbox.de"}?subject=${encodeURIComponent("Hello creatorbox") || ''}&body=${encodeURIComponent("") || ''}`}>Contact</a></span></div>
            {/* <Mailto email="hello@creatorbox.de" subject="Hello creatorbox" body="">
              <div className={styles.hcontact}>Contact</div>
             </Mailto> */}
            <button type="button" className={styles.btn_connect} ><ConnectWallet childToParent={childToParent} /></button>
            <div className={styles.toggle} >
                {!menuOpen ? <BiMenuAltRight onClick={menuToggleHandler} /> : <AiOutlineClose onClick={menuToggleHandler}/> }
                </div>
            </div>
            </nav>
             
            </div>
      
            </header>
            </div>
        
        
      
    
    )
}

export default Header;