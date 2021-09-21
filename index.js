// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
let fileName = "./README/generatedREADME.md";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of the README?",
    name: "title",
  },
  {
    type: "input",
    message: "If there's a description, type it now.",
    name: "description",
  },
  {
    type: "input",
    message: "How is this project installed?",
    name: "install",
  },
  {
    type: "input",
    message: "How is the project used?",
    name: "usage",
  },
  {
    type: "input",
    message: "How can one make contributions to the project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "Do you want to provide a test?",
    name: "test",
  },
  {
    type: "input",
    message: "Any credits and acknowledgements?",
    name: "credit",
  },
  {
    type: "list",
    message: "Choose a license.",
    name: "license",
    choices: ["MIT", "Apache", "MozillaPublic", "GNUGeneralPublic", "None"],
  },
  {
    type: "input",
    message: "Include your github username.",
    name: "github",
  },
  {
    type: "input",
    message: "Include your email.",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) => {
    err ? console.error(err) : console.log("success");
  });
}

inquirer
  .prompt(questions)
  .then((answers) => writeToFile(fileName, answers))
  .catch((error) => {
    if (error.isTtyError) {
      console.log("tty error!");
    } else {
      console.log("error!");
    }
  });

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
