// This is in place of an import statement
import React, { Component } from "react";
import p5 from 'p5'

export default class Seed extends Component {
  constructor(props) {
    super(props);
    console.log(props.wallet);
    this.state = {
        wallet: props.wallet,
        firstViewToParent: ""
      };
  }
//React ref for div reference we pass into p5
sketchRef = React.createRef()
  //const containerRef = useRef();
  //let wallet = props.wallet;
  //Sketch = (p) => {
    //React ref for div reference we pass into p5


    //P5 instance mode
    initSketch = (p) => {
    let res3;
    let res2;
    let index;
    let h;
    let seed = "";
    let sVal = 0;
    let fruits = [];
    let middle;
    let f;
    let color1;
    let keylength = 20;
    let bbutton;
    let res;
    let Progress;
    let progress, progress2;
    let shapeMove = false;
    let nseed;
    let onMouse = false;
    let wallet = 0;
    var cnv2;
    let tokenData = {
      hash: "0xd9134c11cd5ed9798ea0811364d63bd850c69c5d13383c9983ade39847e9ea86",
      tokenId: "99000000",
    };

    function random_hash() {
      let chars = "0123456789abcdef";
      let result = "0x";
      for (let i = 64; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)];
      return result;
    }

    //Generate inital Seed for Braintube App
    tokenData = { hash: random_hash() };
    let iseed = parseInt(tokenData.hash.slice(0, 16), 16);
    //this.setState({cSeed: iseed});

    class Count {
      constructor(s, w) {
        this.s = s;
        this.w = w;
        this.p = p.createP("");
      }
      start(_res) {
        /*     if (!this.done) {
              setInterval(() => this.counter(_res), this.w);
            } */

        this.counter(_res, this.w);
      }
      counter(res) {
        if (fruits.length < keylength) {
          // this.s ++
          var c = p.color(h, 100, 100);
          p.fill(c);
          p.noStroke();
          p.ellipse(p.mouseX, p.mouseY, 15, 15);
          this.seed(res);
          this.s = p.map(fruits.length, 0, keylength, 0, 100);
          this.s = p.round(this.s);
         // this.p.html(this.s);
        }
      }
      reset() {
        this.s = 0;
       // this.p.html(this.s);
      }

      seed(res) {
        if (
          res == 0 ||
          res == 1 ||
          res == 2 ||
          res == 3 ||
          res == 4 ||
          res == 5 ||
          res == 6 ||
          res == 7 ||
          res == 8 ||
          res == 9
        ) 
        {
          res2 = res.toString();

          fruits.push(res2);
        } 
        /*else if (res == 10) {
          res2 = "a";

          fruits.push(res2);
        } else if (res == 11) {
          res2 = "b";

          fruits.push(res2);
        } else if (res == 12) {
          res2 = "c";

          fruits.push(res2);
        } else if (res == 13) {
          res2 = "d";

          fruits.push(res2);
        } else if (res == 14) {
          res2 = "e";

          fruits.push(res2);
        } else if (res == 15) {
          res2 = "f";

          fruits.push(res2);
        } */
      }
      seed2() {
        this.s = p.map(fruits.length, 0, keylength, 0, 100);
        this.s = p.round(this.s);
        //this.p.html(this.s);
      }
    }

    function getSeed() {
      for (var i = 0; i < fruits.length; i++) {
        seed = seed + fruits[i].toString();
      }
      //seed = seed.slice(0, 16)
      fruits.splice(0, fruits.length);

      return seed;
    }

    p.preload = () => {};

