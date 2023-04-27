import React, { useState } from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import styles from "../styles/Work.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WC01 from "../images/wc01.png";
import WC02 from "../images/wc02.png";
import WC03 from "../images/wc03.png";
import OZ01 from "../images/oz03.png";
import OZ02 from "../images/oz02.png";
import OZ03 from "../images/oz01.png";
import LZ01 from "../images/lazer01.PNG";
import LZ02 from "../images/lazer02.PNG";
import LZ03 from "../images/lazer03.PNG";
import LZ04 from "../images/lazer04.PNG";
import HZ01 from "../images/hazle01.PNG";
import HZ02 from "../images/hazle02.png";
import HZ03 from "../images/hazle03.png";
import HZ04 from "../images/hazle04.png";
import TZ01 from "../images/treez01.png";
import TZ02 from "../images/treez02.png";

import OZS01 from "../images/oz_s01.png";
import OZS02 from "../images/oz_s02.png";
import OZS03 from "../images/oz_s03.png";
import OZS04 from "../images/oz_s04.png";
import BT01 from "../images/bt01.png";
import BT02 from "../images/bt05.jpg";

import AZ01 from "../images/ayezoo01.png";
import AZ02 from "../images/ayezoo02.png";
import AZ03 from "../images/ayezoo03.png";
import AZ04 from "../images/ayezoo04.png";
import AZ05 from "../images/ayezoo05.png";
//import styles from "../styles/global.scss";

function Work(){


    return <div className={styles.work}>

        <div className={styles.title}>
            <label>2022</label>
            <h2>Braintube</h2>
        </div>
        <div className={styles.work1}>
            <img src={BT01} width="500" className={styles.img2}></img>
            <img src={BT02} width="500" className={styles.img2}></img>
        </div>

        <div className={styles.title}>
            <label>2022</label>
            <h2>OZ Studies</h2>
        </div>
        <div className={styles.work1}>
            <img src={OZS01} width="500" className={styles.img2}></img>
            <img src={OZS02} width="500" className={styles.img2}></img>
        </div>
        <div className={styles.work1}>
            <img src={OZS03} width="500" className={styles.img2}></img>
            <img src={OZS04} width="500" className={styles.img2}></img>
        </div>

        <div className={styles.title}>
            <label>2022</label>
            <h2>Oz</h2>
        </div>
        <div className={styles.work1}>
            <img src={OZ01} width="1000" className={styles.img2}></img>
        </div>
        <div className={styles.work1}>
            <img src={OZ02} width="1000" className={styles.img2}></img>
        </div>
        <div className={styles.work1}>
            <img src={OZ03} width="1000" className={styles.img2}></img>
        </div>

        <div className={styles.title}>
            <label>2022</label>
            <h2>Ayezoo</h2>
        </div>
        <div className={styles.work1}>
            <img src={AZ04} width="500" className={styles.img2}></img>
            <img src={AZ05} width="500" className={styles.img2}></img>
         
        </div>

        <div className={styles.title}>
            <label>2022</label>
            <h2>Treez</h2>
        </div>
        <div className={styles.work1}>
            <img src={TZ01} width="500" className={styles.img2}></img>
            <img src={TZ02} width="500" className={styles.img2}></img>
        </div>

        <div className={styles.title}>
            <label>2020/2021</label>
            <h2>Lazer</h2>
        </div>
        <div className={styles.work1}>
            <img src={LZ01} width="500" className={styles.img2}></img>
            <img src={LZ02} width="500" className={styles.img2}></img>
        </div>
        <div className={styles.work1}>
            <img src={LZ03} width="500" className={styles.img2}></img>
            <img src={LZ04} width="500" className={styles.img2}></img>
        </div>

        <div className={styles.title}>
            <label>2022</label>
            <h2>Hazle</h2>
        </div>
        <div className={styles.work1}>
            <img src={HZ03} width="1000" className={styles.img2}></img>
        </div>
        <div className={styles.work1}>
            <img src={HZ04} width="1000" className={styles.img2}></img>
        </div>
        <div className={styles.work1}>
            <img src={HZ02} width="1000" className={styles.img2}></img>
        </div>
        <div className={styles.title}>
            <label>2019</label>
            <h2>Walking Circles</h2>
        </div>
        <div className={styles.work1}>
            <img src={WC01} width="350" gap="10px" className={styles.img2}></img>
            <img src={WC02} width="350" className={styles.img2}></img>
            <img src={WC03} width="350" className={styles.img2}></img>
        </div>


    </div>
}

export default Work;