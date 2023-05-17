// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// TODO: Create an array of questions for user input
//generated with the title of my project and sections entitled Description, 
//Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: "input",
        message: "What is the title of the project",
        name: "pTitle",
    },
    {
        type: "input",
        message: "What is the project description?",
        name: "pDesc",
    },
    {
        type: "input",
        message: "What is the project installation steps for the project?",
        name: "pInstallation",
    },
    {
        type: "input",
        message: "What is the project usage?",
        name: "pUsage",
    },
    {
        type: "list",
        message: "What license is the project using?",
        choices: ["Apache 2.0 License", "MIT License", "Mozilla Public License 2.0", "Boost Software License 1.0"],
        name: "pLicense",
    },
    {
        type: "input",
        message: "What guidelines can people follow to contribute",
        name: "pContributing",
    },
    {
        type: "input",
        message: "What is the project test?",
        name: "pTests",
    },
    {
        //GitHub username 
        type: "input",
        message: "What is your github username?",
        name: "github",
    },
    {
        //email address
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );


}

// TODO: Create a function to initialize app
function init() {

    //console.log(questions)
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        const generates = require('./utils/generateMarkdown.js');
        //answers.pLicense = "Hello Hello Helo";
        

        const readmeComplete = generates.generateMarkdown(answers);

        //const readmeComplete = readmeData(answers);
        writeToFile("readmeDemo.md" , readmeComplete);
        console.log(readmeComplete);
    });
    


}



// Function call to initialize app
init();


/*
 ## Professional README Generator Starter Code
    
    [How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)

*/


/*
function readmeData({pTitle,pDesc ,pInstallation, pUsage, pLicense, pContributing, pTests,pQuestions}) {
    
   const readme = `
# ${pTitle}

## Description
${pDesc}
    
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#preview)
- [Features](#tests)
- [Questions](#questions)

## Installation
${pInstallation}

## Usage
${pUsage}

## License
${pLicense}

## How to Contribute
${pContributing}

## Tests
${pTests}

## Questions
${pQuestions}
`;

    return readme;
 
}


*/
