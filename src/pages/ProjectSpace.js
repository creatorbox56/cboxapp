import React, { useState } from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Braintube2 from "../Braintube2";
import styles from "../styles/global.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Seed from "../components/Seedgenerator";
import Mint from "../components/Mint";
import { Button } from "react-bootstrap";
import { Gallery } from "react-grid-gallery";
import ImageGallery from "../components/IGallery";

function ProjectSpace({childToParent}){

    const [data, setData] = useState(0);
    //const [wallet, setWallet] = useState(0);
    var wallet = "0x88537Af94bcC75F33C831ce7535eB195C02b8126";
    
    const firstViewToParent = (num) => {
      console.log('handling Seed');
      setData(num);
    };

/*     const setWalletHandler = () => {
        console.log('handling Wallet');
        setWallet("0x88537Af94bcC75F33C831ce7535eB195C02b8126");
      }; */

   
    return <div>
        <Row>
          <Col className="col-6-md-left">
           <Braintube2 seed={data} wallet={childToParent}/> 
             
          </Col>
          <Col className="col-6-md-right">
            <div className="text2">
              <p className="text-section">Upcoming</p>
              <h2 className="text-title">Braintube</h2>
              <div className="text-sale">Initial Sale Date: 19. März 2022</div>

              <Row>
                <p className="col-4">Price: 0.05 ETH</p>
                <p className="col-8">Minted: 0 / 333</p> 
              </Row></div>
              <Row>
    
                <Seed firstViewToParent={firstViewToParent} wallet={childToParent} className="col-6-md"/>
                <Mint seed={data}></Mint>
              </Row>       

          </Col>
        </Row> 
        {/* <Row><ImageGallery wallet={childToParent}></ImageGallery> */}
        {/* </Row> */}
   
    </div>
}

export default ProjectSpace;