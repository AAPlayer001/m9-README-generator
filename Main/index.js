const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

const questions = [
  {
    type: "input",
    name: "username",
    prompt: "Enter GitHub username:",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Invalid GitHub username, try again.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    prompt: "Enter GitHub email address:",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Invalid email, try again.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "title",
    prompt: "Enter the project title:",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Invalid project title, try again.");
      }
      return true;
    },
  },
  {
    type: "input",
    name: "description",
    prompt: "Enter the project description:",
  },
  {
    type: "list",
    name: "license",
    prompt: "Select the license for your project:",
    options: ["MIT", "APACHE", "GPL", "No Lisense"],
  },
  {
    type: "input",
    name: "install",
    prompt: "Explain how to install this project.",
  },
  {
    type: "input",
    name: "tests",
    prompt: "Are there any tests you'd like to add?",
  },
  {
    type: "input",
    name: "usage",
    prompt: "How should this project be used?",
  },
  {
    type: "input",
    name: "contribute",
    prompt: "How would you like others to contribute to this project?",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README, please wait...");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
  })
}

init();
