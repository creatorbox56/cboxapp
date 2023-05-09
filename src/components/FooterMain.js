import React from "react";
import styles from "../styles/FooterMain.module.scss";
import discord from "../icons/discord_white.png";
import twitter from "../icons/twitter.png";
import insta from "../icons/instagram.png";
import { Container } from "react-bootstrap";
import Mailto from "./Mail.js";

const Footer = () => {
  return (
   
    <div className={styles.footer}>
        <div className="row">
          {/* Column 1 */}
          <div className="col-sm-5">
          <h5>Contact</h5><br></br>

              <div className={styles.tm}>
                creatorbox<br></br>
                Theresa Wilfer
                <Mailto email="hello@creatorbox.de" subject="Hello creatorbox" body="">
                  hello@creatorbox.de
             </Mailto>
                  Fon: +49 151/260 710 29
              </div>
          </div>
  
          {/* Column 2 */}
          <div className="col-sm-4">
          <h5>Information</h5><br></br>
            <div className={styles.links}> 
              <a href="/imprint">Imprint</a><br></br>
              <a href="#">Data Privacy</a><br></br>
            
              </div> 
          </div>
          {/* Column 3 */}
          <div className="col-sm-3">
            <h5>Follow</h5><br />
            <a href="https://twitter.com/cbox748"><img src={twitter} width="48" alt="twitterhandle"></img></a>
            <a href="https://www.instagram.com/creatorbox_artist/"><img src={insta} width="65" alt="twitterhandle"></img></a>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="divider">
              <hr></hr>
              </div>
            </div>
              <p className="col-sm-4">&copy;{new Date().getFullYear()} creatorbox<br></br>All rights reserved.
              </p>
          </div>
        </div>
    
        
      

  );
};

export default Footer;
