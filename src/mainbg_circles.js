import React, { Component } from "react";
import p5 from "p5";
import { ConstructionRounded } from "@mui/icons-material";
import { red } from "@material-ui/core/colors";


// This is in place of an import statement
const { useRef, useState, useEffect } = React;

const Braintube3 = (props) => {
  const containerRef = useRef();
  console.log("seed " + props.seed);
  console.log("wallet  " + props.wallet);
//   constructor(seed) {
//     this.seed = seed;
//   }
  const Sketch = (p) => {
    class Circle {
        constructor(_cwidth, _cheight, _nM, _sW) {
        this.noiseMax = _nM;
        this.cwidth = _cwidth;
        this.cheight = _cheight;
        this.sW = _sW;
        this.pos2 = p.createVector(0, 0);
        this.vel = p.createVector(0, 0);
        this.acc = p.createVector(0, 0);
        }
        
        
    update(_angle, _phase, _zoff) {
            var xoff = p.map(p.cos(_angle + _phase), -1, 1, 0, this.noiseMax);
            var yoff = p.map(p.sin(_angle), -1, 1, 0, this.noiseMax);
            var r = p.map(p.noise(xoff, yoff, zoff), 0, 1, this.cwidth, this.cheight);
            x = r * p.cos(_angle);
            y = r * p.sin(_angle);
            this.pos = p.createVector(x, y);
            //this.pos2.add(this.pos);
            return {
                x: this.pos.x,
                y: this.pos.y
            };
    
        }
    
    show () {
            p.noFill();
            p.stroke(255);
            p.strokeWeight(this.sW);
           // fill(this.color2);
            p.vertex(x, y);
    
        }
    }

    var DEFAULT_SIZE = 900;
    var DIM = Math.min(p.windowWidth, p.windowHeight);
    var windowWidth = p.windowWidth;
    var windowHeight = p.windowHeight;
    var M = DIM / DEFAULT_SIZE; // Keep things relative
    var STEP = 100 * M;
    var x, y;
    var DEFAULT_SIZE = 900;
    var M = DIM / DEFAULT_SIZE; // Keep things relative
    var centX, centY;
    var bgColorRGB;
    let cnv;
    var zoff = 0;
    var zoff1 = 0;
    var STEP = 100 * M
    let noiseMax;
    let phase = 0;
    let phase1 = 0;
    var bg_color;
    let myCircles = [];
    let shapes;
    let radius;
    let cwidth, cheight;
    p.preload = () => {
      //load images and shaders here
    };

p.windowResized = () => {

 
    p.resizeCanvas(p.windowWidth, p.windowHeight);
     centX = (p.width / 2)+(p.width/6);
     centY = p.height / 2;
     if(p.height > p.width){
      radius = (p.width / 2) - 140;
      }
      else{
      radius = (p.height / 2) - 200;
      }

      p.restart();
    
}
    p.setup = () => {
    //   cnv = p.createCanvas(p.windowWidth, p.windowHeight);
    //   cnv.position(0,100);

    
    //   cnv.style('z-index','-1');
    //   // p.createCanvas(WIDTH, HEIGHT);
    //   p.colorMode(p.RGB);
    //   p.smooth();
    //   p.pixelDensity(1);
    //  // centX = p.width / 2 + (p.width/4);
    //   centX = 200;
    //   centY = p.height / 2;
  
    //   zoff1 =  p.random(0.001, 0.019);
    //   phase1 = p.random(0.005, 0.01);
    
    //   shapes = p.random(3, 7);
    //   //shapes = 10;
    //   bg_color = "#330045";
    //   p.background(bg_color);
    //   //Counter for loops over ColorSet, Start at 1 bc 0 is for bg
    //   var h = 1;
    
    //   //Max Radius for Outer Circle
    //   var radius = (p.windowHeight / 2) - 190;
    //   console.log(radius);
    //   var sequence = radius / shapes;
    //   var shapes_all = shapes;
      
    //   for (var i = 0; i < shapes; i++) {
    //     noiseMax = p.random(0.2, 1.5);
    //     cwidth = sequence * shapes_all;
    //     cheight = cwidth + p.random(100, 140);
    //     var strokeWeight = p.random(5, 5);
    //     myCircles[i] = new Circle(cwidth, cheight, noiseMax, strokeWeight, phase);

    //     //Counter for Shapes
    //     shapes_all--;
    //   }
  
    cnv = p.createCanvas(p.windowWidth, p.windowHeight);
            //Max Radius for Outer Circle
            if(p.height > p.width){
              radius = (p.width / 2) - 140;
          }
          else{
              radius = (p.height / 2) - 190;
          }
         // centX = 200;
          centY = p.height / 2;
          p.restart();
    
    };
    
    p.restart = function(){
      
       // p.resizeCanvas(windowWidth, windowHeight);
        cnv.position(0,100);
  
      
         cnv.style('z-index','-1');
        // p.createCanvas(WIDTH, HEIGHT);
        p.colorMode(p.RGB);
        p.smooth();
        p.pixelDensity(1);
       // centX = p.width / 2 + (p.width/4);

    
        zoff1 =  p.random(0.001, 0.019);
        phase1 = p.random(0.005, 0.01);
      
        shapes = p.random(3, 6);
        //shapes = 10;
        bg_color = "#320043";
       //bg_color="#f44336";
        //p.background(bg_color);
        //Counter for loops over ColorSet, Start at 1 bc 0 is for bg
        var h = 1;
    
      
        var sequence = radius / shapes;
        var shapes_all = shapes;
        
        for (var i = 0; i < shapes; i++) {
          noiseMax = p.random(0.2, 1.5);
          cwidth = sequence * shapes_all;
          cheight = cwidth + p.random(100, 140);
          var strokeWeight = p.random(5, 5);
          myCircles[i] = new Circle(cwidth, cheight, noiseMax, strokeWeight, phase);
  
          //Counter for Shapes
          shapes_all--;
        }
    
    }
    p.draw = function() {
     
        p.background(bg_color);
        if(p.height > p.width){
            p.translate((p.width / 2), (p.height / 2));
        }
        else{p.translate((p.width / 2)+(p.width/4), p.height / 2);}
       
        for (var i = 0; i < myCircles.length; i++) {
          p.beginShape();
          for (var a = 0; a < p.TWO_PI; a += 0.01) {
            myCircles[i].update(a, phase, zoff);
            myCircles[i].show();
      
          }
      
          p.endShape(p.CLOSE);
      
        }
      
        phase += phase1
        zoff += zoff1;

     
   }


  
  };


  
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
