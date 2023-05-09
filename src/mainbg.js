import React, { Component } from "react";
import p5 from "p5";
//import "./styles/Slider.module.css";
import axios from "axios";
import Mint from "./components/Mint";
import { rejects } from "assert";


// This is in place of an import statement
const { useRef, useState, useEffect } = React;

const Braintube3 = (props) => {
  const containerRef = useRef();
  console.log("seed " + props.seed);
  console.log("wallet  " + props.wallet);
  //const Sketch = (p) => {

  const Sketch = (p) => {
   

    var DEFAULT_SIZE = 900;
    var DIM = Math.min(p.windowWidth, p.windowHeight);
    var windowWidth = p.windowWidth;
    var windowHeight = p.windowHeight;
    var M = DIM / DEFAULT_SIZE; // Keep things relative
    var STEP = 100 * M;
    var x, y;
    let bgColorRGB1;
    var M = DIM / DEFAULT_SIZE; // Keep things relative
    var x, y;
    var n;
    var steps;
    var tn;
    var radius, nnoise;
    var centX, centY;
    var ang = 0;
    let r_tmp;
    var topColorRGB;
    var bottomColorRGB;
    var bgColorRGB;
    var cColorRGB;
    var fillColorRGB;
    var kColorRGB;
    var ellipse_radius;
    let RA;
    var alphafill;
    let colorset;
    let ellipse_fill;
    let tubemode;
    let strokeW;
    let cnv;
    let col_r, tube_r, com_r, rarity;
    // Exports a high-resolution image when 'e' key is pressed.
    let properties = [];
    let colorset_rare, tubemode_rare, alphafill_index, complexity_rare;
  

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
    };

    p.windowResized = () => {
      p.resizeCanvas(p.windowWidth, p.windowHeight);
        p.restart();
          }; 

    p.setup = () => {
      cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    p.restart();
    };

    p.restart = function(){
    
      cnv.position(0,100);

    
      cnv.style('z-index','-1');
      // p.createCanvas(WIDTH, HEIGHT);
      p.colorMode(p.RGB);
      p.smooth();
      p.pixelDensity(1);
    
      //tokenData = { hash: random_hash() };

      //seed = 1234567890123456;
      //let seed = parseInt(tokenData.hash.slice(0, 16), 16);
      //let seed = this.props.seed;
      //seed = parseInt(seed.slice(0, 16), 16);
     
      centX = p.width / 2+(p.width/6);
      centY = p.height / 2;
  

      //Properties - Rarity
      //var colorset; Tokio, New York, Berlin
      //var tubemode; Noisy, Super Nine, Snagglz

      //Initial Random Values
      //colorset_rare = RA.random_int(0, 100);
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

      //tubemode_rare = RA.random_int(0, 100);
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

      //complexity_rare = RA.random_int(0, 100);
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

     
      r_tmp = col_r+tube_r+com_r;
      rarity = (r_tmp*100)/3;
      rarity = Math.round(rarity * 100) / 100;

      // console.log("Rarity: "+rarity);
      
      // console.log("Complexity " + ellipse_fill);

      //radius = RA.random_int(2, 5);
      strokeW = 0.8;
      ellipse_radius = 120;
      ellipse_radius = ellipse_radius * M;
      steps = 1000;
      alphafill_index = 0;

      if (alphafill_index == 0) {
        alphafill = 0;
  
        console.log("Mutation Level " + alphafill);
      } else if (alphafill_index == 1) {
        alphafill = 5;
 
        console.log("Mutation Level " + alphafill);
      } else if (alphafill_index == 2) {
        alphafill = 10;
 
        console.log("Mutation Level " + alphafill);
      } else if (alphafill_index == 3) {
        alphafill = 25;
 
        console.log("Mutation Level " + alphafill);
      } else if (alphafill_index == 4) {
        alphafill = 50;

        console.log("Mutation Level " + alphafill);
      } else if (alphafill_index == 5) {
        alphafill = 100;

        console.log("Mutation Level " + alphafill);
      }

      strokeW = Math.round(strokeW * 100) / 100;

      console.log("Stroke " + strokeW);
      //console.log("Seed " + seed);

      if (tubemode == 0) {
        radius = p.random(15,30);
        nnoise = p.random(1, 2.7);
        tn = 1.2;
        console.log("Tubemode Noisy " + tubemode);
      } else if (tubemode == 1) {
        radius = RA.random_int(20, 50);
        //nnoise = 0.756730000002;
        nnoise = RA.random_between(0.5, 2);
        tn = RA.random_between(2, 5);
        steps = 1150;
    
        properties[1] = "Snagglz";
        properties[2] = "Noise " + nnoise;
        console.log("Tubemode Snagglz " + tubemode);
      } else if (tubemode == 2) {
        console.log("Tubemode Super Nine " + tubemode);
        radius = RA.random_int(15, 35);
        nnoise = RA.random_dec(1, 2);
        tn = 0.6;
        properties[1] = "Super Nine";
        properties[2] = "Noise " + nnoise;
      }

      if (colorset == 0) {
        //Colorset Neon
        var topColorRGB1 = '#ff0048';
        var bottomColorRGB1 = '#ee00ff';
        var fillColorRGB1 = '#00fffb';
        var cColorRGB1 = '#ee00ff';
        bgColorRGB1 = '#340047';
        var kColorRGB1 = '#6d0075';
        console.log("Colorset Tokio");
   
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

      cnv.background(bgColorRGB);


      /*   var gradX = p.width / 2;
  var gradY = p.height / 2;
  var gradient = p.ctx.createRadialGradient(0, 0, p.width, p.gradX, gradY, p.height/2);
  gradient.addColorStop(0, cColorRGB);
  gradient.addColorStop(1, bgColorRGB);
  p.ctx.fillStyle = gradient;
  p.noStroke();
  p.rect(0, 0, p.width, p.height); */

    }
     
    p.draw = function() {
     
  

     
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
        p.noFill();
        newcolor.setAlpha(200);
        p.stroke(newcolor);
        p.strokeWeight(strokeW);
        p.ellipse(x, y, ellipse_radius, ellipse_radius);
      } else if (ellipse_fill == 1) {
        newcolor.setAlpha(255);
        fillColorRGB.setAlpha(alphafill);
        p.fill(fillColorRGB);
        newcolor.setAlpha(255);
        p.stroke(newcolor);
        p.strokeWeight(strokeW);
        p.ellipse(x, y, ellipse_radius, ellipse_radius);
      } else if (ellipse_fill == 2) {
        newcolor.setAlpha(alphafill);
        kColorRGB.setAlpha(150);
        newcolor.setAlpha(alphafill);
        p.fill(newcolor);
        kColorRGB.setAlpha(150);
        p.stroke(kColorRGB);
        p.strokeWeight(strokeW);
        p.ellipse(x, y, ellipse_radius, ellipse_radius);
      

      //console.log(steps2);

    };

    if (p.frameCount == 975) {
        // p.sendData();
         p.noLoop();
       }
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

export default Braintube3;
//React ref for div reference we pass into p5
