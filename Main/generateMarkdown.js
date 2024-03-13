function generateMarkdown(data) {
  return `
        # ${data.title}

        ${data.license}

        ### Description

        ${data.description}

        ### Table of Contents
        * Installation

        ## Installation
        To install, run the following commands:
        \`\`\`
        ${data.install}
        \`\`\`

        ## Usage
        ${data.usage}

        ${data.license}

        ## Contributing
        ${data.contribute}

        ## Test
        ${data.tests}

        ## Any Questions?

        ${data.username}
        ${data.email}

    `;
}

module.exports = generateMarkdown;
