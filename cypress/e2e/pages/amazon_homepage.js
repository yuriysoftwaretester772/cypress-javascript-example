class AmazonHomepage {
    constructor() {
        this.searchBox = '#twotabsearchtextbox'; // Selector for the search box
        this.bestSellersLink = 'Best Sellers';  // Text for the Best Sellers link
    }

    visitHomepage(baseUrl, expectedTitle) {
        cy.visit(baseUrl);
        cy.title().should('eq', expectedTitle);
        cy.log(`Verified that the homepage title is: "${expectedTitle}"`);
    }

    searchForItem(item) {
        cy.get(this.searchBox).clear().type(`${item}{enter}`);
    }

    navigateToBestSellers() {
        cy.contains(this.bestSellersLink).click();
    }
}

export default AmazonHomepage;