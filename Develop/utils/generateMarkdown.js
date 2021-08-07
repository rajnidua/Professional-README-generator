// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const fs= require('fs');

var lisenceIcon;
var myAnswer;
 const renderLicenseBadge=(mylicense) => {
  //  console.log("the value of licence is "+data.license);
  switch (mylicense){
    case 'The MIT License' :
     return  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
     //return  "License: MIT"; 
     break;
      case 'The Apache License':
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
        
        //return  "License: Apache"; 
        break;
        case 'The GPL License':
          return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]"
          
          //return  "License: GPL"; 
          break;
         
          case 'No Lisence':
            return "";
            break;

  }
   /* myAnswer = myGenerateMarkdown(data,licenseIcon);
   return myAnswer; */
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
  // fs.writeFile('license',licenseData);
  fs.writeFile('../license', licenseData, (err) =>
  err ? console.error(err) : console.log('Success!')
 );


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
 function renderLicenseSection(mylicense,myName,topData) {

  console.log("dsvsdvsdvds "+mylicense +myName);
   if(mylicense!== null){
    const licenseData = renderLicenseLink(mylicense);
    const licenseIcon = renderLicenseBadge(mylicense);
     const myLicenseData= `
     ## License and Copyright
    
    ${licenseIcon}
    
    
    &copy; ${myName}
    
    
    Licensed under [${mylicense}](./license)`
    console.log("The data for my lisence is "+myLicenseData);


    return `${topData}`+`${myLicenseData}`;

    /* fs.appendFile('../README.md', myLicenseData,(err) =>
    err ? console.error(err) : console.log('commit logged!')); */
     
   }
 }

// TODO: Create a function to generate markdown for README
const myGenerateMarkdown=(data) =>{ 
  console.log("Hi, I am data "+data)
  // console.log("Hi, I am license icon "+licenseIcon);
  // const licenseIcon = renderLicenseBadge(data);
  // console.log("Hi, I am license icon "+licenseIcon);

  // const renderLicense = renderLicenseSection(`${data.license}`,`${data.name}`);
   const topData = `# &mdash; ${data.title}

## Table of contents
- [Description](#Descrition)
- [Installation](#Installation)
- [License and Copyright](#License and Copyright)

## Description
${data.description}&mdash;



## Installation
${data.installation}

## License and Copyright

[![License: MIT](https://img.shields.io/badge/License-${data.license}-yellow.svg)]

&copy; ${data.name}

Licensed under [${data.license}](./license)


`


; 
return renderLicense = renderLicenseSection(`${data.license}`,`${data.name}`,topData);
 }

 module.exports = {
   myGenerateMarkdown: myGenerateMarkdown,
   renderLicenseBadge:renderLicenseBadge,
   renderLicenseLink:renderLicenseLink
  };

