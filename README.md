# Cypress Testing Framework

This project is a testing framework built with **Cypress** to automate end-to-end and API tests for the Amazon website and other APIs. It includes tests for verifying navigation, search functionality, API responses, and other features. The framework follows the **Page Object Model (POM)** design pattern to improve maintainability and reusability.

## Features
- **Smoke Tests**: Verify the basic functionality of the Amazon homepage, such as navigation and title verification.
- **Data-Driven Testing**: Perform search functionality tests with multiple search terms using fixtures.
- **API Testing**: Validate API responses using the DummyJSON API for structured data like products and users.
- **Reusable Commands**: Custom Cypress commands for common actions like visiting the homepage and verifying the title.
- **Page Object Model (POM)**: Encapsulates page-specific actions and elements into reusable classes.
- **ESLint Integration**: Ensures code quality and consistency with linting rules.

## Technologies Used
- **Cypress**: A JavaScript-based end-to-end testing framework.
- **Node.js**: For managing dependencies and running Cypress.
- **JavaScript**: The programming language used for writing tests.
- **ESLint**: For linting and enforcing code quality.
- **Git**: For version control.

## Page Object Model (POM)
This framework implements the **Page Object Model (POM)** design pattern to separate test logic from page-specific details. Each page of the application is represented by a class that contains:
- **Selectors**: For identifying elements on the page.
- **Methods**: For performing actions on the page (e.g., clicking buttons, entering text).

### Example Pages
1. **Amazon Homepage**:
   - File: `cypress/pages/amazon_homepage.js`
   - Contains methods for navigating to the homepage, performing searches, and interacting with homepage elements.

2. **Amazon Search Results**:
   - File: `cypress/pages/amazon_search_results.js`
   - Contains methods for verifying search results and validating page titles.

### Benefits of POM
- **Maintainability**: If a page element changes, you only need to update the corresponding page object.
- **Reusability**: Page objects can be reused across multiple tests.
- **Readability**: Tests are cleaner and focus on high-level actions rather than implementation details.

## API Testing
This project includes API tests using the DummyJSON API, which provides structured data for testing purposes. API tests are located in the `cypress/e2e/api/` directory.

### Example API Tests
1. **Products API**:
   - File: `cypress/e2e/api/products_api.cy.js`
   - Tests endpoints for fetching products, fetching a single product by ID, and handling 404 errors for non-existent products.

2. **Users API**:
   - File: `cypress/e2e/api/users_api.cy.js`
   - Tests endpoints for fetching users, fetching a single user by ID, and handling 404 errors for non-existent users.

## Project Structure
```
cypress/
├── e2e/
│   ├── tests/               # End-to-end test cases
│   │   ├── amazon_smoke_tests.cy.js
│   │   ├── amazon_search_multiple.cy.js
│   │   └── amazon_verify_title.cy.js
│   ├── api/                 # API test cases
│   │   ├── products_api.cy.js
│   │   └── users_api.cy.js
│   └── pages/               # Page objects
│       ├── amazon_homepage.js
│       └── amazon_search_results.js
├── fixtures/                # Test data (e.g., JSON files)
│   └── search_terms.json
├── support/                 # Custom commands and support files
│   ├── commands.js
│   └── e2e.js
```

## Prerequisites
- **Node.js**: Install [Node.js](https://nodejs.org/) (version 14 or higher recommended).
- **Git**: Ensure Git is installed on your system.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests
### Open Cypress Test Runner
To open the Cypress Test Runner and run tests interactively:
```bash
npm run test:open
```
This script will first run ESLint to check for linting errors and then open the Cypress Test Runner.

### Run Tests in Headless Mode
To run all tests in headless mode:
```bash
npx cypress run
```

### Run Specific Test File
To run a specific test file:
```bash
npx cypress run --spec cypress/e2e/tests/amazon_smoke_tests.cy.js
```

## Linting
This project uses **ESLint** to enforce code quality and consistency. The linting rules are defined in the `eslint.config.js` file.

### Run Linter
To run the linter and check for issues:
```bash
npm run lint
```

### Fix Linting Issues
To automatically fix linting issues:
```bash
npx eslint 'cypress/**/*.js' --fix
```

## Custom Commands
This project includes custom Cypress commands for common actions:
- **`cy.visitAmazonHomepage(baseUrl, expectedTitle)`**: Navigates to the Amazon homepage and verifies the title.
- **`cy.verifyPageTitle(expectedTitle)`**: Verifies the page title.
- **`cy.verifyCurrentUrl(expectedUrl)`**: Verifies the current URL.

## Folder Exclusions
The following folders and files are excluded from version control (see `.gitignore`):
- `node_modules/`: Node.js dependencies.
- `cypress/videos/`: Videos recorded during test runs.
- `cypress/screenshots/`: Screenshots taken during test failures.
- `.env`: Environment configuration files.

## License
This project is licensed under the [MIT License](LICENSE).