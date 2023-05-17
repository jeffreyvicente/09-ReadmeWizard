// inquirer is a collection of common interactive command line user interfaces
const inquirer = require("inquirer");

// fs is a Node standard library package for reading and writing files
const fs = require('fs');

/*
Array of questionf fo user input. 
Questions gather the following as inputs when called in a function below. 
[Description] [Installation] [Usage], 
[License] [Contributing] [Tests] [Questions]
*/
const questions = [
    {
        //Prompts for project title
        type: "input",
        message: "What is the title of the project",
        name: "pTitle",
    },
    {
        //Prompts for project description
        type: "input",
        message: "What is the project description?",
        name: "pDesc",
    },
    {
        //Prompts for project installation steps
        type: "input",
        message: "What is the project installation steps for the project?",
        name: "pInstallation",
    },
    {
        //Prompts for project usage
        type: "input",
        message: "What is the project usage?",
        name: "pUsage",
    },
    {
        //Prompts for project license
        type: "list",
        message: "What license is the project using?",
        choices: ["Apache 2.0 License", "MIT License", "Mozilla Public License 2.0", "Boost Software License 1.0"],
        name: "pLicense",
    },
    {
        //Prompts for project guidelines
        type: "input",
        message: "What guidelines can people follow to contribute",
        name: "pContributing",
    },
    {
        //Prompts for project test
        type: "input",
        message: "What is the project test?",
        name: "pTests",
    },
    {
        //Prompts for user's gitHub username 
        type: "input",
        message: "What is your github username?",
        name: "github",
    },
    {
        //Prompts for user's email address
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// function to write data to the file. 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    // prints out error message if the file cannot be generate.
    // prints out successful message if the file generates. 
    err ? console.error(err) : console.log('File generation is successful!')
    );
}

// function to initialize app
function init() {

    //console.log(questions)
    //Displays the questions on the commandlind
    inquirer.prompt(questions)
    //Puts the prompt answers into an array named questions. 
    .then((answers) => {
        //console.log(answers);
        //references the generateMarkdown.js
        const generates = require('./utils/generateMarkdown.js');
    
        //creates a variable that passes the value to the generateMarkdown 
        const readmeComplete = generates.generateMarkdown(answers);

        //const readmeComplete = readmeData(answers);
        //Calls the write to function with the readme data
        writeToFile("readmeDemo.md" , readmeComplete);
        //console.log(readmeComplete);
    });
}

// Function call to initialize app
init();