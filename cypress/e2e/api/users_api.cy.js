/**
 * API tests for the DummyJSON Users API.
 */
describe('DummyJSON Users API', () => {
    const BASE_URL = 'https://dummyjson.com';

    it('Should fetch all users', () => {
        cy.request(`${BASE_URL}/users`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('users');
            expect(response.body.users).to.be.an('array');
            cy.log('Fetched all users successfully.');
        });
    });

    it('Should fetch a single user by ID', () => {
        const userId = 1;
        cy.request(`${BASE_URL}/users/${userId}`).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', userId);
            expect(response.body).to.have.property('firstName');
            cy.log(`Fetched user with ID: ${userId}`);
        });
    });

    it('Should return 404 for a non-existent user', () => {
        const invalidUserId = 9999;
        cy.request({
            url: `${BASE_URL}/users/${invalidUserId}`,
            failOnStatusCode: false, // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.have.property('message', `User with id '${invalidUserId}' not found`);
            cy.log(`Verified 404 for non-existent user ID: ${invalidUserId}`);
        });
    });
});