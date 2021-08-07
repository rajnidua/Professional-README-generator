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
const renderLicenseSection= generateMarkdown.renderLicenseSection;

var myData;
var myDataLicense;
var myDataName;
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
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Installations of your repository',
        validate: installationInstruction => {
          if (installationInstruction) {
              return true;
          } else {
              console.log('You need to provide installation instructions to continue!');
              return false;
          }
      }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'usage instructions of your repository',
      },
      {
        type: 'list',
      message: 'Choose a lisence for your repository, if you dont want any lisence, choode No License',
      name: 'license',
      choices: ['MIT', 'Apache', 'GNU-General-Public','No Lisence'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },{
      type: 'input',
      name: 'testing',
      message: 'testing information about your repository?',
    },
    // Email Address
    {
        type: 'input',
        name: 'email',
        message: 'Would you like to include your email?',
    }
    ]);
  };

  
  
  

// TODO: Create a function to write README file
/* const writeOnFile= (output(answers)) => { fs.writeFile(`index.html`, myAnswer, (err) =>
 err ? console.log(err) : console.log('My message is Success!')
);}  */ 
/* const writeOnFile=(data)=>{
  console.log("I am inside write on file "+data)
  const writeMainFile=(myOneData)=>writeFileAsync('../README.md', data);
console.log("here is data"+`${data.lisence}`);
  const appendMainFile=()=>fs.appendFile('../README.md',renderLicenseSection(`${data.license}`,`${data.name}`));

 
}*/

/* const assignValues=(answers)=>{
 myData = answers;
 myDataLicense = `${answers.license}`;
 myDataName = `${answers.name}`;
}  */

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
    //.then((answers)=>assignValues(answers))
  .then((answers)=>myGenerateMarkdown(answers))
   .then((myAnswer) => writeFileAsync('./README.md', myAnswer))
  // .then((answers)=>writeOnFile(answers))
  
  
  
  .then (()=>console.log("This is a success")) 
  .catch((err)=>console.error(err)) 
}; 

// Function call to initialize app
 init();
 

// ----------------------------------------------------

