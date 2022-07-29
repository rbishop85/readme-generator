// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMd = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        prefix: '-',
        validate: Boolean,
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
        message: 'What is your email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What steps are required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What are the usage instructions for running your project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What type of license does your project have?',
        name: 'license',
        choices: ["MIT", "Apache 2.0", "GPL v3", "BSD 3", "None"]
    },
    {
        type: 'input',
        message: 'Any notes for people that wish to contribute to your project?',
        name: 'contribute',
    },




    // {
    //     type: 'list',
    //     message: 'Would You like to include an image?',
    //     name: 'imageTrue',
    //     choices: ["Yes", "No"]
    // },
    // {
    //     type: 'input',
    //     message: 'Enter the path to the image you wish to use.',
    //     name: 'imagePath',
    //     when: function(answers) {
    //         return answers.imageTrue === "Yes";
    //     }
    // },
    // {
    //     type: 'input',
    //     message: 'Enter descriptive alt text for the image.',
    //     name: 'imageText',
    //     when: function(answers) {
    //         return answers.imageTrue === "Yes";
    //     }
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, data, (err) =>
    err ? console.error(err) : console.log('Readme file generated in "Output" folder!')
);
}

// TODO: Create a function to initialize app
function init() {
    console.log("");
    console.log("Welcome to the readme generator.");
    console.log("Press 'Ctrl + C' or '⌘ Cmd + C' at any time to exit.");
    console.log("");
    inquirer.prompt([
        {
        type: 'list',
        message: 'Are you ready to being?',
        name: 'begin',
        choices: ["Yes", "No"]
        }
    ])
    .then((response) => {
        if(response.begin === "Yes") {
            console.log("")
            inquirer.prompt(questions)
            .then((response) => {
            const readme = generateMd(response);
            writeToFile("README.md", readme);
            })
        }
    });

}

// Function call to initialize app
init();
