import React, { Component } from "react";
import p5 from "p5";
import { ConstructionRounded, NoiseControlOffSharp } from "@mui/icons-material";
import { red } from "@material-ui/core/colors";
import { hexToRgb } from "@material-ui/core";


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
    class Mover {
        constructor(_x, _y, _z, _index, _life, _seed, _col, _edges, _acc2, _hv) {
            this.x = _x;
            this.y = _y;
            this.z = _z;
            this.color = p.color(_col);
            this.index = _index;
            this.edgesV = _edges;
            this.c = p.int(p.random(0, 5));
            this.pos = p.createVector(_x, _y, _z);
            this.pos_orig = p.createVector(_x, _y, _z);
            this.acc = p.createVector(0, 0);
            this.vel = p.createVector(0, 0);
            this.lifespan = _life;
            this.acc2 = 2;
             this.hv = _hv;
            this.update = function (_acc) {
              this.acc = _acc;
              this.vel.add(this.acc);
              this.pos.add(this.vel);
              this.vel.limit(1.6);
              this.lifespan -= 2;
            };
          
            this.distance = function (boids) {
              for (let i = 0; i < boids.length-1; i++) {
                let d = p5.Vector.dist(this.pos, boids[i].pos);
                if (d < this.z && d > 5) {
                  this.show_line(boids[i].pos);
                }
              }
            };
          
            this.run = function (boids, acc) {
              this.update(acc);
              this.distance(boids);
              this.edges();
            };
          
            this.show_line = function (other) {
              p.strokeWeight(2);
              this.color.setAlpha(200);
              p.stroke(this.color);
              p.line(this.pos.x, this.pos.y, other.x, other.y);
              // fill(this.color);
              p.noFill();

            };
          
            this.edges = function () {
              if (this.pos.x > p.width) {
                this.pos.x = 0;
              } else if (this.pos.x < 0) {
                this.pos.x = p.width;
              } else if (this.pos.y > p.height) {
                this.pos.y = 0;
              } else if (this.pos.y < this.edgesV) {
                this.pos.y = p.height-30;
                this.edgesV2 = p.height/4+this.hv;
              } else if (this.pos.y < this.edgesV2) {
                this.pos.y = p.height-30;
            
              }
            };
          
            this.isDead = function () {
              return this.lifespan < 0;
            };
          }
          
    }
    let palettes = [
        ["#D3C9B6", "#FCA45A", "#509DA5", "#393E48", "#FF0080"], //00
       
    ];
    
var myMover1 = [];
var count;
var x, y, z;
//var STEP = 100 * M;
var bg;
let index;
let RA;
var fr;
let seed;
let acc;
let palette;
let accV;
let len;
var DEFAULT_SIZE = 1000;
var DIM = Math.min(window.innerWidth, window.innerHeight);
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;
let M = DIM / DEFAULT_SIZE; // Keep things relative
let cnv;
var delayInMilliseconds = 1000;
    p.preload = () => {
      //load images and shaders here
    };

