/**
 * Smoke test to verify the title of the Amazon homepage.
 */
describe('Amazon Homepage Title Verification', () => {
    const BASE_URL = 'https://www.amazon.com/';
    const EXPECTED_TITLE = 'Amazon.com. Spend less. Smile more.';

    beforeEach(() => {
        // Navigate to the Amazon homepage before each test
        cy.visit(BASE_URL);
    });

    /**
     * Test to verify the title of the Amazon homepage.
     */
    it('Should display the correct title on the homepage', () => {
        // Assert that the page title matches the expected title
        cy.title().should('eq', EXPECTED_TITLE);
        cy.log(`Verified that the homepage title is: "${EXPECTED_TITLE}"`);
    });
});