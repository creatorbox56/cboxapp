import React, { Component } from 'react'
import p5 from 'p5'
import "./styles/Slider.module.css";
import axios from "axios";
import Mint from "./components/Mint";

export default class App extends Component {
    constructor(props) {
        super(props);
        //console.log(props.sliderVal);
        this.state = {
            valueState: props.sliderVal,
          };
      }

    //React ref for div reference we pass into p5
    sketchRef = React.createRef()

    //P5 instance mode
    initSketch = (p) => {

        let json = {};
        let w,h   
        var myMover1 = [];
        var myMover2 = [];
        var myMover3 = [];
        var myMover4 = [];
        var count;
        var x, y;
        let bool = false;
        var DEFAULT_SIZE = 900
        var DIM = Math.min(window.innerWidth, window.innerHeight)
        var WIDTH = window.innerWidth
        var HEIGHT = window.innerHeight
        var M = DIM / DEFAULT_SIZE // Keep things relative
        var STEP = 100 * M
        //diameter ellipse
        var z = 40;
        var bg, basic, neon, spotlight;
        let RA, count2;
        let timer = 7;
        let img;
        let angle = 0.0;
        let jitter = 0.0;
        let jitter_slider;
        let inital = false;
        let tokenData;
    
        let colors_neon = ["#6F02E1", "#CBFF10", "#06F9F9", "#FF06CA", "#F1FA3C",
            "#ff00a0", "#FFE400", "#FA1616", "#08E2B2", "#C4FB6D",
            "#f9064b", "#f94000", "#E900FF", "#C4FB6D", "#C0E218",
            "#F134C0", "#E037DB", "#FF1700", "#03FCC1", "#FF008E",
            "#FFC600", "#f5d300", "#f887ff", "#93FFD8", "#F90716",
            "#FF005C", "#01ffc3", "#01ffff", "#FA1E0E", "#28FFBF",
            "#A7FF83", "#FF5200", "#FFE227", "#FA1616", "#00EAD3",
            "#0CECDD", "#F7FD04", "#5C33F6", "#3EDBF0",

        ];

        let colors_basic = ["#2f402d", "#3d898d", "#44786a", "#8f704b", "#005687",
            "#864879", "#0F4C75", "#056674", "#4F8A8B", "#B5076B",
            "#00A1AB", "#B5076B", "#0F4C81", "#00918E", "#A32F80",
            "#443737", "#216583", "#00B7A8", "#1EAFED", "#053F5E",
            "#E4ABDE", "#E40475", "#17B978", "#364F6B", "#9A0F98",
            "#2BB3C0", "#04536C", "#3A4750", "#04536C", "#E62A69",
            "#dd004e", "#40bb80", "#3DA5E9", "#2988A6", "#F3C137",
            "#B4AEE8", "#0F1123", "#FFB228", "#FCD307", "#FF5200",
            "#00A8CC", "#4F8A8B", "#11698E", "#AD6C80", "#219897",
            "#B4A5A5", "#202060", "#A32F80", "#543864", "#A72693",
            "#053F5E", "#B55400", "#145374", "#4DD599", "#06a8f9",
            "#99FEFF", "#7AC9F4", "#B030B0", "#0F4C75", "#301B3F",
            "#27496D", "#0F4C75", "#537EC5", "#827397", "#595B83",
            "#595B83", "#6A097D", "#FA7D09", "#4B5D67", "#1E5F74",
            "#39A6A3", "#BF1363", "#7952B3", "#628395", "#F0134D",
            "#EA5455", "#EA5455", "#5F1854", "#978D58", "#0B5269",
            "#005792", "#93329E", "#8C0000", "#BD2000", "#4D375D",
            "#EB596E", "#213E3B"
        ];

        let colors_bg = ["#1A1A2E", "#0D1A1E", "#111028", "#160F30",
            "#091435", "#320538", "#29132e", "#051226", "#101026",
            "#0A303F", "#23120B", "#050505", "#1B1B2F", "#272121",
            "#222035", "#100B2B", "#2B1832", "#1B242D", "#142F43",
            "#161A1C", "#11022D", "#17150E", "#1C192D", "#160040",
            "#0E0220", "#0E2431", "#1C2626", "#1F1D36", "#140423",
            "#23120B", "#1D1919", "#040303", "#190404", "#093638",
            "#041C32", "#171010", "#161616", "#121519", "#12021E",
            "#2C061F", "#060930", "#200828", "#261722", "#230338",
            "#023335", "#160D1E", "#250735", "#252028", "#081435",
            "#231E23", "#262A53", "#03051E", "#381B25", "#151515",
            "#1B262C", "#031130", "#290742", "#26001B", "#121013",
        ];

        let colors_spotlight = ["#40bb80", "#01ffc3", "#01FFFF", "#9D72FF", "#FE346E",
            "#f5d300", "#EAE2F1", "#7AC9F4", "#E6AED1", "#B6F7C1",
            "#99BADE", "#F3C137", "#f887ff", "#2988A6", "#C4FFDD",
            "#08E2B2", "#03FCC1", "#94B3FD", "#94DAFF", "#99FEFF",
            "#CCFFBD", "#FBD46D", "#E5E5E5", "#D9FAFF", "#ADACA7",
            "#B983FF", "#9d72ff", "#EAE2F1", "#E6AED1", "#E6F5FF",
            "#99BADE", "#E4ABDE", "#94B3FD", "#94DAFF", "#CCFFBD",
            "#E7D9EA", "#D2FAFB", "#F1FA3C", "#FF4D00", "#602080",
            "#FF6363", "#EAE7AF", "#BBE1FA", "#F4ABC4", "#A4B494",
            "#DEEEEA", "#FFC107", "#00C1D4", "#EAE1E1", "#D1D4C9",
            "#A0C1B8", "#99DDCC", "#77ACF1", "#FC92E3", "#A9F1DF",
            "#FFFFC7", "#C0FEFC", "#EDEEF7", "#CDFFFC", "#FFE227",
            "#D2F6C5",
        ];
        tokenData = { "hash": random_hash() }
        let rSlider, gSlider, bSlider, sbutton, mbutton;

        let jslider, cslider, sslider, wslider, cnv;
        p.group = p.createDiv('');
     
        jslider = p.createSlider(0, 1, 0);
        jslider.style('width', '180px');
        jslider.parent('jslider');

        cslider = p.createSlider(1,5,1);
        cslider.style('width', '180px');
        cslider.parent('cslider');
        //clabel.parent(p.group);

        sslider = p.createSlider(10,50,20);
        sslider.style('width', '180px');
        sslider.parent('sslider');

        wslider = p.createSlider(0.5,10,1);
        wslider.style('width', '180px');
        wslider.parent('wslider');

        sbutton = p.createElement("h6", "Shuffle Colorset");
        sbutton.parent('sbutton');

        mbutton = p.createElement("h6", "Mint");
        mbutton.parent('mbutton');
        //let tokenData = { "hash": "0xd9134c11cd5ed9798ea0811364d63bd850c69c5d13383c9983ade39847e9ea86", "tokenId": "99000000" };

        function random_hash() {
            let chars = "0123456789abcdef";
            let result = '0x';
            for (let i = 64; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
            return result;

        }

        class Random {
            constructor(seed) {
                this.seed = seed
            }
            random_dec() {
                this.seed ^= this.seed << 13
                this.seed ^= this.seed >> 17
                this.seed ^= this.seed << 5
                return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000
            }
            random_between(a, b) {
                return a + (b - a) * this.random_dec()
            }
            random_int(a, b) {
                return Math.floor(this.random_between(a, b + 1))
            }
            random_choice(x) {
                return x[Math.floor(this.random_between(0, x.length * 0.99))]
            }
        }
        class Mover{
            constructor(_x, _y, _z, _c, _lifetime, _strokew) {
                this.x = _x;
                this.y = _y;
                this.z = _z;
                this.g = p.int(p.random(0, 4));
                this.color = p.color(_c);
                this.pos = p.createVector(_x, _y, _z);
                this.acc = p.createVector(0, 0);
                this.vel = p.createVector(0, 0);
                this.lifespan = _lifetime;
                this.stroke = _strokew;
            }
           
          
            update = function (c) {
              this.acc = p.createVector(p.random(-0.01, 0.01), p.random(-0.01, 0.01));
              this.vel.add(this.acc);
              if (c < 4) {
                this.vel.mult(16);
              } else if (c < 160) {
                this.vel.mult(1.09);
              } else {
                this.vel.mult(1);
              }
          
              this.pos.add(this.vel);
              this.vel.limit(1.5);
              this.lifespan -= 2;
          
            }
          
            distance = function (other) {
              let d = p5.Vector.dist(this.pos, other.pos);
              if ((d < this.z && d > 5)) {
                return true;
              } else {
                return false;
              }
            }
          
            run = function (boids) {
          
              this.update();
              this.colors();
              this.show();
              this.distance(boids);
            }
          
            show_line = function (other) {
              p.strokeWeight(this.stroke);
              this.color.setAlpha(190);
              p.stroke(this.color);
              p.line(this.pos.x, this.pos.y, other.x, other.y);
            }
          
            isDead = function () {
              return this.lifespan < 0;
            };
          
            getPosition = function () {
              return this.pos;
            };
          
            getColor = function () {
              return this.color;
            };

            getStroke = function () {
                return this.stroke;
              };
          
          /*   this.turn = function (c) {
              push();
              translate(this.x, this.y);
              rotate(20);
              pop();
              //rotate(c);
             // image(img, -width / 2, -height / 2);
            }; */
          
          }
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
        
   
            //setup canvas and init values here
                        //store width and height
                        w = 730  
                        h = 730 
                        var cnv = p.createCanvas(w, h)
           
            //Random Hash Generator
            let seed = parseInt(tokenData.hash.slice(0, 16), 16);
            img = p.createGraphics(w, h);
            RA = new Random(seed);
            var index_bg = RA.random_int(0, colors_bg.length - 1);
            var index_basic = RA.random_int(0, colors_basic.length - 1);
            var index_neon = RA.random_int(0, colors_neon.length - 1);
            var index_spotlight = RA.random_int(0, colors_spotlight.length - 1);
            x = w/2;
            y = h/2;
            //init slider
            jitter_slider = 2
            bg = colors_bg[index_bg];
            basic = colors_basic[index_basic];
            neon = colors_neon[index_neon];
            spotlight = colors_spotlight[index_spotlight];
            p.background(bg);
            count = 0;
            //Counter for Circle-Shapes
            count2 = 0;

            sbutton.mousePressed((event) => {
                tokenData = { "hash": random_hash() }
                p.setup();
            });

            mbutton.mousePressed((event) => {
              
                //p.saveJSON(json, 'ellipse.json');
                p.sendData();
            });

            p.generate();

            json.bg = bg;
            json.basic = basic;
            json.neon = neon;
            json.spotlight = spotlight;
            json.seed = seed;
        }

        p.draw = () => {
            //update canvas here 
        //  p.rect(0,0,w,h);
        //  var f = p.setColor(bg)
        //  f.setAlpha(5);
        //  p.fill(f);
            count = count + 1;
            json.cslider = cslider.value();
            json.sslider = sslider.value();
            json.jslider = jslider.value();
            json.wslider = wslider.value();

            if (count2 == cslider.value()) {

                // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
                if (p.frameCount % 60 == 0 && timer > 0) {
                    timer--;
        
                }
                if (timer === 0) {
                    p.background(bg);
                    count2 = 0;
                    p.setup();
                    timer = 7;
                }
        
            }  
            else{
                p.exitloop(count, count2);
            }
           
         

            if(jslider.value()===1){
                if (p.second() % 2 === 0) {
                    jitter = p.random(-0.1, 0.1);
                  }
                  //increase the angle value using the most recent jitter value
                  angle = angle + jitter;
                  //use cosine to get a smooth CW and CCW motion when not jittering
                  let c = p.cos(angle);
                  //move the shape to the center of the canvas
                  p.background(bg);
                  p.translate(w / 2, h / 2);
                  //apply the final rotation
                  p.rotate(c);
                  p.image(img, -w / 2, -h / 2); 
            }
            else if(jslider.value()===0) {
                p.background(bg);
                p.translate(w / 2, h / 2);
                p.rotate(p.frameCount * 0.001);
                p.image(img, -w / 2, -h / 2); 
            }
           
            p.drawStuff();
        }

        p.exitloop = (count, count2) => {
            //update canvas here 
           
            if (count > 170 && count2 == 1) {
                p.generate();
            }
            else if (count > 100 * M && count2 == 2) {
                p.generate();
            }
            else if (count > 60 * M && count2 == 3) {
                p.generate();
            }
            else if (count > 30 * M && count2 == 4) {
                p.generate();
            }
        }


        p.drawStuff = () => {
            //update canvas here 
            for (var i = 0; i < myMover1.length; i++) {
                myMover1[i].update(count);
                for (var j = 0; j < myMover1.length; j++) {
        
                    if (i != j && myMover1[i].distance(myMover1[j])) {
        
                        var v1 = myMover1[i].getPosition();
                        var v2 = myMover1[j].getPosition();
                        p.stroke(myMover1[i].getColor());
                        //line(v1.x, v1.y, v2.x, v2.y);
                        img.strokeWeight(myMover1[i].getStroke());
                        img.stroke(myMover1[i].getColor());
                        img.line(v1.x, v1.y, v2.x, v2.y);
                    }
                }
                if (myMover1[i].isDead()) {
                    myMover1.splice(i, 1);
                }
        
            }
        
            for (var i = 0; i < myMover2.length; i++) {
                myMover2[i].update(count);
                for (var j = 0; j < myMover2.length; j++) {
        
                    if (i != j && myMover2[i].distance(myMover2[j])) {
        
                        var v1 = myMover2[i].getPosition();
                        var v2 = myMover2[j].getPosition();
                        p.stroke(myMover2[i].getColor());
                        //line(v1.x, v1.y, v2.x, v2.y);
                        img.strokeWeight(myMover2[i].getStroke());
                        img.stroke(myMover2[i].getColor());
                        img.line(v1.x, v1.y, v2.x, v2.y);
                    }
        
                }
        
                if (myMover2[i].isDead()) {
                    myMover2.splice(i, 1);
                }
        
            }
        
            for (var i = 0; i < myMover3.length; i++) {
                myMover3[i].update(count);
                for (var j = 0; j < myMover3.length; j++) {
                    if (i != j && myMover3[i].distance(myMover3[j])) {
                        var v1 = myMover3[i].getPosition();
                        var v2 = myMover3[j].getPosition();
                        p.stroke(myMover3[i].getColor());
                        //line(v1.x, v1.y, v2.x, v2.y);
                        img.strokeWeight(myMover3[i].getStroke());
                        img.stroke(myMover3[i].getColor());
                        img.line(v1.x, v1.y, v2.x, v2.y);
                    }
                }
        
                if (myMover3[i].isDead()) {
                    myMover3.splice(i, 1);
                }
        
            }
          
                for (var i = 0; i < myMover4.length; i++) {
                    myMover4[i].update(count);
                    for (var j = 0; j < myMover4.length; j++) {
                        if (i != j && myMover4[i].distance(myMover4[j])) {
                            var v1 = myMover4[i].getPosition();
                            var v2 = myMover4[j].getPosition();
                            p.stroke(myMover4[i].getColor());
                            //line(v1.x, v1.y, v2.x, v2.y);
                            img.strokeWeight(myMover4[i].getStroke());
                            img.stroke(myMover4[i].getColor());
                            img.line(v1.x, v1.y, v2.x, v2.y);
                        }
            
                    }
            
                    if (myMover4[i].isDead()) {
                        myMover4.splice(i, 1);
                    }
            
                }
        }

        p.generate = () => {
            //update canvas here 
            count = 0;
            if(count2 < cslider.value()){
                count2 = count2 + 1;
            }
     
          
        //    console.log(cslider.value());
        //    console.log(count2); 
            var shapes;
        
            //Basic Shapes
            var i = 0;
            //shapes = RA.random_int(20, 50);
            shapes = sslider.value();
            var strokew = wslider.value();
            var lifetime = 340 * M / count2;
            if (count2 == 5) {
                lifetime = 10;
            }
            //shapes = RA.random_int(20, 50);
            for (i = 0; i < shapes; i++) {
                myMover1[i] = new Mover(x, y, z, basic, lifetime, strokew);
            }
            //shapes = RA.random_int(20, 50);
            for (i = 0; i < shapes; i++) {
                myMover2[i] = new Mover(x, y, z, bg, lifetime, strokew);
        
            }
            //shapes = RA.random_int(20, 50);
            for (i = 0; i < shapes; i++) {
                myMover3[i] = new Mover(x, y, z, neon, lifetime, strokew);
        
            }
            //shapes = RA.random_int(20, 50);
            for (i = 0; i < shapes; i++) {
                myMover4[i] = new Mover(x, y, z, spotlight, lifetime, strokew);
        
            }
        }

    p.newColor = () => {
            tokenData = { "hash": random_hash() }
            p.setup();
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
            _cslider: json.cslider, 
            _sslider: json.sslider,
            _jslider: json.jslider,
            _wslider: json.wslider,
            _bg: json.bg,
            _basic: json.basic,
            _neon: json.neon,
            _spotlight: json.spotlight,
            _seed: json.seed,
       
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

    
    componentDidMount() {
        //Create p5 canvas once component mounts
        this.p5Canvas = new p5(this.initSketch, this.sketchRef.current)
    }

    componentWillReceiveProps(nextProps){
        //  console.log("hello");
          if(this.props.sliderVal !== nextProps.sliderVal){
          console.log("a " + this.state.valueState);
             this.setState({
                 valueState: nextProps.sliderVal
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