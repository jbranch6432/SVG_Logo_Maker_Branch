//Shape constructor function for color selection
class Shape {
    constructor() {
      this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
  }
  
  class Circle extends Shape {
      render() {
        return `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
      }
  };
      
  class Triangle extends Shape {
    render() {
      return `<polygon points="0,0 100,0 50,86.6" fill="${this.color}" />`;
    }
  };
      
  class Square extends Shape {
    render() {
      return `<rect width="300" height="100" fill="${this.color}" />`;
    }
  };
   
      class Text extends Shape {
        constructor(color, text, textColor) {
            super(color);
            this.text = text;
            this.textColor = textColor;
        }
       

            renderText() {
                return `<text x="50" y="50" font-size="24" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
            }
        }

  
  module.exports = {Circle, Triangle, Square, Text};