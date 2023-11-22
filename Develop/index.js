
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: 'input',
        message: 'What is the name of your README?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Give a description.',
        name: 'description'
    },
    {
        type: "input",
        message: "What is number one in your Table Of Contents.",
        name: "num1"
    },
    {
        type: "input",
        message: "What is number two in your Table Of Contents.",
        name: "num2"
    },
    {
        type: "input",
        message: "What is number three in your Table Of Contents.",
        name: "num3"
    },
    {
        type: "input",
        message: "What is number four in your Table Of Contents.",
        name: "num4"
    },
    {
        type: "input",
        message: "What is number five in your Table Of Contents.",
        name: "num5"
    },
    {
        type: 'input',
        message: 'Write the installation instructions',
        name: 'installation'
    }, 
    {
        type: 'input',
        message: 'What is the usage information?',
        name:'usage'
    },
    {
        type: "list",
        message: "Pick a license for your README",
        choices: ["MIT", "ISC", "IBM"],
        name: "license"
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What are the testing instructions?',
        name: 'testing'
    },
    {
        type: "input",
        message: "What is your GitHub Username?",
        name: "questions"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    
];

// TODO: Create a function to write README file

inquirer
    .prompt(questions)
    .then((answers) => {
       
        const markdown = getMarkdown(answers);

        fs.writeFile('README.md', markdown, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Write file success!");
            }
        });
    });
// TODO: Create a function to initialize app
function init() {}
const getMarkdown = (answers) => {
    const { title, description, num1, num2, num3, num4, num5, installation, usage, license, contribution, testing, questions, email } = answers;

    return
}
// Function call to initialize app
init();








