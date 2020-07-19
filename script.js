var rez = 20;
var heightx = 400/rez;
var widthx = 400/rez;
var field = [];
function setup() {
  createCanvas(400, 400);
  for (let i = 0;i < heightx+1;i++){
    k = []
    for (let v = 0; v < widthx+1; v++){
      k.push(round(random(1)));
    }
    field.push(k)
  }
}
function drawLine(v1, v2) {
  line(v1.x, v1.y, v2.x, v2.y);
}

function draw() {
  background(255);
  for (let i = 0;i < heightx;i++){
    for (let v = 0; v < widthx; v++){
      let points = field[i][v];
      let x = i * rez;
      let y = v * rez;
      let a = createVector(x + rez * 0.5, y            );
      let b = createVector(x + rez, y + rez * 0.5);
      let c = createVector(x + rez * 0.5, y + rez      );
      let d = createVector(x, y + rez * 0.5);
      let state = getState(ceil(field[i][v]), ceil(field[i+1][v]), 
        ceil(field[i+1][v+1]), ceil(field[i][v+1]));
      stroke(points*255);
      strokeWeight(2);
      point(i*rez,v*rez);
      switch (state) {
      case 1:  
        drawLine(c, d);
        break;
      case 2:  
        drawLine(b, c);
        break;
      case 3:  
        drawLine(b, d);
        break;
      case 4:  
        drawLine(a, b);
        break;
      case 5:  
        drawLine(a, d);
        drawLine(b, c);
        break;
      case 6:  
        drawLine(a, c);
        break;
      case 7:  
        drawLine(a, d);
        break;
      case 8:  
        drawLine(a, d);
        break;
      case 9:  
        drawLine(a, c);
        break;
      case 10: 
        drawLine(a, b);
        drawLine(c, d);
        break;
      case 11: 
        drawLine(a, b);
        break;
      case 12: 
        drawLine(b, d);
        break;
      case 13: 
        drawLine(b, c);
        break;
      case 14: 
        drawLine(c, d);
        break;
      }

        for (let i =0;i < heightx;i++){
        for (let v = 0; v < widthx;v++){
             field[i+round(random(1))][v+1] = field[i+1][v];
        } 
      }
    }
  }
}
function getState(a, b, c, d) {
  return a * 8 + b * 4  + c * 2 + d * 1;
}
function mousePressed(){
  for (let i =0;i < heightx;i++){
        for (let v = 0; v < widthx;v++){
          if(((mouseX < (i*10+2))&&(mouseX > (i*10-2)))&&((mouseY < (v*10+2))&&(mouseY > (v*10-2)))){
             field[i][v] = 1;
          }
        } 
      }
}