    p.setup = () => {
      //let seed = parseInt(tokenData.hash.slice(0, 16), 16);

      let cnv = p.createCanvas(700, 400);
     
      p.colorMode(p.HSB, 360, 100, 100);
      h = 0;
      p.background(255);
      p.stroke(69,69,69,100);
      p.rect(0,0,p.width, p.height);
      p.counter = new Count(0, keylength);
      middle = p.height - 30;
      color1 = p.color(200, 100, 100);
      p.fill(color1);
      p.textSize(24);
      f = p.createP("");
      p.textFont("monospace");
     
      p.fill(69);
      p.noStroke();
      let txt = p.text("Progress Seed: ", 0, middle - 20);
      p.stroke(color1);
      p.noFill();
      p.rect(0, middle, p.width, 20, 15);
      //var button = p.select{styles.btn_reset};
      var button = p.createButton("Reset");
      button.mousePressed(reset);
      button.class("btn_reset");

      cnv.mousePressed(mouseDragged2);
      //wallet = nextProps.wallet;
      //console.log("Wallet "+ wallet);
      
    };

    function mouseDragged2() {
      
      onMouse = true;
      console.log(onMouse);
    }
    function reset() {
      //counter = new Count(0, keylength);
      console.log("Reset startet");
      sVal = "";
      seed = "";
      res = "";
      Progress = 0;
      progress = 0;
      progress2 = 0;
      fruits.length = 0;
      fruits = [];
      h = 0;
      p.counter.reset();
      p.background(255);
      p.stroke(69,69,69,100);
      p.noFill();
      p.rect(0,0,p.width, p.height);
      middle = p.height - 30;
      color1 = p.color(200, 100, 100);
      p.fill(color1);
      p.textSize(32);
     // f = p.createP("");
      p.textFont("monospace");
      let txt = p.text("Progress Seed: ", 0, middle - 20);
      
      p.stroke(color1);
      p.noFill();
      p.rect(0, middle, p.width, 20, 15);
    }

    p.resetSketch = () => {};


    p.mousePressed = () => {
     
      shapeMove = true;
    };
    p.mouseReleased = () => {
      shapeMove = false;
      onMouse = false
    };
    p.mouseDragged = () => {
     
      if(this.state.wallet=="")
      {
      
        p.textSize(24);
        p.textFont("monospace");
        p.fill(69);
        p.noStroke();
        let txt = p.text("Please connect wallet", (p.width/2)-100, p.height/2);
      
      }
    else {
      console.log(onMouse);
        if (shapeMove && onMouse) {
          if (sVal < keylength && seed == "") {
            sVal = fruits.length;
  
            //Color
            if (h == 360) {
              h = 0;
            } else {
              h += 1;
            }
  
            res = (p.mouseX + p.mouseY) & 10;
            //this.p5Canvas = new p5(this.initSketch2(res), this.sketchRef.current)
            p.counter.start(res);
            p.counter.seed2();
  
            Progress = p.map(sVal, 0, keylength, 0, p.width);
  
            p.pbar = p.color(200, 100, 100);
            p.fill(p.pbar);
            p.textSize(32);
            p.textFont("monospace");
  
            p.rect(0, middle, Progress, 20, 15);
            //stroke(color1);
            p.noFill();
            var c = p.color(h, 100, 100);
            p.fill(c);
            p.noStroke();
  
            //Seed
            p.ellipse(p.mouseX, p.mouseY, 15, 15);
          } else if (fruits.length == keylength && seed == "") {
            seed = getSeed();
           
            let nseed = parseInt(getSeed().slice(0, 16), 16);
            //this.setState(seed);
            this.props.firstViewToParent(nseed);
            this.setState({
              firstViewToParent: nseed
         })
          } else if (seed != "") {
            console.log("seed erzeugt");
            //seed="";
          }
        }
      }

    };


  };

    
    
    
      

  componentDidMount() {
    //Create p5 canvas once component mounts
    this.p5Canvas = new p5(this.initSketch, this.sketchRef.current)
  
    
}
UNSAFE_componentWillReceiveProps(nextProps){
    //  console.log("hello");
      if(this.props.wallet !== nextProps.wallet){
      console.log("New Wallet Seedgenerator " + nextProps.wallet);
         this.setState({
             wallet: nextProps.wallet
        })
          return true;
      }
     else{
        return false;
     }
  }
render() {
    //this div will contain the sketch canvas
    return (<div className="mySketch" ref={this.sketchRef} />)
  }
}


