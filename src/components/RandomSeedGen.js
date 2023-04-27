import React, { Component } from 'react'
import p5 from 'p5'
import Braintube2 from "../Braintube2";
import styles from "../styles/RandomSeed.css";

export default class Seed extends Component {
    constructor() {
        super();
        //console.log("bls "+props.seed);*/
        this.state = {
            cSeed: "123456789012345",
          };

        // console.log(this.state.cSeed);
      } 

    //React ref for div reference we pass into p5
    sketchRef = React.createRef()

    //P5 instance mode
    initSketch = (p) => {
   
        let res2;
        let h;
        let seed = "";
        let sVal = 0;
        let fruits = [];
        let middle;
        let color1;
        let keylength = 799;
        let pbar;
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
          this.setState({cSeed: iseed});

        class Count {
            constructor(s, w) {
             // this.s = s;
              this.w = w;
              this.p = p.createP("");
            }
            start(_res) {
              if (!this.done) {
                setInterval(() => this.counter(_res), this.w);
              }
            }
            counter(res) {
              if (fruits.length < keylength) {
                // this.s ++
                var c = p.color(h, 100, 100);
                p.fill(c);
                p.noStroke();
                p.ellipse(p.mouseX, p.mouseY, 15, 15);
                this.seed(res);
          
              } 
            }
            reset() {
              this.s = 0;
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
              ) {
                res2 = res.toString();
          
                fruits.push(res2);
          
              } else if (res == 10) {
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
          
              }
            }
            seed2() {
              let progress = p.map(fruits.length,0,keylength,0,100);
              let progress2 = p.round(progress)
              this.p.html(progress2);
            }


        }

        function getSeed(){
            for (var i = 0; i < fruits.length; i++) {
        
                seed = seed + fruits[i].toString();
              }
        
              fruits.splice(0,fruits.length);
           
              return seed;
        }



        p.preload = () => {

        }


        p.setup = () => {

            p.createCanvas(800, 300);
            p.colorMode(p.HSB, 360, 100, 100);
            h = 0;
            p.background(200);
            p.stroke(0);
            p.noFill();
            p.rect(0,0,p.width, p.height);
            p.counter = new Count(0, keylength);
            middle = p.height - 30;
            color1 = p.color(200, 100, 100);
            p.fill(color1);
            p.noStroke();
            p.textSize(32);
            p.textFont("monospace");
            let txt = p.text("Progress Seed: ", 0, middle - 20);
            p.stroke(color1);
            p.noFill();
            p.rect(0, middle, p.width, 20, 15);
        
    }

    p.mouseDragged = () => {
        if(sVal < keylength && seed==""){
            sVal = fruits.length;
            if (h == 360) {
                h = 0;
              } else {
                h += 1;
              }
            let res = (p.mouseX + p.mouseY) & 15;
            p.counter.start(res);
            p.counter.seed2();
           
           
            let Progress = p.map(sVal, 0, keylength, 0, p.width);
        
            pbar = p.color(200, 100, 100);
            p.fill(pbar);
            p.textSize(32);
            p.textFont("monospace");
        
            p.rect(0, middle, Progress, 20, 15);
            //stroke(color1);
            p.noFill();
            var c = p.color(h, 100, 100);
            p.fill(c);
            p.noStroke();
            p.ellipse(p.mouseX, p.mouseY, 15, 15);
          }
          else if(fruits.length==keylength && seed=="") {
             
              //console.log(getSeed());
              let nseed = parseInt(getSeed().slice(0, 16), 16);
              this.setState({cSeed: nseed});
             
          }else if(seed!=""){
           // this.setState({cSeed: this.seed});
        
             //seed="";
             //this.seed.setState(seed);
          }
         
    }
}
    
    componentDidMount() {
        //Create p5 canvas once component mounts
        this.p5Canvas = new p5(this.initSketch, this.sketchRef.current)
      
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }

    componentWillReceiveProps(nextProps){
        //  console.log("hello");
       // console.log(this.seed);
        //   if(this.props.seed !== nextProps.seed){
        //   console.log("a " + this.state.valueState);
        //      this.setState({
        //          valueState: nextProps.sliderVal
        //     })
        //       return true;
        //   }
        //  else{
        //     return false;
        //  }
      }
    render() {
        //this div will contain the sketch canvas
        return (<div className="mySketch" ref={this.sketchRef}></div>)
    }
}