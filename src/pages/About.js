
import cbox from '../cbox.jpg';
import cbox400 from '../cbox_400px.jpg';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/About.module.scss";


function About(){
    return <div className={styles.rowbg}> 
        <Row>
          <Col className="col-6-md">
            <div className={styles.bio_md}>
            <h3>Creatorbox</h3>
            <p>Passionate about generative Art since 2017 I studied many books,
            wrote tenthousends lines of code
            and produced hundreds of outputs.
            Exploring the boundaries between technology and Art I love it
            when an algorithm produces something quite unexpected.
            Generative Art allows me to purse my deep inner need to be creative.
            </p>
            <p>I’m always looking for the sweet spot – the balance between Chaos and Order.</p>
            </div>
          </Col>
          <Col className="col-6-md"><div className={styles.portrait_md}>
          <img src={cbox} width="700"></img></div>
          </Col>
        </Row>
        <Row>
          <Col className="col-6-md"><div className={styles.portrait_xs}>
          <img src={cbox400} width="300"></img>
          </div>
          </Col>
          <Col className="col-6-md">
          <div className={styles.bio_xs}>
          <h3>Creatorbox</h3>
            <p>Passionate about generative Art since 2017 I studied many books,
            wrote tenthousends lines of code
            and produced hundreds of outputs.
            Exploring the boundaries between technology and Art. </p>
            <p>I love it when an algorithm produces something quite unexpected.
            Generative Art allows me to purse my deep inner need to be creative.
            </p>
            
               <p>I’m always looking for the sweet spot – the balance between Chaos and Order.</p>
            </div>
          </Col>
        </Row>
      
        </div>
}

export default About;