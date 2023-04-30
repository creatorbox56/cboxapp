import React, { useState } from "react";
import ReactDOM from "react-dom";
//import App from './App'
import Header from "./components/Header";
import Header2 from "./components/Header2";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import FooterMain from "./components/FooterMain";
import ProjectSpace from "./pages/ProjectSpace";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import Digital from "./pages/Digital";
import About from "./pages/About";
import Items from "./components/ItemPage";
import Workitems from "./components/Workitems";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Link} from "react-router-dom";
import Work2 from "./pages/Work2";
import {Navbar} from "./components/Navbar";
import {NavItem} from "./components/NavItem";

function Page() {
  //const [value1, setValue] = React.useState(1);
  // const [value2, setValue8] = React.useState(70);
  // const sliderVal = { value1 };
  // const [setRef] = useP5(App);

/*   const [data, setData] = useState(0);

  const firstViewToParent = (num) => {
    console.log('handling firstViewToParent callback');
    setData(num);
  }; */


  const [wallet, setWallet] = useState(0);
  const childToParent = (childdata) => {
     
        setWallet(childdata);
        alert(childdata);
    }



/*   const Contents = (props) => {
    return (
      <div className="text">
        <h2> {props.title} </h2>
        <h3> {props.subtitle} </h3>
        <h3> {props.subtitle2} </h3>
        <div className="btn_main"><a href="#">Latest Project</a></div>
      </div>
    );
  }; */
  return (
  

    <Router>
      <Header2 childToParent={childToParent}/>
     <Switch>
            <Route path="/" exact="true" component={Home}>
                </Route>
             
            <Route path="/project-space">
                <ProjectSpace childToParent={wallet}></ProjectSpace></Route>
            <Route path="/about" component={About}>
             </Route>
            <Route path="/item/:id" component={Items}/>
            <Route path="/workitems/:id"><Workitems></Workitems></Route>
            <Route path="/digital" component={Digital}></Route>
            <Route path="/projects" component={Project}></Route>
            <Route path="/work" component={Work2}></Route>
            </Switch>
      <FooterMain></FooterMain>
    </Router> 

  );
}
ReactDOM.render(<Page />, document.getElementById("root"));
