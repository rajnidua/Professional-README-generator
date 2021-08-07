// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const fs= require('fs');

var lisenceIcon;
var myAnswer;
const renderLicenseBadge=(mylicense) => {
  
  switch (mylicense){
    case 'MIT' :
      return  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case 'Apache':
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
      break;
    case 'GNU-General-Public':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]"
      break;
    case 'No Lisence':
      return "";
      break;
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
 const renderLicenseLink=(license) =>{
  switch (license){
    case 'MIT' :
      licenseData = "MIT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat ultricies congue. Proin bibendum elit ut dolor malesuada commodo. Nulla luctus, lorem non dictum ornare, nibh felis gravida dui, vel condimentum odio eros eu ligula. Sed velit elit, suscipit in nisi cursus, dignissim convallis risus. Fusce scelerisque nulla quis justo pharetra viverra. ";
      break;
    case 'Apache':
      licenseData= "Apache Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat ultricies congue. Proin bibendum elit ut dolor malesuada commodo. Nulla luctus, lorem non dictum ornare, nibh felis gravida dui, vel condimentum odio eros eu ligula. Sed velit elit, suscipit in nisi cursus, dignissim convallis risus. Fusce scelerisque nulla quis justo pharetra viverra. "
      break;
    case 'GNU-General-Public':
      licenseData =  "GPL Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consequat ultricies congue. Proin bibendum elit ut dolor malesuada commodo. Nulla luctus, lorem non dictum ornare, nibh felis gravida dui, vel condimentum odio eros eu ligula. Sed velit elit, suscipit in nisi cursus, dignissim convallis risus. Fusce scelerisque nulla quis justo pharetra viverra. "
      break;
    case 'No Lisence':
      licenseData = "";
      break;
  }
console.log("the license data obtained is "+licenseData);
  
  fs.writeFile('./license', licenseData, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(mylicense,myName,topData) {
  console.log("dsvsdvsdvds "+mylicense +myName);
  if(mylicense!== "No Lisence"){
    const licenseData = renderLicenseLink(mylicense);
    const licenseIcon = renderLicenseBadge(mylicense);
    console.log("The lisence icon value is "+licenseIcon)
    const myLicenseData= `
    ## License
    
    ${licenseIcon}
  
    &copy; ${myName}
    
    Licensed under [${mylicense}](./license)`;
  console.log("The data for my lisence is "+myLicenseData);
return `${topData}`+`${myLicenseData}`;
  }
else{
  return `${topData}`
}

    /* fs.appendFile('../README.md', myLicenseData,(err) =>
    err ? console.error(err) : console.log('commit logged!')); */
  
}

// TODO: Create a function to generate markdown for README
const myGenerateMarkdown=(data) =>{ 
  console.log("Hi, I am data "+data)
  
  // const renderLicense = renderLicenseSection(`${data.license}`,`${data.name}`);
  
  /* let mylicense = `${data.license}`;
  var licenseIcon1 = "";
  if(mylicense!=='No Lisence'){
   licenseIcon1 = renderLicenseBadge(mylicense);
  }
  else{
     licenseIcon1 ="";
  }
  console.log("the value of license icon1 is "+ licenseIcon1); */
  
  

  const topData = `
  ${licenseIcon1}
  # &mdash; ${data.title}

  ## Table of contents
  - [Description](#Descrition)
  - [Installation](#Installation)
  - [License](#License)

  ## Description
  ${data.description}&mdash;

  ## Installation
  ${data.installation}

  ## Additional Info:
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

  ## Testing:
  ${data.testing}

`
; 
return renderLicense = renderLicenseSection(`${data.license}`,`${data.name}`,topData);
 }

 module.exports = {
   myGenerateMarkdown: myGenerateMarkdown,
   renderLicenseBadge:renderLicenseBadge,
   renderLicenseLink:renderLicenseLink
};

