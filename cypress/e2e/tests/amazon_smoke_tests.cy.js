/**
 * Smoke tests for Amazon navigation and basic functionality.
 */
describe('Amazon Smoke Tests', () => {
    const BASE_URL = 'https://www.amazon.com/';
    const EXPECTED_TITLE = 'Amazon.com. Spend less. Smile more.';

    beforeEach(() => {
        // Navigate to the Amazon homepage before each test
        cy.visitAmazonHomepage(BASE_URL, EXPECTED_TITLE);
    });

    /**
     * Test to verify navigation to the Amazon homepage.
     */
    it('Amazon Homepage Navigation', () => {
        // Verify that the homepage loads correctly
        cy.log('Amazon homepage loaded successfully.');
    });

    /**
     * Test to verify navigation to the Best Sellers page.
     */
    it('Amazon Best Sellers Navigation', () => {
        // Click on the "Best Sellers" link
        cy.contains('Best Sellers').click();

        // Verify that the Best Sellers page loads correctly
        cy.url().should('include', 'bestsellers');
        cy.title().should('include', 'Best Sellers');
        cy.log('Successfully navigated to the Best Sellers page.');
    });

    /**
     * Test to verify the basic search functionality.
     */
    it('Amazon Basic Search', () => {
        const SEARCH_TERM = 'Jewelry';

        // Perform a search for the term "Jewelry"
        cy.get('#twotabsearchtextbox').type(`${SEARCH_TERM}{enter}`);

        // Verify that search results are displayed
        cy.get('.s-main-slot').should('exist');
        cy.log(`Search for "${SEARCH_TERM}" completed successfully.`);
    });
});