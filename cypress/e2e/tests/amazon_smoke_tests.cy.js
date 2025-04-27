import AmazonHomepage from '../pages/amazon_homepage';
import AmazonSearchResults from '../pages/amazon_search_results';

const homepage = new AmazonHomepage();
const searchResults = new AmazonSearchResults();

describe('Amazon Smoke Tests', () => {
    const BASE_URL = 'https://www.amazon.com';
    const EXPECTED_TITLE = 'Amazon.com. Spend less. Smile more.';

    beforeEach(() => {
        homepage.visitHomepage(BASE_URL, EXPECTED_TITLE);
    });

    it('Amazon Homepage Navigation', () => {
        cy.log('Amazon homepage loaded successfully.');
    });

    it('Amazon Best Sellers Navigation', () => {
        homepage.navigateToBestSellers();
        cy.url().should('include', 'bestsellers');
        cy.title().should('include', 'Best Sellers');
        cy.log('Successfully navigated to the Best Sellers page.');
    });

    it('Amazon Basic Search', () => {
        const SEARCH_TERM = 'Jewelry';
        homepage.searchForItem(SEARCH_TERM);
        searchResults.verifySearchResults();
        searchResults.verifySearchTitle(`Amazon.com : ${SEARCH_TERM}`);
    });
});