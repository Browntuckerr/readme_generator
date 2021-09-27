// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Liscensing:
  [![liscense](https://img.shields.io/badge/iscense-${data.liscense}-blue)](https://shields.io)

  ## Table of Contents
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[Testing](#testing)
  -[Additional Info](#addition-info)

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}
  
  ## Usage:
  ${data.usage}

  ## Testing:
  ${data.testing}

  ## Additional Info:
  - Github: [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown

module.exports = generateMarkdown;
