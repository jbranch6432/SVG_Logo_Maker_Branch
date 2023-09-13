class Shape {
    constructor(color, text) {
      this.color = color;
      this.text = text;
    }
    setColor(color) {
        this.color = color;
    }
  }
  
  class Circle extends Shape {
      constructor(color, text) {
        super(color, text);
      }
      renderCircle() {
        return `<circle cx="50" cy="50" r="40" fill=${this.color} />`;
      }
    }
      
  class Triangle extends Shape {
    constructor(color, text) {
      super(color, text);
    }
    renderTriangle() {
      return `<polygon points="200,10 250,190 160,210" fill=${this.color} />`;
    }
  }
         
  class Square extends Shape {
    constructor(color, text) {
      super(color, text);
    }
    renderSquare() {
      return `<rect width="300" height="100" fill=${this.color} />`;
    }
      }
      class Text extends Shape {
        constructor(color, text) {
            this.text = "";
            this.color = color;
        }

            render() {
                return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
            }
        }

function createShape(data) {
    console.log(data);
        let shape = "";
    switch (data.shape) {
        case 'circle': 
            shape = new Circle(data.logoColor, data.text);
            return shape.renderCircle();
            break;
        case 'triangle':
            shape = new Triangle;
            break;
        case 'square':
            shape = new Square;
    }
   
    
}
    
  function createText(data) {
    let text = new Text();
    text.setText(data.text);
    text.setColor(data.textColor);
    return text.render();
  }

  function createLogo(data) {
    let logoData = `<svg version='1.1' width='150' height='75' xmlns='http://www.w3.org/2000/svg'>
    ${createShape(data)}
    ${createText(data)}
    </svg>`;
    return logoData;
  }

  
  module.exports = {Circle, Triangle, Square, createShape};