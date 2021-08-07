// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const fs= require('fs');

var lisenceIcon;
var myAnswer;
const renderLicenseBadge=(mylicense) => {
  
  switch (mylicense){
    case 'MIT' :
      return  "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case 'Apache':
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)"
      break;
    case 'GNU-General-Public':
      return "![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)"
      break;
    case 'BSD 2-Clause License':
      return "![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)"
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
      licenseData = `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      
      `;
      break;
    case 'Apache':
      licenseData= `Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
   
        http://www.apache.org/licenses/LICENSE-2.0
   
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.`;
      break;
    case 'GNU-General-Public':
      licenseData =  `This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
  
      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
      break;
    case 'BSD 2-Clause License':
      licenseData = `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
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
  const todaysDate = new Date()
const currentYear = todaysDate.getFullYear();
  if(mylicense!== "No Lisence"){
    const licenseData = renderLicenseLink(mylicense);
    const licenseIcon = renderLicenseBadge(mylicense);
    console.log("The lisence icon value is "+licenseIcon)
    const myLicenseData= `
    ## License
    
    ${licenseIcon}
  
    &copy;  ${currentYear}  ${myName}
    
    Licensed under [${mylicense}](./license)`;
  console.log("The data for my lisence is "+myLicenseData);
return `${topData}`+`${myLicenseData}`;
  }
else{const myLicenseData= `
## License
NO License`

return `${topData}`+`${myLicenseData}`;
}

}

// TODO: Create a function to generate markdown for README
const myGenerateMarkdown=(data) =>{ 
  console.log("Hi, I am data "+data)
  let mylicense = `${data.license}`;
  var licenseIcon1 = "";
  if(mylicense!=='No Lisence'){
   licenseIcon1 = renderLicenseBadge(mylicense);
  }
  else{
     licenseIcon1 ="";
  }
  console.log("the value of license icon1 is "+ licenseIcon1); 
  
  

  const topData = `
  ${licenseIcon1}
  # &mdash; ${data.title}

  ## Table of contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Testing](#Testing)
  - [Additional Information](#Additional)
  - [License](#License)

  ## Description
  ${data.description}&mdash;

  ## Installation
  ${data.installation}

  ## Testing
  ${data.testing}

  ## Additional
  - Github: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}

  

`
; 
return renderLicense = renderLicenseSection(`${data.license}`,`${data.name}`,topData);
 }

 module.exports = {
   myGenerateMarkdown: myGenerateMarkdown,
   renderLicenseBadge:renderLicenseBadge,
   renderLicenseLink:renderLicenseLink
};

