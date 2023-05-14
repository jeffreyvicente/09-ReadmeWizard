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
        name: "project-title",
    },
    {
        type: "input",
        message: "What is the project description?",
        name: "project-desc",
    },
    {
        type: "input",
        message: "What is the project installation steps for the project?",
        name: "project-installation",
    },
    {
        type: "input",
        message: "What is the project usage?",
        name: "project-usage",
    },
    {
        type: "list",
        message: "What license is the project using?",
        choices: ["Apache 2.0 License", "MIT License", "Mozilla Public License 2.0", "Creative Commons"],
        name: "project-license",
    },
    {
        type: "input",
        message: "What is the project contributing?",
        name: "project-contributing",
    },
    {
        type: "input",
        message: "What is the project test?",
        name: "project-tests",
    },
    {
        type: "input",
        message: "What is the project Questions?",
        name: "project-questions",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('log.txt', data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );


}

// TODO: Create a function to initialize app
function init() {

    //console.log(questions)
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        const readmeComplete = readmeData();
        writeToFile("readme.md" , readmeComplete);
    });
    


}


function readmeData() {
    
    return `
    # README Wizard



    ## Professional README Generator Starter Code
    
    [How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
    
    
    
    ## Description
    
    
    ## Table of Contents
    
    - [Installation](#installation)
    - [User Story](#user-story)
    - [Acceptance Criteria](#acceptance-criteria)
    - [Mock-up](#mock-up)
    - [Preview](#preview)
    - [Features](#features)
    - [Technology Used](#technologies-used)
    
    `;
 
}

// Function call to initialize app
init();