p.windowResized = () => {

 
    p.resizeCanvas(p.windowWidth, p.windowHeight);


      p.restart();
    
}
    p.setup = () => {
   

          p.restart();
    
    };

    p.sleep = function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    p.restart = function(){
      
       // p.resizeCanvas(windowWidth, windowHeight);
       myMover1 = [];
       WIDTH = p.min(p.windowWidth, p.windowHeight);
       cnv = p.createCanvas(p.windowWidth, WIDTH);
       //DIM = Math.min(window.innerWidth, window.innerHeight);
       // WIDTH = window.innerWidth;
       // HEIGHT = window.innerHeight;
      M = WIDTH / DEFAULT_SIZE; // Keep things relative
           // p.resizeCanvas(windowWidth, windowHeight);
           cnv.position(0,100);
           cnv.style('z-index','-1');

      //index = (int)(random(0, palettes.length - 1));
      index=0;
      //console.log(index);
      palette = palettes[index];
      bg = palette[0];

      p.background(bg);

      var variation = (p.int)(p.random(0, 1));
      var heightvariation = (p.int)(p.random(50,200));
      accV = (p.int)(p.random(0, 2));
    
     if (variation == 0) {
        var shapes = 20;
        var diam1 = 170;
        var diam2 = 210;
     
      } else if (variation == 1) {
        var shapes = 30;
        var diam1 = 130;
        var diam2 = 170;
    
      } /*else if (variation == 2) {
        var shapes = 40;
        var diam1 = 80;
        var diam2 = 120;
      }*/
    
      if (accV == 0) {
        var lifetime = (p.int)(p.random(1700, 1900));
        //lifetime=lifetime;
      } else if (accV == 1) {
        var lifetime = (p.int)(p.random(1600, 1700));
        //lifetime=lifetime;
      } else if (accV == 2) {
        var lifetime = (p.int)(p.random(1400, 1500));
        //lifetime=lifetime;
      } else if (accV == 3) {
        var lifetime = (p.int)(p.random(1000, 1300));
        //lifetime=lifetime;
      } else if (accV == 4) {
        var lifetime = (p.int)(p.random(710, 900));
        //lifetime=lifetime;
      }
    
        //First Shape
        for (var i = 0; i < 1; i++) {
          var col = (p.int)(p.random(1, 5));
          x = (p.windowWidth/2)+50*M;
          y = (p.int)(p.random(p.height / 2+200, (p.height-50*M)));
          z = (p.int)(p.random(diam1, diam2));
          var edges = (p.int)(p.random(30,150));
          edges=edges*M;
          var acc2 = p.random(1, 3);
          var heightvariation = (p.int)(p.random(-150,200));
          var mover1 = new Mover(x,y,z*M,index,lifetime*M,seed,palette[col],edges,acc2, heightvariation*M);
          myMover1.push(mover1);
        }
    
          //Last Shape
          for (var i = 0; i < 1; i++) {
            var col = (p.int)(p.random(1, 5));
            x = p.windowWidth-50*M;
            y = p.random(p.height / 2+200, (p.height-150*M));
            z = (p.int)(p.random(diam1, diam2));
            var edges = p.random(30,150);
            edges=edges*M;
            var acc2 = p.random(1, 3);
            var heightvariation = p.random(-150,200);
            var mover1 = new Mover(x,y,z*M,index,lifetime*M,seed,palette[col],edges,acc2, heightvariation*M);
            myMover1.push(mover1);
          }
    
      //Show Lines
      for (var i = 0; i < shapes; i++) {
        var col = (p.int)(p.random(1, 5));
        x = p.random((p.windowWidth/2)+50*M, ((p.windowWidth)-50*M));
        y = p.random(p.height / 2+200, (p.height-150*M));
        z = (p.int)(p.random(diam1, diam2));
        var edges = p.random(30,150);
        edges=edges*M;
        var acc2 = p.random(1, 3);
        var heightvariation = p.random(-150,200);
        var mover1 = new Mover(x,y,z*M,index,lifetime*M,seed,palette[col],edges,acc2, heightvariation*M);
        myMover1.push(mover1);
      }
    }


    p.draw = function() {
    
        if (accV == 0) {
            acc = p.createVector(0, -0.06);
          } else if (accV == 1) {
            acc = p.createVector(0, -0.5);
          } else if (accV == 2) {
            acc = p.createVector(0, -1.2);
          } /*else if (accV == 3) {
            acc = createVector(0, -2);
          } else if (accV == 4) {
            acc = createVector(0, -3.5);
          }*/
      
        for (var j = 0,  len = myMover1.length; j < myMover1.length - 1; j++) {
        
          myMover1[j].run(myMover1, acc);
          if (myMover1[j].isDead()) {

             myMover1.splice(j, 1);
            len = myMover1.length;
          }
      
          if(myMover1.length==1){
               p.sleep(2000).then(() => {p.restart(); });
          
       
           }
      
        }
      
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
