import inquirer from 'inquirer';
const fs = require("fs");

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
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
        name: 'logoColor',
        message: 'Select a logo color (#hexadecimal or keyword):',
        validate: (input) => {
        //   // confirm if a CSS color
        //   const isColor = coloursArray.includes(input.toLowerCase());
        //   // check if it is a valid hexadecimal color
        //   const isColorCode = /^#[0-9A-F]{6}$/i.test(input);
        //   return isColor || isColorCode;
        },
      },
]).then(answers => {
    const shapesData = shapes(answers);
    fs.writeFile('./examples/logo.svg', shapesData, err => {
        if(err) {
            console.log(err)
        } else {
            console.log('logo created');
        }
    })
    
});