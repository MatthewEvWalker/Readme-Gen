// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input', 
    name: 'title',
    message: "What is your project title?",
 },
 {
    type: "checkbox",
    name: "languages",
    message: "What languages does this project use?",
    choices: [" Js", " HTML", " CSS", " SQL"],
 },
 {
    type: "list",
    name: "licenses",
    message: "What license type do you want?",
    choices: ["MIT", "Apache", "PDDL", "MPL"],
 },
 {
    type: 'input', 
    name: 'description',
    message: "What is your description?",
 }, {
    type: 'input', 
    name: 'installation',
    message: "What is the installations?",
 }, {
    type: 'input', 
    name: 'usage',
    message: "What is your website usage?",
 },
 {
    type: 'input', 
    name: 'contributing',
    message: "Who contributed to the work?",
 },
 {
    type: 'input', 
    name: 'tests',
    message: "What were the tests?",
 },
 {
    type: 'input', 
    name: 'githubUsername',
    message: "What is your github username?",
 },
 {
 type: 'input', 
 name: 'email',
 message: "What is your email?",
 }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("myReadMe.md", data, (error) => {
        return error
            ? console.error(error)
            : console.log("File written successfully");
        });
    }


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerRes) => {
        console.log('Generating readme file')
        writeToFile('README.md', generateMarkdown({...inquirerRes}))
    })
}

// Function call to initialize app
init();
