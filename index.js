// TODO: Include packages needed for this application
// Linked to inquirer for questions, fs for creating files, and generateMarkdown js file for accessing additional code.
const inquirer = require("inquirer");
const fs = require("fs");
const generateMd = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
// List of questions with custom prefixes and all require some sort of answer to be submitted.
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        prefix: '-',
        validate: Boolean
    },
    {
        type: 'input',
        message: 'Write a short description of the project.',
        name: 'description',
        prefix: '-',
        validate: Boolean
    },
    {
        type: 'input',
        message: 'What is the name/s of the project creator/s?',
        name: 'creators',
        prefix: '-',
        validate: Boolean
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        prefix: '-',
        validate: Boolean
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
        prefix: '-',
        validate: Boolean
    },
    {
        type: 'input',
        message: 'What commands should be used to install your project?',
        name: 'installation',
        // Included default value so user could choose to just hit enter without typing one in.
        default: 'npm i',
        prefix: '-',
        validate: Boolean
    },
    {
        type: 'input',
        message: 'What are the usage instructions for running your project?',
        name: 'usage',
        prefix: '-',
        validate: Boolean
    },
    {
        type: 'input',
        message: 'What command should be used to run tests?',
        name: 'tests',
        // Included default value so user could choose to just hit enter without typing one in.
        default: 'npm test',
        prefix: '-',
        validate: Boolean
    },
    {
        type: 'list',
        message: 'What type of license does your project have?',
        name: 'license',
        // Gave choices separate name and value so that it can display one value but have a separate one being used behind the scenes.
        choices: [
            {
                name: 'MIT',
                value: 'MIT'
            },
            {
                name: 'Apache 2.0',
                value: 'Apache-2.0'
            },
            {
                name: 'GPL v3',
                value: 'GPL-3.0'
            },
            {
                name: 'BSD 3',
                value: 'BSD-3-Clause'
            },
            {
                name: 'None',
                value: 'None'
            }
        ],
        prefix: '-'
    },
    {
        type: 'input',
        message: 'Any notes for people that wish to contribute to your project?',
        name: 'contribute',
        prefix: '-',
        validate: Boolean
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Creates the filename specified inside of the output folder and console logs event on completion
    fs.writeFile(`./output/${fileName}`, data, (err) =>
    err ? console.error(err) : console.log('Readme file generated in "Output" folder!')
);
}

// TODO: Create a function to initialize app
function init() {
    // Added a short welcome message when user starts app
    console.log(`
Welcome to the readme generator.
Press 'Ctrl + C' or '⌘ Cmd + C' at any time to exit.
`);
    // Created a preliminary question that gives the user the option to start the readme generation or select no and the application will quit.
    inquirer.prompt([
        {
        type: 'list',
        message: 'Are you ready to begin?',
        name: 'begin',
        choices: ['Yes', 'No'],
        prefix: '-'
        }
    ])
    .then((response) => {
        // If user selected "Yes" from previous question, then the actual readme generator questions will start
        if(response.begin === "Yes") {
            console.log("")
            // Run the questions via enquirer
            inquirer.prompt(questions)
            .then((response) => {
            // Send the question response object to the readme generator function in the additional js file.
            const readme = generateMd(response);
            // Initialize the function to create the readme file using the data received back from the readme generator.
            writeToFile("README.md", readme);
            })
        }
    });

}

// Function call to initialize app
init();
