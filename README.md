# Cypress Testing Framework

This project is a testing framework built with **Cypress** to automate end-to-end tests for the Amazon website. It includes tests for verifying navigation, search functionality, and other basic features of the Amazon homepage.

## Features
- **Smoke Tests**: Verify the basic functionality of the Amazon homepage, such as navigation and title verification.
- **Data-Driven Testing**: Perform search functionality tests with multiple search terms using fixtures.
- **Reusable Commands**: Custom Cypress commands for common actions like visiting the homepage and verifying the title.

## Technologies Used
- **Cypress**: A JavaScript-based end-to-end testing framework.
- **Node.js**: For managing dependencies and running Cypress.
- **JavaScript**: The programming language used for writing tests.
- **Git**: For version control.


## Prerequisites
- **Node.js**: Install [Node.js](https://nodejs.org/) (version 14 or higher recommended).
- **Git**: Ensure Git is installed on your system.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
2. Navigate to the project directory:
cd your-repo-name
3. Install dependencies:
npm install

## Running Tests
Open Cypress Test Runner
To open the Cypress Test Runner and run tests interactively:
npx cypress open

Run Tests in Headless Mode
To run all tests in headless mode:

npx cypress run

Run Specific Test File
To run a specific test file:

npx cypress run --spec amazon_smoke_tests.cy.js

## Writing Tests
Test files are located in the cypress/e2e/tests/ directory.
Use the cypress/fixtures/ directory to store test data (e.g., search_terms.json).
Reuse common actions by adding custom commands in cypress/support/commands.js.

## Custom Commands
This project includes custom Cypress commands for common actions:

cy.visitAmazonHomepage(baseUrl, expectedTitle): Navigates to the Amazon homepage and verifies the title.
cy.verifyPageTitle(expectedTitle): Verifies the page title.
cy.verifyCurrentUrl(expectedUrl): Verifies the current URL.

## Folder Exclusions
The following folders and files are excluded from version control (see .gitignore):

node_modules/: Node.js dependencies.
cypress/videos/: Videos recorded during test runs.
cypress/screenshots/: Screenshots taken during test failures.
.env: Environment configuration files.

## License
This project is licensed under the MIT License.