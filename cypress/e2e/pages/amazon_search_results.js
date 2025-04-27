class AmazonSearchResults {
    constructor() {
        this.resultsContainer = '.s-main-slot'; // Selector for the search results container
    }

    verifySearchResults() {
        cy.get(this.resultsContainer).should('exist');
        cy.log('Search results are displayed.');
    }

    verifySearchTitle(expectedTitle) {
        cy.title().should('eq', expectedTitle);
        cy.log(`Verified that the search page title is: "${expectedTitle}"`);
    }
}

export default AmazonSearchResults;