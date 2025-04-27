import AmazonHomepage from '../pages/amazon_homepage';
import AmazonSearchResults from '../pages/amazon_search_results';

const homepage = new AmazonHomepage();
const searchResults = new AmazonSearchResults();

/**
 * Data-driven tests for verifying the search functionality on Amazon's homepage.
 */
describe('Amazon Search Functionality', () => {
    const BASE_URL = 'https://www.amazon.com/';
    const EXPECTED_TITLE = 'Amazon.com. Spend less. Smile more.';

    beforeEach(() => {
        // Use the page object to navigate to the Amazon homepage
        homepage.visitHomepage(BASE_URL, EXPECTED_TITLE);
    });

    it('Search for multiple items from fixture', () => {
        // Load search terms from the fixture
        cy.fixture('search_items.json').then((searchItems) => {
            searchItems.forEach((item) => {
                cy.log(`Testing search functionality for: "${item}"`);

                // Use the page object to perform the search
                homepage.searchForItem(item);

                // Use the page object to verify search results
                const expectedSearchTitle = `Amazon.com : ${item}`;
                searchResults.verifySearchResults();
                searchResults.verifySearchTitle(expectedSearchTitle);

                cy.log(`Search for "${item}" completed successfully.`);
            });
        });
    });
});