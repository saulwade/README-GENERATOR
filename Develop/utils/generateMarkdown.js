// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'APACHE 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'APACHE 2.0':
      return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL 3.0':
      return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD 3':
      return '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  return `## License

This project is licensed under the ${link}.

${badge}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.projectName}

## Description

${answers.description}

${renderLicenseSection(answers.license)}

## Installation

To install dependencies, run the following command:

\`\`\`
${answers.installation}
\`\`\`

## Usage

${answers.usage}

## Contributing

${answers.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${answers.tests}
\`\`\`

## Questions

If you have any questions, please feel free to reach out to me at ${
    answers.email
  }. You can also find me on GitHub at [${
    answers.username
  }](https://github.com/${answers.username}).
`;
}

module.exports = generateMarkdown;
