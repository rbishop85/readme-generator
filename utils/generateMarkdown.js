// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT") {
    return "License-MIT-yellow.svg"
  } else if(license === "Apache-2.0") {
    return "License-Apache_2.0-blue.svg"
  } else if(license === "GPL-3.0") {
    return "License-GPLv3-blue.svg"
  } else if(license === "BSD-3-Clause") {
    return "License-BSD_3--Clause-blue.svg"
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // if(license === "MIT") {
  //   return "MIT"
  // } else if(license === "Apache 2.0") {
  //   return "Apache-2.0"
  // } else if(license === "GPL v3") {
  //   return "GPL-3.0"
  // } else if(license === "BSD 3") {
  //   return "BSD-3-Clause"
  // } else {
  // return ""
  // }
  if(license === "None") {
    return ""
  } else {
    return license
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "None") {
    return "";
  } else return `
## License:

[![License](https://img.shields.io/badge/${renderLicenseBadge(license)})](https://opensource.org/licenses/${renderLicenseLink(license)})
  
---
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `
# ${data.title}

${data.description}

---

Created by: ${data.creators}

Question, comments, suggestions and constructive criticism always welcome.

<a href="mailto: ${data.email}"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
<a href="https://github.com/${data.github}" target="_blank"><img src="	https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>

---

## Contents:

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)

---

## Installation:

${data.installation}

---

## Usage:

${data.usage}

---
${renderLicenseSection(data.license)}
## Contributing:

${data.contribute}

`;
}

module.exports = generateMarkdown;
