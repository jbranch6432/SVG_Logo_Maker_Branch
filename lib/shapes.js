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
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
      }
  };
      
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,0 0, 150 300,150" fill="${this.color}" />`;
    }
  };
      
  class Square extends Shape {
    render() {
      return `<rect width="150" height="150" fill="${this.color}" />`;
    }
  };
   
      class Text extends Shape {
        constructor(color, text, textColor) {
            super(color);
            this.text = text;
            this.textColor = textColor;
        }
       

            renderText() {
                return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
            }
        }

  
  module.exports = {Circle, Triangle, Square, Text};