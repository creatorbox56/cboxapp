import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import styles from "../styles/Work2.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GEN01 from "../images/gen01.jpg";
//import GEN02 from "../images/gen02.jpg";
import GEN02 from "../images/gen02_001.png";
import GEN03 from "../images/gen03_001.jpg";
import GEN04 from "../images/gen04_001.JPG";
import GEN05 from "../images/gen05_001.jpg";
//import styles from "../styles/global.scss";

function Work2() {
  return (
    <div>
      {" "}
      <Container fluid>
      <Row className={styles.section5_desk}>
          <Col className="col-6-md">
            <div className={styles.text}>
              <div className={styles.label}>Circles (2018 - 2022) - <a href="https://creatorbox.de/genart/gen05">Live View</a></div>
              <h2>Generation 05</h2>

              <div className={styles.parent}>
                <h3>
                  <div className={styles.stitle}>Price</div>
                  <span>2250 €</span>
                </h3>

                <div className={styles.verticalrow_light}></div>
                <h3>
                  <div className={styles.stitle}>Year</div>
                  <span>2021</span>
                </h3>
              </div>
              <br></br>
              <div className={styles.edition2}>49,6 x 37,7 inches (126 x 96 cm) Fine Art Print on Alu-Dibond beyond Musesums glass with Showcase frame</div>
            </div>
            
            <p>
             With this piece I was looking for the prefect sweet spot between chaos and order. Circles are created from
             the entire surface and build a line to the center of another circle when they intersect. 
            </p>
            <div className={styles.btn_light_desk}>
              <a href={"/workitems/search?id=gen05"}>EXPLORE</a>
            </div>
          </Col>
  
          <Col className="col-6-md"></Col>
        
        </Row>
        <Row className={styles.section5_mobile}>
          <Col className="col-12-md">
            <div className={styles.text}>
              <div className={styles.label}>Circles (2018 - 2022)</div>
              <h2>Generation 05</h2>

              <div className={styles.parent}>
                <h3>
                  <div className={styles.stitle}>Price</div>
                  <span>2250 €</span>
                </h3>

                <div className={styles.verticalrow_light}></div>
                <h3>
                  <div className={styles.stitle}>Year</div>
                  <span>2021</span>
                </h3>
              </div>
              <br></br>
              <div className={styles.edition2}>49,6 x 37,7 inches (126 x 96 cm) Fine Art Print on Alu-Dibond beyond Musesums glass with Showcase frame</div>
            </div>
            
            <p>
            With this piece I was looking for the prefect sweet spot between chaos and order. Circles are created from
             the entire surface and build a line to the center of another circle when they intersect. 
            </p>
            <div className={styles.btn_light_mobile}>
              <a href={"/workitems/search?id=gen05"}>EXPLORE</a>
            </div>
          </Col>        
        </Row>
      <Row className={styles.section4}>
          <Col className="col-6-md">
            <div className={styles.text}>
              <div className={styles.label}>Circles (2018 - 2022)</div>
              <h2>Generation 04</h2>

              <div className={styles.parent}>
                <h3>
                  <div className={styles.stitle}>Price</div>
                  <span>960 €</span>
                </h3>

                <div className={styles.verticalrow_dark}></div>
                <h3>
                  <div className={styles.stitle}>Year</div>
                  <span>2022</span>
                </h3>
              </div>
              <br></br>
              <div className={styles.edition2}>18,9 x 18,9 inches (48 x 48 cm) Fine Art Print with
              Passepartout beyond Museums glass</div>
            </div>

            <p>
            The basic idea of this work is to visualize thoughts. Thoughts are energy and with this "Braintube" I wanted to materialize them.
            Circles are arranged in a spiral around a center point. With the help of noise, interesting deviations are achieved.
            This results in interesting structures that create a thee dimensional impression.
            </p>
            <div className={styles.btn_dark_desk}>
              <a href={"/workitems/search?id=gen04"}>EXPLORE</a>
            </div>
          </Col>
          <Col className={styles.conimage}>
            <img src={GEN04} className={styles.gen04} loading="lazy"></img>
            <div className={styles.btn_dark_mobile}>
              <a href={"/workitems/search?id=gen04"}>EXPLORE</a>
            </div>
          </Col>
        </Row>
      <Row className={styles.section3}>
          <Col className="col-6-md">
            <div className={styles.text}>
              <div className={styles.label}>Circles (2018 - 2022)</div>
              <h2>Generation 03</h2>

              <div className={styles.parent}>
                <h3>
                  <div className={styles.stitle}>Price</div>
                  <span>960 €</span>
                </h3>

                <div className={styles.verticalrow_dark}></div>
                <h3>
                  <div className={styles.stitle}>Year</div>
                  <span>2021</span>
                </h3>
              </div>
              <br></br>
              <div className={styles.edition2}>18,9 x 18,9 inches (48 x 48 cm) Fine Art Print with
              Passepartout beyond Museums glass</div>
            </div>

            <p>
              GEN03 is a further development of the algorithm from GEN01. A line is formed
              betweeen the centers of circles when they intersect. However, the circles originate
              from the center of the canvas and run towards the outer edges. This creates the effect of an 
              imperfect circle.
            </p>
            <div className={styles.btn_dark_desk}>
              <a href={"/workitems/search?id=gen03"}>EXPLORE</a>
            </div>
          </Col>
          <Col className={styles.conimage}>
            <img src={GEN03} className={styles.gen03} loading="lazy"></img>
            <div className={styles.btn_dark_mobile}>
              <a href={"/workitems/search?id=gen03"}>EXPLORE</a>
            </div>
          </Col>
        </Row>
        <Row className={styles.section2}>
          <Col>
            <div className={styles.text}>
              <div className={styles.label}>Circles (2018-2022)</div>
              <h2>Generation 02</h2>

              <div className={styles.parent}>
                <h3>
                  <div className={styles.stitle}>Price</div>
                  <span>3500 €</span>
                </h3>

                <div className={styles.verticalrow_light}></div>
                <h3>
                  <div className={styles.stitle}>Year</div>
                  <span>2019</span>
                </h3>
              </div>
              <div className={styles.edition2}>37,7 x 49,6 inches (96 x 126 cm) Fine Art Print on Alu-Dibond beyond Musesums glass</div>
            </div>
            <p>
            The theme of chaos and order play a big role in all of my works. 
            Seen from close up, chaos reigns in this work. Lines overlap each other in a crisscross pattern. 
            But from a distance, in turn, an orderly structure emerges. A circle. 
            This work is finished with silkscreen print to bring another unforeseen component, namely the human being into play. 
            The golden color creates a quite noble effect.
            </p>
            <div className={styles.btn_light_desk}>
              <a href={"/workitems/search?id=gen02"}>EXPLORE</a>
            </div>
          </Col>
          <Col className={styles.conimage}>
            <img src={GEN02} className={styles.gen02} loading="lazy"></img>
            <div className={styles.btn_light_mobile}>
              <a href={"/workitems/search?id=gen02"}>EXPLORE</a>
            </div>
          </Col>
        </Row>
        <Row className={styles.section1}>
          <Col>
            <div className={styles.text}>
              <div className={styles.label}>Circles (2018 - 2022)</div>
              <h2>Generation 01</h2>

              <div className={styles.parent}>
                <h3>
                  <div className={styles.stitle}>Price</div>
                  <span>1450 €</span>
                </h3>

                <div className={styles.verticalrow_dark}></div>
                <h3>
                  <div className={styles.stitle}>Year</div>
                  <span>2018</span>
                </h3>
              </div>
              <br></br>
              <div className={styles.edition2}>23,6 x 29,5 inches (60 x 75 cm) Fine art
              Print on Alu-Dibond beyond Museums glass</div>
            </div>

            <p>
              I had my first contact with the topic of processing and generative
              art in 2017 during the Active Symposium at the MUC CCC. This work
              is the result of my first steps with processing. Different sized
              circles are placed on a surface without touching each other. I
              think this is when I discovered my love to circles.
            </p>
            <div className={styles.btn_dark_desk}>
              <a href={"/workitems/search?id=gen01"}>EXPLORE</a>
            </div>
          </Col>
          <Col className={styles.conimage}>
            <img src={GEN01} className={styles.gen01} loading="lazy"></img>
            <div className={styles.btn_dark_mobile}>
              <a href={"/workitems/search?id=gen01"}>EXPLORE</a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Work2;
