// TODO: Include packages needed for this application
const inquirer = require("inquirer");

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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    //console.log(questions)
    inquirer.prompt(questions)
    .then((answers) => 
    console.log(answers)
    
    );
    


}

// Function call to initialize app
init();
