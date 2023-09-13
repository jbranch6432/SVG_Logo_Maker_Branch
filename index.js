const inquirer = require('inquirer');
const fs = require('fs');
const {createShape} = require('./lib/shapes.js');


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
        message: 'Select a shape color (#hexadecimal or keyword):',
        
        //   // confirm if a CSS color
        
        //   const isColor = coloursArray.includes(input.toLowerCase());
        //   // check if it is a valid hexadecimal color
        //   const isColorCode = /^#[0-9A-F]{6}$/i.test(input);
        //   return isColor || isColorCode;
    
      },
]).then(answers => {
   const shape = createShape(answers);
    console.log(shape);

    
    // function selection(filename, data) {
    //     try {
    //         fs.writeFile(path.join('/logo.svg', filename), data);
    //         console.log("Created new LOGO!");
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // fs.writeFile('logo.svg', shapesData, err => {
    //     if(err) {
    //         console.log(err)
    //     } else {
    //         console.log('logo created');
    //     }
    // })
    
});


