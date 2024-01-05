# Terpli-Testing

This project involves creating Cypress tests for verifying the functionality of the Terpli chatbot-like plugin on various dispensaries' websites. The primary objectives are to ensure the presence of the Terpli launcher button, its functionality, and the ability to interact with a dropdown menu on one of the sites.


## Thought Process

### Analyzing the Requirement
- Identified the key functionalities to be tested: presence and functionality of the Terpli launcher button, and interaction with a dropdown menu.
- Recognized the need for tests to be clean, reusable, and well-documented.

### Designing the Test
- Opted for a loop structure to iterate through the given URLs, ensuring each site is tested independently.
- Incorporated conditional logic for specific site behaviors, like age verification on traderoots.buzz.
- Ensured tests wait for sufficient time after page visits to account for loading times.

### Implementing the Test
Used describe and it blocks for structured and readable test cases.
Employed Cypress commands like cy.visit(), cy.get(), and cy.click() to simulate user interactions.
Added checks (should('be.visible')) to confirm the visibility of elements, ensuring the plugin's functionality.

### Handling Site-Specific Features
- Addressed the unique dropdown menu feature on traderoots.buzz, creating tests to interact with it and verify functionality.
- Managed age-gate popup specific to traderoots.buzz using conditional statements.

### Ensuring Robustness
Used timeouts and waits to deal with network delays and asynchronous loading.
Made the code adaptable to potential changes in the website structure or plugin.
Instructions for Running the Project


## Setup

### Clone the Repository
```bash
git clone [Repository URL]
cd [Repository Directory]
```

### Install Cypress and Dependencies
```bash
npm install cypress --save-dev
```


## Running the Tests

### Open Cypress Test Runner
```bash
npx cypress open
```

### Select E2E testing

### Select a browser to run the rest (select Electron for the best performance)

### Click demo.cy.js inside the Terpli-test folder


## Demo Video
https://drive.google.com/file/d/13IEcLHgkW0CSFS3U72B8H8jXWfvt7SsG/view?usp=sharing

## Notes
- Ensure the URLs in the test file match the ones provided for the test.
- Adjust wait times based on network conditions and website response times.

## Troubleshooting
- Verify Node.js and npm are correctly installed.
- Check the internet connection, as the tests require access to external URLs.
- Ensure the Cypress version is compatible with the project.
