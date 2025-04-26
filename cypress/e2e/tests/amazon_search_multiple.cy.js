/**
 * Data-driven tests for verifying the search functionality on Amazon's homepage.
 */
describe('Amazon Search Functionality', () => {
    const BASE_URL = 'https://www.amazon.com/';
    const EXPECTED_TITLE = 'Amazon.com. Spend less. Smile more.';

    beforeEach(() => {
        // Navigate to the Amazon homepage before each test
        cy.visitAmazonHomepage(BASE_URL, EXPECTED_TITLE);
    });

    it('Search for multiple items from fixture', () => {
        // Load search terms from the fixture
        cy.fixture('search_items.json').then((searchItems) => {
            searchItems.forEach((item) => {
                cy.log(`Testing search functionality for: "${item}"`);

                // Locate the search field element, clear it, and enter the search term
                cy.get('#twotabsearchtextbox').clear().type(`${item}{enter}`);

                // Verify the page title matches the search term
                const expectedSearchTitle = `Amazon.com : ${item}`;
                cy.title().should('eq', expectedSearchTitle);

                // Verify that search results are displayed
                cy.get('.s-main-slot').should('exist');
                cy.log(`Search for "${item}" completed successfully.`);
            });
        });
    });
});