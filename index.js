// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write a short description of the project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the name/s of the project creator/s?',
        name: 'creators',
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data)/ {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => console.log(response))
}

// Function call to initialize app
init();
