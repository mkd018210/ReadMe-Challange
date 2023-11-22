
const fs = require('fs');
const inquirer = require('inquirer');


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
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What are the testing instructions?',
        name: 'testing'
    },
    
];

// TODO: Create a function to write README file

inquirer
    .prompt(questions)
    .then((answers) => {
       
        const html = getHtml(answers);

        fs.writeFile('index.html', html, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Write file success!");
            }
        });
    });
// TODO: Create a function to initialize app
function init() {}
const getHtml = (answers) => {
    const { title, description, installation, usage, contribution, testing } = answers;

    return
}
// Function call to initialize app
init();








