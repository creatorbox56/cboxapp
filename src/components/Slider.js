

import React, { useState } from "react";
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'

import RangeSlider from 'react-bootstrap-range-slider';
import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import '../styles/RangeSlider.module.css';


function SliderApp() {
    const [ value1, setValue ] = React.useState(50);
    const [ value2, setValue8 ] = React.useState(70);
    return(
    <Container>
    <Row>
    <Col className="slider-label"> Movement</Col>
      <Col className="slider">
        <RangeSlider
          value={value1}
          onChange={e => setValue(e.target.value)}
          variant='dark'
          min={1}
          max={2}
        />
      </Col>
    </Row>
  </Container>
    )
}

export default SliderApp;
