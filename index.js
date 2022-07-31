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
        prefix: '-',
        validate: Boolean,
    },
    {
        type: 'input',
        message: 'What is the name/s of the project creator/s?',
        name: 'creators',
        prefix: '-',
        validate: Boolean,
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        prefix: '-',
        validate: Boolean,
    },
    {
        type: 'input',
        message: 'What is github username?',
        name: 'github',
        prefix: '-',
        validate: Boolean,
    },
    {
        type: 'input',
        message: 'What steps are required to install your project?',
        name: 'installation',
        prefix: '-',
        validate: Boolean,
    },
    {
        type: 'input',
        message: 'What are the usage instructions for running your project?',
        name: 'usage',
        prefix: '-',
        validate: Boolean,
    },
    {
        type: 'list',
        message: 'What type of license does your project have?',
        name: 'license',
        // choices: ["MIT", "Apache 2.0", "GPL v3", "BSD 3", "None"],
        choices: [
            {
                name: "MIT",
                value: "MIT"
            },
            {
                name: "Apache 2.0",
                value: "Apache-2.0"
            },
            {
                name: "GPL v3",
                value: "GPL-3.0"
            },
            {
                name: "BSD 3",
                value: "BSD-3-Clause"
            },
            {
                name: "None",
                value: "None"
            }
        ],
        prefix: '-',
    },
    {
        type: 'input',
        message: 'Any notes for people that wish to contribute to your project?',
        name: 'contribute',
        prefix: '-',
        validate: Boolean,
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
    console.log(`
Welcome to the readme generator.
Press 'Ctrl + C' or '⌘ Cmd + C' at any time to exit.
`);
    inquirer.prompt([
        {
        type: 'list',
        message: 'Are you ready to begin?',
        name: 'begin',
        choices: ["Yes", "No"],
        prefix: '-'
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
