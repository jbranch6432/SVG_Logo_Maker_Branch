const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Triangle, Square, Text} = require('./lib/shapes.js');


const promptUser = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter one to three characters:',
        validate: (input) => input.length <= 3,
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Select text color (#hexadecimal or keyword):'
    },
    {
        type: "list",
        message: "Please select the shape for your logo.",
        name: "shape",
        choices: [
            "square",
            "triangle",
            "circle"
        ]
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Select a shape color (#hexadecimal or keyword):',    
      },
];

//Create new logo in .svg file
const writeLogo = (str) => {
    fs.writeFile('logos.svg', str, (err) => {
        if(err) {
            console.log(err);
        }else {
            console.log('Success logo created!');
        }
    })
}

class logoCreation {
    constructor() {
        this.userText = "",
        this.userShape = ""
    };
    render() {
        return `<svg
        width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.userShape} ${this.userText}
        </svg>`
    };
      
    newShape(shape, text) {
        this.userShape = shape.render();
        this.userText = text.renderText();
    };
};

//Initializes the logo design and file
async function alpha() {
    let createLogo = "";
    let logoFile = "logos.svg";

    const answers = await inquirer.prompt(promptUser);

//Confirm shape selection

shape = answers.shape;

let shapeChoice;
if (shape === "circle") {
    shapeChoice = new Circle();
    console.log("Shape selection is Circle");
}
else if (shape === "triangle") {
    shapeChoice = new Triangle();
    console.log("Shape selected is Triangle");
}
else if (shape === "square") {
    shapeChoice = new Square();
    console.log("Shape selected is Square");
}
else {
    return "No shape selected, try again."
};

//Confirm shape color selection
shapeColorChoice = answers.shapeColor;
// console.log(`Shape color: ${shapeColorChoice}`);
shapeChoice.setColor(shapeColorChoice);

//Confirm text selection
let textChoice = "";
let textColorChoice = "";
if(answers.text.length > 0 && answers.text.length < 4) {
    textChoice = answers.text;
} else {
    console.log("Please select 1-3 letters");
    return;
}

//Confirm text color
textColorChoice = answers.textColor;
const newText = new Text('', textChoice, textColorChoice);


//Imports text and shape selections to the .svg file  
const newLogo = new logoCreation();

newLogo.newShape(shapeChoice, newText);

const svgString = newLogo.render();


// createLogo = newLogo.render();

writeLogo(svgString);
}

alpha();





