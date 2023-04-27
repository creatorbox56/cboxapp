import axios from "axios";
import Braintube from "../Braintube3";
import styles from "../styles/global.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Seed from "../components/Seedgenerator";
import Mint from "../components/Mint";

// let seed;
// let colorset;
// let complexity;
// let noise;
// let mutation;
// var rarity;
// let tube;
// let stroke;
// let id;

function ItemPage() {
  const queryParams = new URLSearchParams(window.location.search);
  const term = queryParams.get("id");
  const seed2 = queryParams.get("seed");
  const colorset = queryParams.get("colorset");
  const tubemode = queryParams.get("tube");
  const mutation = queryParams.get("mutation");
  const noise = queryParams.get("noise");
  const rarity = queryParams.get("rarity");

  let res = axios
    .post("/getItemDetail", {
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        user: {
          _key: term,
        },
      },
    })

    .then(function (response) {
      console.log(response.data.rarity);
    //   seed = response.data.seed;
    //   colorset = response.data.colorset;
    //   tube = response.data.tube;
    //   noise = response.data.noise;
    //   complexity = response.data.complexity;
    //   mutation = response.data.mutation;
    //   rarity = response.data.rarity;
    //   stroke = response.data.stroke;
    //   id = response.data.id;
    })
 

  return (
    <div className="Item">
      <p>Value of term: {term}</p>

      <Row>
        <Col className="col-6-md-left">
      
        </Col>
        <Col className="col-6-md-right">
          <div className="text2">
          
            <h2 className="text-title">Braintube</h2>
            <p className="text-sale">Initial Sale Date: 19. März 2022</p>

            <Row>
              <p className="col-4">Tubemode</p>
              <p className="col-8">{tubemode}</p>
            </Row>
            <Row>
              <p className="col-4">Colormode</p>
              <p className="col-8">{colorset}</p>
            </Row>
            <Row>
              <p className="col-4">Noise</p>
              <p className="col-8">{noise}</p>
            </Row>
            <Row>
              <p className="col-4">Mutation</p>
              <p className="col-8">{mutation}</p>
            </Row>
            <Row>
              <p className="col-4">Rarity</p>
              <p className="col-8">{rarity}</p>
            </Row>
          </div>
          <Row>
          </Row>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
}

export default ItemPage;
