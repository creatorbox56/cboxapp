
import React, { useState } from "react";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import { Container } from "react-bootstrap";
import styles from '../styles/MainLanding.module.scss';
import banner from '../artgate_banner.jpg';

function MainLanding() {

    return(
    <Container>
            <section id={styles.main}>
                <div className={styles.text}>
                    Curated<br />Generative Art<br />Plattform
                </div>
            <img src={banner} alt="artgate image"></img>
        </section>
       
  </Container>
    )
}

export default MainLanding;
