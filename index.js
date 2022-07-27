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
        prefix: 'Y',
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
    {
        type: 'input',
        message: 'What steps are required to install your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What are the usage instructions for running your project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Would You like to include an image?',
        name: 'imageTrue',
        choices: ["Yes", "No"]
    },
    {
        type: 'input',
        message: 'Enter the path to the image you wish to use.',
        name: 'imagePath',
        when: function(answers) {
            return answers.imageTrue === "Yes";
        }
    },
    {
        type: 'input',
        message: 'Enter descriptive alt text for the image.',
        name: 'imageText',
        when: function(answers) {
            return answers.imageTrue === "Yes";
        }
    },
    {
        type: 'input',
        message: 'This is just a test!',
        name: 'test',
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
