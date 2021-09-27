

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const Choices = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    
        
            {
                type: "input",
                name: "username",
                message: "What is your GitHub username?",
                validate: usernameInput => {
                    if (usernameInput) {
                        return true;
                    } else {
                        console.log("Please enter a username");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "title",
                message: "What is the title of your repository?",
                validate: titleInput => {
                    if (titleInput) {
                        return true;
                    } else {
                        console.log("please enter a title");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "description",
                message: "Add a brief description of your project.",
                validate: descriptionInput => {
                    if (descriptionInput) {
                        return true;
                    } else {
                        console.log("please enter a description");
                        return false;
                    }
                }

            },
            {
                type: "checkbox",
                name: "liscense",
                message: "what liscense are you using?",
                choices: ["MIT", "Mozilla-Public", "Apache", "None"],
                validate: liscenceInput => {
                    if (liscenceInput) {
                        return true;
                    } else {
                        console.log("please enter a liscence");
                        return false;
                    }
                }

            },
            {
                type: "input",
                name: "installation",
                message: "How would you install your project?",
                validate: testingInput => {
                    if (testingInput) {
                        return true;
                    } else {
                        console.log("please enter installation info");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "testing",
                message: "How would you test this project?",
                validate: testingInput => {
                    if (testingInput) {
                        return true;
                    } else {
                        console.log("please enter testing info");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "usage",
                message: "how would you like to use this project",
                validate: usageInput => {
                    if (usageInput) {
                        return true;
                    } else {
                        console.log("please enter usage info");
                        return false;
                    }
                }
            },
        ];
        function writeToFile(fileName,data){
            fs.writeFile(fileName,data, (err)=>{
                if(err)
                throw err;
                console.log("Information added to readMe")
            });
        };
        function init(){
            inquirer.prompt(questions)
            .then(function(userInput){
                console.log(userInput)
                writeToFile("README.md", generateMarkdown(userInput));
            });
        };

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
init();