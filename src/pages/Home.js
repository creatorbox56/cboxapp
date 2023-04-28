
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.scss"
import Sketch from "../mainbg_circles.js";

/* const Image = () => {
    return <img src={banner} alt="artgate image"></img>;
  };

  const Contents = (props) => {
    return (
      
      <div className="text">
        <h6> {props.label} </h6> 
        <h2> {props.title} </h2>
       
        <div className="parent">
        <h3><div className="stitle">{props.subtitle1}</div><span>{props.subtitle2}</span></h3>

        <div className="vertical-row"></div>
        <h3><div className="stitle">{props.subtitle3}</div><span>{props.subtitle4}</span></h3>
        </div>
        <br></br>
        <h4> {props.subtitle5} </h4>
     
    
        <div className="btn_main"><a href="/project-space">EXPLORE</a></div>
      </div>
  
    );
  }; */

function Home(){
/*     return <div> <Container fluid>
      <Sketch></Sketch>
        <Row>  
        <Col className="col-12-md-layer">
          <Contents
            label="PopUp Exhibition"
            title="ARTHOUSE"
            subtitle1="From"
            subtitle2="29.04.2023"
            subtitle3="To"
            subtitle4="01.05.2023"
            subtitle5="@Freddie Isartor Munich"/>
       
          </Col> 
        </Row>
        </Container>
        </div> */
        return (
          <div>
          <Container fluid>
            <Sketch></Sketch>
            <Row className={styles.section5_desk}>
                <Col className="col-6-md">
                  <div className={styles.text}>
                    <div className={styles.label}>PopUp Exhibition</div>
                    <h2>MUNICH ARTHOUSE</h2>
      
                    <div className={styles.parent}>
                      <h3>
                        <div className={styles.stitle}>From</div>
                        <span>29.04.2023</span>
                      </h3>
      
                      <div className={styles.verticalrow_light}></div>
                      <h3>
                        <div className={styles.stitle}>To</div>
                        <span>01.05.2023</span>
                      </h3>
                    </div>
                    <br></br>
                    <div className={styles.edition2}>Location: Thomas-Wimmer-Ring 1</div>
                  </div>
                  
                  <p>
                  I'm pleased to participate in the PopUp exhibition Munich Arthouse at "Freddie" at the Isartor. On about 2000 sqm 60 artists present themselves. 
                  Entry is free and the exhibition is open on these 3 days from 11 am - 6 pm.
                   I will exhibit pieces of my Circles Collection (2018 - 2022).
                  </p><b></b>powered by ARTMUC & Optima Firmengruppe

                  <div className={styles.btn_light_desk}>
                    <a href="/work">EXPLORE</a>
                  </div>
                </Col>
        
                <Col className="col-6-md"></Col>
              
              </Row>
              <Row className={styles.section5_mobile}>
                <Col className="col-12-md">
                  <div className={styles.text}>
                    <div className={styles.label}>PopUp Exhibition</div>
                    <h2>MUNICH ARTHOUSE</h2>
      
                    <div className={styles.parent}>
                      <h3>
                        <div className={styles.stitle}>From</div>
                        <span>29.04.2023</span>
                      </h3>
      
                      <div className={styles.verticalrow_light}></div>
                      <h3>
                        <div className={styles.stitle}>To</div>
                        <span>01.05.2023</span>
                      </h3>
                    </div>
                    <br></br>
                    <div className={styles.edition2}>Location: Thomas-Wimmer-Ring 1</div>
                  </div>
                  
                  <p>
                  I'm pleased to participate in the PopUp exhibition Munich Arthouse at "Freddie" at the Isartor. On about 2000 sqm 60 artists present themselves. 
                  Entry is free and the exhibition is open on these 3 days from 11 am - 6 pm.
                  I will exhibit pieces of my Circles Collection (2018 - 2022).
                  </p><br></br>powered by ARTMUC & Optima Firmengruppe
                  <div className={styles.btn_light_mobile}>
                    <a href="/work">EXPLORE</a>
                  </div>
                </Col>        
              </Row>
              </Container></div>)
}

export default Home;