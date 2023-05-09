import banner from '../braintube_bw.png';
import cbox from '../cbox.jpg';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Project.module.scss";
import Sketch from "../mainbg.js";

const Image = () => {
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
     
    
        <div className="btn_main"><a href="/project-space">CREATE</a></div>
      </div>
  
    );
  };

function Project(){
    return (
        <div>
        <Container fluid>
          <Sketch></Sketch>
          <Row className={styles.section5_desk}>
              <Col className="col-6-md">
                <div className={styles.text}>
                  <div className={styles.label}>Upcoming</div>
                  <h2>Braintube</h2>
    
                  <div className={styles.parent}>
                    <h3>
                      <div className={styles.stitle}>Chain</div>
                      <span>Ethereum</span>
                    </h3>
    
                    <div className={styles.verticalrow_light}></div>
                    <h3>
                      <div className={styles.stitle}>Release Date</div>
                      <span>Autumn 2023</span>
                    </h3>
                  </div>
                  <br></br>
                  <div className={styles.edition2}>Open Edition</div>
                </div>
                
                <p>
                Is everything only imagination and in truth we are only brains in a glass in a giant storage cabinet - called the universe. 
                So the only thing that gives us a clue to our being is our thoughts. I think - therefore I am (Sokrates).<br></br>
                Braintube is the visualization of a thought, the materialized flash of mind and pure enery. Every doing starts with a thought.
                Braintube is the first project that is created with a seed that you create yourself with the movement of your mouse. 
                You can create as many versions as you want. At the end you mint the one you like the most. 
                </p>

                <div className={styles.btn_light_desk}>
                  <a href="/project-space">EXPLORE</a>
                </div>
              </Col>
      
              <Col className="col-6-md"></Col>
            
            </Row>
            <Row className={styles.section5_mobile}>
              <Col className="col-12-md">
                <div className={styles.text}>
                  <div className={styles.label}>Upcoming</div>
                  <h2>Braintube</h2>
    
                  <div className={styles.parent}>
                    <h3>
                      <div className={styles.stitle}>Chain</div>
                      <span>Ethereum</span>
                    </h3>
    
                    <div className={styles.verticalrow_light}></div>
                    <h3>
                      <div className={styles.stitle}>Release Date</div>
                      <span>Automn 2023</span>
                    </h3>
                  </div>
                  <br></br>
                  <div className={styles.edition2}>Open Edition</div>
                </div>
                
                <p>
                Everything could be pure imagination and in truth we are only brains in a jar in a giant storage cabinet - called the universe. 
                So the only thing that gives us a clue to our being is our thoughts. I think - therefore I am (Sokrates).<br></br>
                Braintube is the visualization of a thought or the materialized flash of mind and enery. Every doing starts with a thought.
                </p>
                <div className={styles.btn_light_mobile}>
                  <a href="/work">EXPLORE</a>
                </div>
              </Col>        
            </Row>
            </Container></div>)
}

export default Project;