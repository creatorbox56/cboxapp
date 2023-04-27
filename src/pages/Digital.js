import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import styles from "../styles/Digital.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import KASW01 from "../images/kasw02.gif";
//import GEN02 from "../images/gen02.jpg";
import SPC01 from "../images/spectaculous017.gif"
import WC02 from "../images/wc02a.jpg";

//import styles from "../styles/global.scss";

function Work2() {
  return (
    <div>
      {" "}
      <Container fluid>
      <Row className={styles.section3}>
          <Col className="col-6-md">
            <div className={styles.text}>
              <div className={styles.label}>Ethereum Chain & Polygon</div>
              <h2>Spectaculous</h2>

              <div className={styles.parent}>
                <h3>
                  <div className={styles.stitle}>Items</div>
                  <span>43</span>
                </h3>

                <div className={styles.verticalrow_dark}></div>
                <h3>
                  <div className={styles.stitle}>Year</div>
                  <span>2021</span>
                </h3>
              </div>
              <br></br>
              <div className={styles.edition2}>Limited Edition of unique 1/1 animated Generative Art pieces, carefully created & curated by creatorbox & Mariela Di Nardo.</div>
            </div>

            <p>
            For Eons, remote evolved Stars orbiting in the 7th Dimension had been decoded heavy encrypted messages 
            & sent them trough rabbit holes to the 3er Dimension, where humans habitat. 
            Those powerclues manifest randomly at night as vivid, colorful fireflies called Spectaculous. 
            Only the ones who are privileged to be aware of & hodl them, will have a lifetime opportunity to decipher 
            the fundamental truths hidden from humankind. 
            </p>
            <div className={styles.btn_dark_desk}>
              <a href="https://opensea.io/collection/spectaculous">EXPLORE</a>
            </div>
          </Col>
          <Col className={styles.conimage}>
            <img src={SPC01} className={styles.gen03} loading="lazy"></img>
            <div className={styles.btn_dark_mobile}>
              <a href="https://opensea.io/collection/spectaculous">EXPLORE</a>
            </div>
          </Col>
        </Row>
        <Row className={styles.section2}>
          <Col>
            <div className={styles.text}>
              <div className={styles.label}>Ethereum Chain</div>
              <h2>Walking Circles</h2>

              <div className={styles.parent}>
                <h3>
                  <div className={styles.stitle}>Items</div>
                  <span>77</span>
                </h3>

                <div className={styles.verticalrow_dark}></div>
                <h3>
                  <div className={styles.stitle}>Year</div>
                  <span>2019</span>
                </h3>
              </div>
              <div className={styles.edition2}>Edition of 77 1/1 unique Pieces</div>
            </div>
            <p>
            Genart is a unique NFT collection of programatically generated pieces of art based on a mathematical algorithm. The most beautiful artworks were carefully selected by hand and are only available on opensea.
            </p>
            <div className={styles.btn_dark_desk}>
              <a href="https://opensea.io/collection/genart-0hjutgv">EXPLORE</a>
            </div>
          </Col>
          <Col className={styles.conimage}>
            <img src={WC02} className={styles.gen02} loading="lazy"></img>
            <div className={styles.btn_dark_mobile}>
              <a href="https://opensea.io/collection/genart-0hjutgv">EXPLORE</a>
            </div>
          </Col>
        </Row>
        <Row className={styles.section1}>
          <Col>
            <div className={styles.text}>
              <div className={styles.label}>Polygon</div>
              <h2>Kick Ass Super Woman</h2>

              <div className={styles.parent}>
                <h3>
                  <div className={styles.stitle}>Items</div>
                  <span>12</span>
                </h3>

                <div className={styles.verticalrow_dark}></div>
                <h3>
                  <div className={styles.stitle}>Year</div>
                  <span>2018</span>
                </h3>
              </div>
              <br></br>
              <div className={styles.edition2}>Limited but growing handcraftet 1/1 Artwork Collection</div>
            </div>

            <p>
            This collection tributes to all women in history and around the 
            world who achieved great things but they were usually in the 
            second row. And to all woman that through deprivation and sacrifice 
            enabled others to achieve great things, aware that they would never 
            be in the Spotlight.
            </p>
            <div className={styles.btn_dark_desk}>
              <a href="https://opensea.io/collection/kick-ass-super-women">EXPLORE</a>
            </div>
          </Col>
          <Col className={styles.conimage}>
            <img src={KASW01} className={styles.gen01} loading="lazy"></img>
            <div className={styles.btn_dark_mobile}>
              <a href="https://opensea.io/collection/kick-ass-super-women">EXPLORE</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Work2;
