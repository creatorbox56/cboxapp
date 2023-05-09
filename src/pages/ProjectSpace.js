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

   
    return <div  className="create_desk">
   
        <Row>
     
          <Col className="col-6-md-left">
        
           <Braintube2 seed={data} wallet={childToParent}/> 
             
          </Col>
          <Col className="col-6-md-right">
            <div className="text2">
              <p className="text-section">Upcoming</p>
              <h2 className="text-title">Braintube</h2>
              <div className="text-sale">
              Move your mouse over the seed-pad and squizzle[:skizzle] your own seed.
              All random parameters are created out of this seed. So the result is your personal braintube.
              The script as well as the metadata is stored in Arweave for permanent life-long storage. 
              The Token is minted on the Ethereum Blockchain with the URL to the Arweave Meta Data. For now the Mint Function is disabled
                until the Release in Automn.
              </div>
              {/* <Row>
                <p className="col-4">Price: -</p>
                <p className="col-8">Minted: -</p> 
              </Row> */}
              </div>
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