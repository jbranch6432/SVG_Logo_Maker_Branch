// Importing shapes classes from ./shapes.js
const { Triangle, Square, Circle } = require("./shapes.js");

// Unit testing -> testing for a triangle with a blue background to render
describe("Triangle test", () => {
  test("test for a triangle with a blue background", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      `<polygon points="150,0 0, 150 300,150" fill="blue" />`
    );
  });
});

// Unit testing -> testing for a square with a purple background to render
describe("Square test", () => {
  test("test for a square with a purple background", () => {
    const shape = new Square();
    shape.setColor("purple");
    expect(shape.render()).toEqual(
      `<rect width="150" height="150" fill="purple" />`
    );
  });
});

// Unit testing -> testing for a circle with a #ca00ca background to render
describe("Circle test", () => {
  test("test for a circle with a #ca00ca background", () => {
    const shape = new Circle();
    shape.setColor("#ca00ca");
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="100" r="100" fill="#ca00ca" />`
    );
  });
});

