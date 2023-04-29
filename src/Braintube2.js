import React, { Component } from "react";
import p5 from "p5";
//import "./styles/Slider.module.css";
import axios from "axios";
import Mint from "./components/Mint";
import { rejects } from "assert";


// This is in place of an import statement
const { useRef, useState, useEffect } = React;

const Braintube2 = (props) => {
  const containerRef = useRef();
  console.log("seed " + props.seed);
  console.log("wallet  " + props.wallet);
  //const Sketch = (p) => {

  const Sketch = (p) => {
    function Mover(_radius, _color, _fb, _ccolor, x, y, n) {
      //this.radius = _radius;
      this.lifespan = 1600;
      this.newcolor = _color;
      this.ccolor = _ccolor;
      this.radius = _radius;
      this.pos = p.createVector(x, y, _radius);
      this.vel = p.createVector(0, 0);
      this.acc = p.createVector(0, 0);
      this.fb = 0;
      this.tnoise = n;

      this.show = function (_x1, _y1, _c1, _f1, _f2, ms) {
        //noFill();
        //stroke(this.c1,this.c2,this.c3);
        if (this.fb == "0") {
          p.stroke(_c1);
          p.fill(_f1);
        } else if (this.fb == "1") {
          p.stroke(_c1);
          p.noFill();
        } else if (this.fb == "2") {
          _c1.setAlpha(5);
          p.fill(_c1);
          p.stroke(this.ccolor);
        }

        //console.log(this.c1);
        ms.ellipse(_x1, _y1, this.radius, this.radius);
        //rect(_x1, _y1, 120, 120);
        this.lifespan -= 2;
      };

      this.update = function () {
        // this.acc = p5.Vector.random2D();
        //this.acc.normalize();
        this.acc = p.createVector(p.noise(this.pos));

        // this.vel.add(this.acc);
        this.pos.add(this.acc);
        //this.vel.limit(1.01);
        //this.vel.normalize();
      };

      this.update2 = function () {
        // this.acc = p5.Vector.random2D();
        //this.acc.normalize();
        this.acc = p.createVector(p.noise(this.pos));

        this.pos.add(this.acc);
      };

      this.getPos = function () {
        return this.pos;
      };

      this.getCol = function () {
        return this.newcolor;
      };

      this.getNoise = function () {
        return this.tnoise;
      };

      this.isDead = function () {
        return this.lifespan < 0;
      };
    }

    var DEFAULT_SIZE = 900;
    var DIM = Math.min(window.innerWidth, window.innerHeight);
    var WIDTH = window.innerWidth;
    var HEIGHT = window.innerHeight;
    var M = DIM / DEFAULT_SIZE; // Keep things relative
    var STEP = 100 * M;
    var x, y;
    var w = 800;
    var h = 800;
    var DEFAULT_SIZE = 900;
    var DIM = Math.min(window.innerWidth, window.innerHeight);
    let bgColorRGB1;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var M = DIM / DEFAULT_SIZE; // Keep things relative
    var STEP = 100 * M;
    var x, y;
    var n;
    var circles = [];
    var steps;
    var steps2 = 0;
    var tn;
    var radius, nnoise;
    var centX, centY;
    var ang = 0;
    let r_tmp;
    var topColorRGB;
    var bottomColorRGB;
    var bgColorRGB;
    var fillColorRGB;
    var kColorRGB;
    var ellipse_radius;
    let RA;
    let g,f;
    var colorbool = 0;
    var fill_ellipse_bool;
    var cColorRGB;
    var bg;
    var alphafill;
    let colorset;
    let ellipse_fill;
    let tubemode;
    let strokeW;
    let table_tokio, table_ny, table_berlin;
    let wallet;
    let cnv;
    let col_r, tube_r, com_r, rarity;
    // Exports a high-resolution image when 'e' key is pressed.
    let outputScale = 5;
    let currentScale;
    let myScaledCanvas;
    let canvas;
    let properties = [];
    let colorset_rare, tubemode_rare, alphafill_index, complexity_rare;
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
      table_tokio = p.loadTable("colors_tokio.csv", "csv", "header");
      table_ny = p.loadTable("colors_ny.csv", "csv", "header");
      table_berlin = p.loadTable("colors_berlin.csv", "header");
      //load images and shaders here
    };

    /*         p.windowResized = (slider) => {
            p._renderer.position(p.windowWidth  - p.width  >> 1,
                                 p.windowHeight - p.height >> 1);
        
            const sliderX = (p.width  - slider.width  >> 1) + p._renderer.x,
                  sliderY = (p.height - slider.height >> 1) + p._curElement.y;
        
            slider.position(sliderX, sliderY);
          }; */

    p.setup = () => {
      p.canvasGraphic = p.createGraphics(900, 900);
      p.currentScale = 1; // initialize to 1; don't touch
      p.currentScale = p.outputScale; // High-Res Export
      // myScaledCanvas = p.createGraphics(currentScale * 900, currentScale * 900);
      // myScaledCanvas.scale(currentScale);

      cnv = p.createCanvas(w, h);
      // p.createCanvas(WIDTH, HEIGHT);
      p.colorMode(p.RGB);
      p.smooth();
      p.smooth();
      p.pixelDensity(1);
      p.ctx = cnv.drawingContext;
      //tokenData = { hash: random_hash() };

      //seed = 1234567890123456;
      //let seed = parseInt(tokenData.hash.slice(0, 16), 16);
      //let seed = this.props.seed;
      //seed = parseInt(seed.slice(0, 16), 16);
     
      centX = p.width / 2;
      centY = p.height / 2;
      f=props.seed;
      //console.log(seed);
      RA = new Random(f);
      p.noiseSeed(f);

      //Properties - Rarity
      //var colorset; Tokio, New York, Berlin
      //var tubemode; Noisy, Super Nine, Snagglz

      //Initial Random Values
      colorset_rare = RA.random_int(0, 100);
      //console.log(colorset_rare);
      //colorset_rare=75;
      colorset_rare = 33;
      if (colorset_rare < 60) {
        colorset = 0;
        col_r=0.6;
      } else if (colorset_rare >= 60 && colorset_rare < 95) {
        colorset = 1;
        col_r=0.35;
      } else if (colorset_rare >= 95) {
        colorset = 2;
        col_r=0.05;
      }

      tubemode_rare = RA.random_int(0, 100);
      tubemode_rare = 33;
      if (tubemode_rare < 60) {
        tubemode = 0;
        tube_r=0.6;
      } else if (tubemode_rare >= 60 && tubemode_rare < 95) {
        tubemode = 1;
        tube_r = 0.35;
      } else if (tubemode_rare >= 95) {
        tubemode = 2;
        tube_r=0.5;      }

      complexity_rare = RA.random_int(0, 100);
      complexity_rare = 33;
      if (complexity_rare < 60) {
        ellipse_fill = 0;
        com_r=0.6;
      } else if (complexity_rare >= 60 && complexity_rare < 95) {
        ellipse_fill = 1;
        com_r=0.35;
      } else if (complexity_rare >= 95) {
        ellipse_fill = 2;
        com_r=0.05;
      }
      //ellipse_fill = RA.random_int(0, 2);

      //Set fix for test
     
      r_tmp = col_r+tube_r+com_r;
      rarity = (r_tmp*100)/3;
      rarity = Math.round(rarity * 100) / 100;

      console.log("Rarity: "+rarity);
      
      console.log("Complexity " + ellipse_fill);
      properties[7] = ellipse_fill;
      //radius = RA.random_int(2, 5);
      strokeW = RA.random_between(0.5, 0.8);
      ellipse_radius = RA.random_between(100, 135);
      ellipse_radius = ellipse_radius * M;
      steps = RA.random_int(700, 1000);
      alphafill_index = RA.random_int(0, 5);

      if (alphafill_index == 0) {
        alphafill = 0;
        properties[6] = alphafill;
        console.log("Mutation Level " + alphafill);
      } else if (alphafill_index == 1) {
        alphafill = 5;
        properties[6] = alphafill;
        console.log("Mutation Level " + alphafill);
      } else if (alphafill_index == 2) {
        alphafill = 10;
        properties[6] = alphafill;
        console.log("Mutation Level " + alphafill);
      } else if (alphafill_index == 3) {
        alphafill = 25;
        properties[6] = alphafill;
        console.log("Mutation Level " + alphafill);
      } else if (alphafill_index == 4) {
        alphafill = 50;
        properties[6] = alphafill;
        console.log("Mutation Level " + alphafill);
      } else if (alphafill_index == 5) {
        alphafill = 100;
        properties[6] = alphafill;
        console.log("Mutation Level " + alphafill);
      }

      strokeW = Math.round(strokeW * 100) / 100;
      properties[3] = strokeW;
      properties[4] = alphafill;
      properties[5] = f;

      console.log("Stroke " + strokeW);
      console.log("Seed " + f);

      if (tubemode == 0) {
        radius = RA.random_int(15, 30);
        nnoise = RA.random_dec(1, 2.7);
        tn = 1.2;
        properties[1] = "Noisy";
        properties[2] = nnoise;
        console.log("Tubemode Noisy " + tubemode);
      } else if (tubemode == 1) {
        radius = RA.random_int(20, 50);
        //nnoise = 0.756730000002;
        nnoise = RA.random_between(0.5, 2);
        tn = RA.random_between(2, 5);
        steps = 1150;
        steps2 = 0;
        properties[1] = "Snagglz";
        properties[2] = nnoise;
        console.log("Tubemode Snagglz " + tubemode);
      } else if (tubemode == 2) {
        console.log("Tubemode Super Nine " + tubemode);
        radius = RA.random_int(15, 35);
        nnoise = RA.random_dec(1, 2);
        tn = 0.6;
        properties[1] = "Super Nine";
        properties[2] = nnoise;
      }

      if (colorset == 0) {
        //Colorset Neon
        let index = RA.random_int(0, 31);
        //let index = 36;
        console.log(index);
        var topColorRGB1 = table_tokio.get(index, 0);
        var bottomColorRGB1 = table_tokio.get(index, 1);
        var fillColorRGB1 = table_tokio.get(index, 2);
        var cColorRGB1 = table_tokio.get(index, 3);
        bgColorRGB1 = table_tokio.get(index, 4);
        var kColorRGB1 = table_tokio.get(index, 5);
        console.log("Colorset Tokio");
        properties[0] = "Tokio";
      } else if (colorset == 1) {
        //Colorset New York
        let index = RA.random_int(0, 9);
        console.log(index);
        index = 2;
        var topColorRGB1 = p.table_ny.get(index, 0);
        var bottomColorRGB1 = p.table_ny.get(index, 1);
        var fillColorRGB1 = p.table_ny.get(index, 2);
        var cColorRGB1 = p.table_ny.get(index, 3);
        bgColorRGB1 = p.Braintube2table_ny.get(index, 4);
        var kColorRGB1 = p.table_ny.get(index, 5);
        console.log("Colorset New York");
        properties[0] = "New York";
      } else if (colorset == 2) {
        //Red / Black White
        let index = RA.random_int(0, 2);
        //index=2;
        var topColorRGB1 = p.Braintube2table_berlin.get(index, 0);
        var bottomColorRGB1 = p.table_berlin.get(index, 1);
        var fillColorRGB1 = p.table_berlin.get(index, 2);
        var cColorRGB1 = p.table_berlin.get(index, 3);
        bgColorRGB1 = p.table_berlin.get(index, 4);
        var kColorRGB1 = p.table_berlin.get(index, 5);
        properties[0] = "Berlin";
        console.log("Colorset Berlin");
      }

      //Colors
      var bgColorRGB2 = hexToRgb(bgColorRGB1);
      var rbg = bgColorRGB2.r;
      var gbg = bgColorRGB2.g;
      var bbg = bgColorRGB2.b;
      bgColorRGB = p.color(rbg, gbg, bbg);

      var topColorRGB2 = hexToRgb(topColorRGB1);
      var bottomColorRGB2 = hexToRgb(bottomColorRGB1);
      var cColorRGB2 = hexToRgb(cColorRGB1);
      var fillColorRGB2 = hexToRgb(fillColorRGB1);

      var rTop1 = topColorRGB2.r;
      var gTop1 = topColorRGB2.g;
      var bTop1 = topColorRGB2.b;
      topColorRGB = p.color(rTop1, gTop1, bTop1);

      var rBottom1 = bottomColorRGB2.r;
      var gBottom1 = bottomColorRGB2.g;
      var bBottom1 = bottomColorRGB2.b;
      bottomColorRGB = p.color(rBottom1, gBottom1, bBottom1);

      var rContrast1 = cColorRGB2.r;
      var gContrast1 = cColorRGB2.g;
      var bContrast1 = cColorRGB2.b;
      cColorRGB = p.color(rContrast1, gContrast1, bContrast1);

      var kColorRGB2 = hexToRgb(kColorRGB1);
      var rContrast2 = kColorRGB2.r;
      var gContrast2 = kColorRGB2.g;
      var bContrast2 = kColorRGB2.b;
      kColorRGB = p.color(rContrast2, gContrast2, bContrast2);

      var rFill2 = fillColorRGB2.r;
      var gFill2 = fillColorRGB2.g;
      var bFill2 = fillColorRGB2.b;
      fillColorRGB = p.color(rFill2, gFill2, bFill2);

      //myScaledCanvas.background(bgColorRGB);
      p.canvasGraphic.background(bgColorRGB);
      //cnv.background(bgColorRGB);

      for (var i = 0; i < 2; i++) {
        circles[i] = new Mover(120);
      }
   if(f!=""){
    cnv.background(bgColorRGB);
   }else{
    cnv.background(255);
   }
      /*   var gradX = p.width / 2;
  var gradY = p.height / 2;
  var gradient = p.ctx.createRadialGradient(0, 0, p.width, p.gradX, gradY, p.height/2);
  gradient.addColorStop(0, cColorRGB);
  gradient.addColorStop(1, bgColorRGB);
  p.ctx.fillStyle = gradient;
  p.noStroke();
  p.rect(0, 0, p.width, p.height); */

    
    };

    p.sendData = () => {
      console.log("Send to Server...");
      // axios.get("/getRandomSeed").then(response => {
      //     console.log(response.data);
      // })

      /*         let res =  axios.post('/getCustomParams', {
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
          }) */

      //Send Image to Backend

   // p.saveFrames("out", "jpg", 1, 1, function (data) {
        //console.log("Test "+data);
        //console.log(typeof im[0]);
        /*              var data = {
                   i: im[0]
              } */
        //  var data = im[0];

     /*     let res = axios.post("/imageupload", {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          body: {
            user: { _data: data, 
                    _address: props.wallet,
                    _seed: properties[5],
                    _colorset: properties[0],
                    _tubemode: properties[1],
                    _noise: properties[2],
                    _mutation: properties[6],
                    _strokeW: properties[3],
                    _complexity: properties[7],
                    _rarity: rarity},
          },
        }); */
        //var canvas = $('canvas')[0];
        // var c = canvas; // using jQuery
        // var imageData = c.toDataURL('image/png'); // produces a base64 image string
    //  });
      //let data = res.data;
      //Mint._onSubmitMint(res.data);
      // console.log("c"+data);
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    };
    p.draw = function() {
     
     if(f==""){
      p.textSize(24);
      p.createP("");
      p.textFont("monospace");
      p.noStroke();
      p.fill(69);
      p.background(234,234,234);
      let txt = p.text("Your artpiece appear here ", p.width/2-200,  p.height/2);
      p.noLoop();
     }
     else{

     
      ang = ang + tn;

      n = p.map(ang, 0, steps, 0, 1);
      let newcolor = p.lerpColor(topColorRGB, bottomColorRGB, n);
      radius += 0.3;
      nnoise += 0.01;

      var thisRadius = radius + p.noise(nnoise) * 250 * M - 100;
      var rad = p.radians(ang);
      x = centX + thisRadius * p.cos(rad);
      y = centY + thisRadius * p.sin(rad);

      if (ellipse_fill == 0) {
        newcolor.setAlpha(200);
        // myScaledCanvas.noFill();
        // myScaledCanvas.stroke(newcolor);
        // myScaledCanvas.strokeWeight(strokeW);
        // myScaledCanvas.ellipse(x, y, ellipse_radius, ellipse_radius);

        p.canvasGraphic.noFill();
        p.canvasGraphic.stroke(newcolor);
        p.canvasGraphic.strokeWeight(strokeW);
        p.canvasGraphic.ellipse(x, y, ellipse_radius, ellipse_radius);

        p.noFill();
        newcolor.setAlpha(200);
        p.stroke(newcolor);
        p.strokeWeight(strokeW);
        p.ellipse(x, y, ellipse_radius, ellipse_radius);
      } else if (ellipse_fill == 1) {
        newcolor.setAlpha(255);
        fillColorRGB.setAlpha(alphafill);
        /*   myScaledCanvas.fill(fillColorRGB);
              myScaledCanvas.stroke(newcolor);
              myScaledCanvas.strokeWeight(0.6);
              myScaledCanvas.ellipse(x, y, ellipse_radius, ellipse_radius);
            */
              p.canvasGraphic.fill(fillColorRGB);
              p.canvasGraphic.stroke(newcolor);
              p.canvasGraphic.strokeWeight(0.6);
              p.canvasGraphic.ellipse(x, y, ellipse_radius, ellipse_radius); 

        p.fill(fillColorRGB);
        newcolor.setAlpha(255);
        p.stroke(newcolor);
        p.strokeWeight(strokeW);
        p.ellipse(x, y, ellipse_radius, ellipse_radius);
      } else if (ellipse_fill == 2) {
        newcolor.setAlpha(alphafill);
        myScaledCanvas.fill(newcolor);
        kColorRGB.setAlpha(150);
        // myScaledCanvas.stroke(kColorRGB);
        // myScaledCanvas.strokeWeight(strokeW);
        // myScaledCanvas.ellipse(x, y, ellipse_radius, ellipse_radius);

        p.canvasGraphic.fill(newcolor);
        kColorRGB.setAlpha(150);
        p.canvasGraphic.stroke(kColorRGB);
        p.canvasGraphic.strokeWeight(strokeW);
        p.canvasGraphic.ellipse(x, y, ellipse_radius, ellipse_radius);

        newcolor.setAlpha(alphafill);
        p.fill(newcolor);
        kColorRGB.setAlpha(150);
        p.stroke(kColorRGB);
        p.strokeWeight(strokeW);
        p.ellipse(x, y, ellipse_radius, ellipse_radius);
      }

      //console.log(steps2);
      if (p.frameCount == 975) {
        p.sendData();
        p.noLoop();
      }
    };
   }
  };

  function hexToRgb(hex) {
    var m = hex.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i);
    return {
      r: parseInt(m[1], 16),
      g: parseInt(m[2], 16),
      b: parseInt(m[3], 16),
    };
  }
  useEffect(
    () => {
      let inst = new p5(Sketch, containerRef.current);

      // Cleanup function! Without this the new p5.js sketches
      // generated with each click will just appear one after the other.
      return () => inst.remove();
    },
    // Let React know that this effect needs re-rendering when the dataFromSibling prop changes
    [props]
  );

  // Note: you're going to want to defined an element to contain the p5.js canvas
  return <div ref={containerRef}></div>;
};

export default Braintube2;
//React ref for div reference we pass into p5
