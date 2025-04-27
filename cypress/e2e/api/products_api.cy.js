/**
 * API tests for the DummyJSON Products API.
 */
describe('DummyJSON Products API', () => {
    const BASE_URL = 'https://dummyjson.com';

    it('Should fetch all products', () => {
        cy.request(`${BASE_URL}/products`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('products');
            expect(response.body.products).to.be.an('array');
            cy.log('Fetched all products successfully.');
        });
    });

    it('Should fetch a single product by ID', () => {
        const productId = 1;
        cy.request(`${BASE_URL}/products/${productId}`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', productId);
            expect(response.body).to.have.property('title');
            cy.log(`Fetched product with ID: ${productId}`);
        });
    });

    it('Should return 404 for a non-existent product', () => {
        const invalidProductId = 9999;
        cy.request({
            url: `${BASE_URL}/products/${invalidProductId}`,
            failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.have.property('message', `Product with id '${invalidProductId}' not found`);
            cy.log(`Verified 404 for non-existent product ID: ${invalidProductId}`);
        });
    });
});