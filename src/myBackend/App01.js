exports.getFullName = (_seed) => {
    return "<html>\n"+
    "<head>\n"+
     "<script src="+'"https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.js"'+"></script>\n"+
      "<script>\n"+
  "function setup() {\n"+
      "createCanvas(400, 400);\n"+
    "}\n"+
    
    "function draw() {\n"+
      "background(30);\n"+
      "push();\n"+
      // translate to where you want the center of the ellipse to be
      "translate(width/2, height/2);\n"+
      // rotate using the frameCount (increases by one on each frame)
      "rotate(frameCount * 0.025);\n"+
      // draw the ellipse at the origin
      "ellipse(0, 0, 350, 150);\n"+
      "pop();\n"+
    "}\n"+
      "</script>\n"+
  
  
    "</head>\n"+
    "<body>\n"+
      "<main>\n"+
      "</main>\n"+
    "</body>\n"+
  "</html>\n"
};
