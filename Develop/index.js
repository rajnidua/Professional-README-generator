// TODO: Include packages needed for this application
// const otherModule = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs= require('fs');
var mystr;
var answers;
var licenseIcon;
var renderData;
 const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
const myGenerateMarkdown = generateMarkdown.myGenerateMarkdown;
const renderLicenseBadge= generateMarkdown.renderLicenseBadge;
const renderLicenseLink= generateMarkdown.renderLicenseLink;
 const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please enter the author/authors names?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is your repository name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'describe your repository?',
      },{
        type: 'input',
        name: 'table of contents',
        message: 'describe toc your repository?',
      
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installations of your repository',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'usage instructions of your repository',
      },
      {
        type: 'list',
      message: 'What is the lisence name for your repository',
      name: 'license',
      choices: ['The MIT License', 'The Apache License', 'The GPL License','No Lisence'],
      },
    ]);
  };

  
  
  

// TODO: Create a function to write README file
/* const writeOnFile= (output(answers)) => { fs.writeFile(`index.html`, myAnswer, (err) =>
 err ? console.log(err) : console.log('My message is Success!')
);}  */ 

// TODO: Create a function to initialize app
/* const init = () => {
    console.log("i am inside init");
     promptUser()
    .then((answers)=>renderLicenseBadge(answers))
    .then((myAnswer) => writeFileAsync('README.md', myAnswer))
    .then (()=>console.log("This is a success")) 
    .catch((err)=>console.error(err)) 
};  */

const init = () => {
  console.log("i am inside init");
   promptUser()
  .then((answers)=>myGenerateMarkdown(answers))
  .then((myAnswer) => writeFileAsync('../README.md', myAnswer))
  
  .then (()=>console.log("This is a success")) 
  .catch((err)=>console.error(err)) 
}; 

// Function call to initialize app
 init();
 

// ----------------------------------------------------

