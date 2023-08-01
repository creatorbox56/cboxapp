
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../styles/Home.module.scss"
import Sketch from "../mainbg_circles.js";
//import styles from "../styles/global.scss";
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
                <Col>
                  <div className={styles.text}>
                    <div className={styles.label}>Physical Collection</div>
                    <h2>Circles</h2>
      
                    <div className={styles.parent}>
                      <h3>
                        <div className={styles.stitle}>From</div>
                        <span>2018</span>
                      </h3>
      
                      <div className={styles.verticalrow_light}></div>
                      <h3>
                        <div className={styles.stitle}>To</div>
                        <span>2022</span>
                      </h3>
                    </div>
                    <br></br>
                    <div className={styles.edition2}>Only available as Physical Print</div>
                  </div>
                  
                  <p>
                  This collection contains carefully selected works from 2018 - 2022.
                  There are 5 different projects presented with the overarching theme "circles".
                  Even if the result does not always look like a circle, all works have an algorithm as a basis
                  in which circles are a central element. All pieces are produced only once and are therefore unique.
                  Each piece is hand-numbered and contains my maker's stamp on the back.
                 </p>

                  <div className={styles.btn_light_desk}>
                    <a href="/work">EXPLORE</a>
                  </div>
                </Col>
        
                <Col></Col>
              
              </Row>
              <Row className={styles.section5_mobile}>
                <Col className="col-12-md">
                  <div className={styles.text}>
                    <div className={styles.label}>Physical Collection</div>
                    <h2>Circles</h2>
      
                    <div className={styles.parent}>
                      <h3>
                        <div className={styles.stitle}>From</div>
                        <span>2018</span>
                      </h3>
      
                      <div className={styles.verticalrow_light}></div>
                      <h3>
                        <div className={styles.stitle}>To</div>
                        <span>2022</span>
                      </h3>
                    </div>
                    <br></br>
                    <div className={styles.edition2}>Only available as Physical Print</div>
                  </div>
                  
                  <p>
                  This collection contains carefully selected works from 2018 - 2022.
                  There are 5 different projects presented with the overarching theme "circles".
                  Even if the result does not always look like a circle, all works have an algorithm as a basis
                  in which circles are a central element. All pieces are produced only once and are therefore unique.
                  Each piece is hand-numbered and contains my maker's stamp on the back.
                  </p>
                  <div className={styles.btn_light_mobile}>
                    <a href="/work">EXPLORE</a>
                  </div>
                </Col>        
              </Row>
              </Container></div>)
}

export default Home;