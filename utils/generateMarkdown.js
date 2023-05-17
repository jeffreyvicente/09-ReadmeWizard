// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache 2.0 License":
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
      //(https://opensource.org/licenses/Apache-2.0)
      break;
    case "MIT License":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      //(https://opensource.org/licenses/MIT)
      break;
    case "Mozilla Public License 2.0":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
      break;
    case "Boost Software License 1.0":
      badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]"
      //(https://www.boost.org/LICENSE_1_0.txt)
      break;
    default:
      badge = "";
  }
  
  console.log(badge);

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "Apache 2.0 License":
      link = "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "MIT License":
      link = "(https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla Public License 2.0":
      link = "(https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Boost Software License 1.0":
      link = "(https://www.boost.org/LICENSE_1_0.txt)";
      break;
    default:
      link = "";
  }
  console.log(link);

  return link;


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if(!license){
    const badgelink = ""
    console.log("Render is blank");
    return badgelink;
  }

const badgelink = renderLicenseBadge(license) + renderLicenseLink(license);
console.log(badgelink);
return badgelink;

}

//Test functions
//renderLicenseBadge("MIT License");
//renderLicenseLink("MIT License")
//renderLicenseSection("d");


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const license = renderLicenseSection(data.pLicense);
  const link = renderLicenseLink(data.pLicense);


  return `
# ${data.pTitle}

${license}

## Description
${data.pDesc}
    
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#preview)
- [Features](#tests)
- [Questions](#questions)

## Installation
${data.pInstallation}

## Usage
${data.pUsage}

## License
This project is currently licenced under [${data.pLicense}]${link}

## How to Contribute
${data.pContributing}

## Tests
${data.pTests}

## Questions

If you have any questions, comments, or if you'd like to check out my other work, feel free to reach out to me on GitHub or by email. 
- GitHub: [${data.github}](https://github.com/${data.github});
- Email: ${data.email};


`;
}

module.exports = {generateMarkdown};
