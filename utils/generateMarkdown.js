function generateMarkdown(data) {
  return `# ${data.title}
  
## Description

${data.description}

## Licensing

[![license](https://img.shields.io/badge/license-${data.license}-blue)](https://shields.io)


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [Acknowledgments](#acknowledgments)

## Installation

${data.install}

## Usage

${data.usage}

## Contributing

${data.contribute}

## Tests

${data.test}

## Acknowledgments

${data.acknowledgment}

## Questions

If you have any quetions you can contact me on [github](https://github.com/${data.github}) or shoot me an email at ${data.email}.
`;
}

module.exports = generateMarkdown;
