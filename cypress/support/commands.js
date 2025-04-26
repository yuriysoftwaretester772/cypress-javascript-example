// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



/**
 * Custom command to navigate to the Amazon homepage.
 */
Cypress.Commands.add('visitAmazonHomepage', (baseUrl, expectedTitle) => {
   cy.visit(baseUrl);
   cy.url().should('eq', baseUrl);
   cy.title().should('eq', expectedTitle);
   cy.log(`Verified that the homepage title is: "${expectedTitle}"`);
});

/**
* Custom command to verify the page title.
*/
Cypress.Commands.add('verifyPageTitle', (expectedTitle) => {
   cy.title().should('eq', expectedTitle);
   cy.log(`Verified that the page title is: "${expectedTitle}"`);
});

/**
* Custom command to verify the current URL.
*/
Cypress.Commands.add('verifyCurrentUrl', (expectedUrl) => {
   cy.url().should('eq', expectedUrl);
   cy.log(`Verified that the current URL is: "${expectedUrl}"`);
});
