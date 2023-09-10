class Shape {
    constructor(color, text) {
      this.color = color;
      this.text = text;
    }
  }
  
  class Circle extends Shape {
      constructor(color, text) {
        super(color, text);
      }
      renderCircle() {
        return `<circle cx="50" cy="50" r="40" fill=${this.color} />`
      }
    }
      
  class Triangle extends Shape {
    constructor(color, text) {
      super(color, text);
    }
    renderTriangle() {
      return `<polygon points="200,10 250,190 160,210" style="fill: ${this.color} />`
    }
  }
         
  class Square extends Shape {
    constructor(color, text) {
      super(color, text);
    }
    renderSquare() {
      return `<rect width="300" height="100" style="fill:${this.color} />`
    }
            }
  
  
  module.exports = {Circle, Triangle, Square}