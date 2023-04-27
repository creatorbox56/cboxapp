import React from "react";
import styles from "../styles/Contact.module.scss";
import discord from "../icons/discord_white.png";
import twitter from "../icons/twitter.png";

const Contact = () => {
  return (
    <div className="container-fluid">
    <div className={styles.contact}>
   <div className="row">
       <div className="col-12">
           <h2>Get in contact with us</h2><br /><br />
       </div>
       <div className="col-12"><img src={discord} width="54" alt="#creatorbox"></img><div className={styles.social}>creatorbox#5680</div></div>
       <div className="col-12"><img src={twitter} width="48" alt="twitterhandle"></img><div className={styles.social}>@artgate27</div></div>
   
        </div><hr></hr><br />
      </div>
  </div>
  );
};

export default Contact;
