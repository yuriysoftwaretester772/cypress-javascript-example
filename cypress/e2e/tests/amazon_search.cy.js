/**
 * Test suite for verifying the search functionality on Amazon's homepage.
 */
describe('Amazon Search Functionality', () => {
    const BASE_URL = 'https://www.amazon.com/';
    const EXPECTED_TITLE = 'Amazon.com. Spend less. Smile more.';
    const SEARCH_TERM = 'nike air max';
    const SEARCH_TITLE = `Amazon.com : ${SEARCH_TERM}`;

    beforeEach(() => {
        // Navigate to the Amazon homepage before each test
        cy.visitAmazonHomepage(BASE_URL, EXPECTED_TITLE);
    });

    /**
     * Test to verify that searching for "Nike Air Max" works correctly.
     */
    it('Search for Nike Air Max', () => {
        // Verify that the page title matches the expected title
        cy.title().should('eq', EXPECTED_TITLE);

        // Locate the search field element and enter the search term
        cy.get('#twotabsearchtextbox').type(`${SEARCH_TERM}{enter}`);

        // Verify that the page title matches the expected search title
        cy.title().should('eq', SEARCH_TITLE);

        // Verify that search results are displayed
        cy.get('.s-main-slot').should('exist');
    });
});