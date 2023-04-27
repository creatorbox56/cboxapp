import React, { Component } from 'react'
import p5 from 'p5'
import "./styles/Slider.module.css";
import axios from "axios";
import Mint from "./components/Mint";

export default class Braintube extends Component {
    constructor(props) {
        super(props);
        console.log("seed " + props.seed);
        console.log("wallet  " + props.wallet);
        this.state = {
            valueSeed: props.seed,
          };
       
      }

    //React ref for div reference we pass into p5
    sketchRef = React.createRef()

    //P5 instance mode
    initSketch = (p) => {

        var DEFAULT_SIZE = 900;
        var DIM = Math.min(window.innerWidth, window.innerHeight);
        var WIDTH = window.innerWidth;
        var HEIGHT = window.innerHeight;
        var M = DIM / DEFAULT_SIZE; // Keep things relative
        var STEP = 100 * M;
        var x, y;
        var w = 750;  
        var h = 750;
        let h1_Top, s1_Top, b1_Top, h2_Bottom, s2_Bottom, b2_Bottom, h3_bg, s3_bg, b3_bg, h4_cn;
        let s4_cn, b4_cn, n, h4_fill, s4_fill, b4_fill;
       
  
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

                    tokenData = { hash: random_hash() };
                    let seed = parseInt(tokenData.hash.slice(0, 16), 16);

          
                //     this.setState({
                //         valueSeed: props.seed
                //    }) 
        class Random {
            constructor(seed) {
              this.seed = seed;
            }
            random_dec() {
              this.seed ^= this.seed << 13;
              this.seed ^= this.seed >> 17;
              this.seed ^= this.seed << 5;
              return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000;
            }
            random_between(a, b) {
              return a + (b - a) * this.random_dec();
            }
            random_int(a, b) {
              return Math.floor(this.random_between(a, b + 1));
            }
            random_choice(x) {
              return x[Math.floor(this.random_between(0, x.length * 0.99))];
            }
          }
          
          //Source: https://www.30secondsofcode.org/js/s/hsb-to-rgb
    const HSBToRGB = (h, s, b) => {
    s /= 100;
    b /= 100;
    const k = (n) => (n + h / 60) % 6;
    const f = (n) => b * (1 - s * Math.max(0, Math.min(k(n), 4 - k(n), 1)));
    return [255 * f(5), 255 * f(3), 255 * f(1)];
    };

    p.preload = () => {

            //load images and shaders here
        }

/*         p.windowResized = (slider) => {
            p._renderer.position(p.windowWidth  - p.width  >> 1,
                                 p.windowHeight - p.height >> 1);
        
            const sliderX = (p.width  - slider.width  >> 1) + p._renderer.x,
                  sliderY = (p.height - slider.height >> 1) + p._curElement.y;
        
            slider.position(sliderX, sliderY);
          }; */

     
        p.setup = () => {

            var cnv = p.createCanvas(w, h)
           // p.createCanvas(WIDTH, HEIGHT);
            p.colorMode(p.RGB);
            p.smooth();
            //tokenData = { hash: random_hash() };
           
            //seed = 1234567890123456;
            //let seed = parseInt(tokenData.hash.slice(0, 16), 16);
            //let seed = this.props.seed;
            //seed = parseInt(seed.slice(0, 16), 16);
         

            let f=this.state.valueSeed;
            console.log("setup "+f);
            let RA = new Random(f);
          
            //Initial Random Values
            var centX = p.width / 2;
            var centY = p.height / 2;
            var radius = RA.random_int(30, 50);
            var nnoise = RA.random_dec(2);
            var strokeW = RA.random_between(0.4, 0.8);
            var ellipse_radius = RA.random_between(120, 150);
            var steps = RA.random_int(1000, 1100);
            var tn = RA.random_between(1, 2);
            var alphafill = RA.random_int(0, 50);
            var fill_ellipse_bool = RA.random_int(0, 3);
          
            //Random Colorset based on calculated colors
          
            //First Gradient Color in HSB-Color-Range
            h1_Top = RA.random_int(0, 360);
            s1_Top = RA.random_int(90, 100);
            b1_Top = RA.random_int(90, 100);
          
            //Convert to RGB
            var topColor = HSBToRGB(h1_Top, s1_Top, b1_Top);
            var rTop = parseInt(topColor[0], 16);
            var gTop = parseInt(topColor[1], 16);
            var bTop = parseInt(topColor[2], 16);
            var topColorRGB = p.color(rTop, gTop, bTop);
          
            //Second Gradient Color in HSB-Color-Range
            h2_Bottom = RA.random_int(0, 360);
            s2_Bottom = RA.random_int(90, 100);
            b2_Bottom = RA.random_int(90, 100);
          
            //Convert to RGB
            var bottomcolor = HSBToRGB(h2_Bottom, s2_Bottom, b2_Bottom);
            var rBottom = parseInt(bottomcolor[0], 16);
            var gBottom = parseInt(bottomcolor[1], 16);
            var bBottom = parseInt(bottomcolor[2], 16);
            var bottomColorRGB = p.color(rBottom, gBottom, bBottom);
          
            //Background Color in HSB-Color-Range calculated by 2nd gradient color
            h3_bg = (h2_Bottom + 360 / 6) % 360;
            s3_bg = RA.random_int(0, 100);
            b3_bg = RA.random_int(0, 20);
           
            //Convert to RGB
            var bgColor = HSBToRGB(h3_bg, s3_bg, b3_bg);
            var rBG = parseInt(bgColor[0], 16);
            var gBG = parseInt(bgColor[1], 16);
            var bBG = parseInt(bgColor[2], 16);
            var bgColorRGB = p.color(rBG, gBG, bBG);
          
              //Contrast Color in HSB-Color-Range calculated by 2nd gradient color
              h4_cn = (h2_Bottom + 360 / 2) % 360;
              s4_cn = RA.random_int(90, 100);
              b4_cn = RA.random_int(90, 100);
          
              //Convert to RGB
              var cColor = HSBToRGB(h4_cn, s4_cn, b4_cn);
              var rCC = parseInt(cColor[0], 16);
              var gCC = parseInt(cColor[1], 16);
              var bCC = parseInt(cColor[2], 16);
              var cColorRGB = p.color(rCC, gCC, bCC);
          
            //Ellipse Color in HSB-Color-Range calculated by 2nd gradient color
            //identical to bg color but higher saturation and brightness
            //h3_bg = h4_fill
          
            h4_fill = (h2_Bottom + 360 / 6) % 360;
            s4_fill = RA.random_int(50, 80);
            b4_fill = RA.random_int(50, 80);
           
            var fillColor = HSBToRGB(h4_fill, s4_fill, b4_fill);
            var rFill = parseInt(fillColor[0], 16);
            var gFill = parseInt(fillColor[1], 16);
            var bFill = parseInt(fillColor[2], 16);
            var fillColorRGB = p.color(rFill, gFill, bFill);
          
            fillColorRGB.setAlpha(alphafill);
          
            p.background(bgColorRGB);
          
            for (var ang = 0; ang < steps; ang = ang + tn) {
              
              //Calculate Color Steps to get a gradient Color from Top to Bottom
              n = p.map(ang, 0, steps, 0, 1);
              let newcolor = p.lerpColor(topColorRGB, bottomColorRGB, n);
          
              //Color of Braintube
              p.stroke(newcolor);
          
              radius += 0.3;
              nnoise += 0.01;
          
              var thisRadius = radius + p.noise(nnoise) * 300 - 100;
              var rad = p.radians(ang);
              x = centX + thisRadius * p.cos(rad);
              y = centY + thisRadius * p.sin(rad);
          
              if (fill_ellipse_bool == 0) {
                p.noFill();
              } else if(fill_ellipse_bool == 1){
                p.fill(fillColorRGB);
              } else if(fill_ellipse_bool == 2){
                p.stroke(0);
                newcolor.setAlpha(15);
                p.fill(newcolor);
              } else if(fill_ellipse_bool == 3){
                p.stroke(cColorRGB);
                //newcolor.p.setAlpha(alphafill);
                newcolor.setAlpha(10);
                p.fill(newcolor);
              }
              
              p.strokeWeight(strokeW);
              p.ellipse(x, y, ellipse_radius, ellipse_radius);
            }
        
        }
          
    p.sendData = () => {
        // axios.get("/getRandomSeed").then(response => {
        //     console.log(response.data);
        // })

        let res =  axios.post('/getCustomParams', {
          headers: {
        'Content-Type': 'application/json'
        },
        body: ({
        user: {
            // _cslider: json.cslider, 
            // _sslider: json.sslider,
            // _jslider: json.jslider,
            // _wslider: json.wslider,
            // _bg: json.bg,
            // _basic: json.basic,
            // _neon: json.neon,
            // _spotlight: json.spotlight,
            // _seed: json.seed,
       
            }
            })
          })

        

          let data = res.data;
          Mint._onSubmitMint(res.data);
         // console.log("c"+data);
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
          
        };
       
    }

    
    componentDidMount(props) {
        //Create p5 canvas once component mounts
        this.p5Canvas = new p5(this.initSketch, this.sketchRef.current)
        // this.state = {
        //     valueSeed: props.seed,
        //   };
        //sketch = new p5(this.initSketch, this.sketchRef.current);
      //  componentDidMount() {
/*             setInterval(() => {
                this.setState(() => {
                    console.log('setting state');
                    return { unseen: "does not display" }
                });
            }, 1000); */
    }
 
    shouldComponentUpdate(nextProps){
         //console.log("NextProps "+nextProps.seed);
        //   if(this.props.seed !== nextProps.seed){
        //   console.log("old Prop " + this.state.valueSeed);
        //   console.log("new Prop " + nextProps.seed);
        //   //this.setState(() => {
        //     console.log('setting state');
        // //     this.state.valueSeed = nextProps.seed;
        // //     return true;
        // // });
        //     this.setState({
        //         valueSeed: nextProps.seed
        //      })
       
        //       return true;
        //   }
        //  else{
        //     return false;
        //  } 
       // const differentTitle = this.props.seed !== nextProps.seed;
        //console.log();
        if(this.props.seed !== nextProps.seed){
            console.log('setting state '+nextProps.seed);
            this.setState({
                valueSeed: nextProps.seed
             })
           //Create p5 canvas once component mounts
           this.p5Canvas.remove();
           this.p5Canvas = new p5(this.initSketch, this.sketchRef.current)
             return true;
        }else{
            return false;
        }

       
      }

     componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        }; 
    } 
    render() {
        //this div will contain the sketch canvas
        console.log('render called ' + this.state.valueSeed);
        return (<div className="mySketch" ref={this.sketchRef} />)
    }
}