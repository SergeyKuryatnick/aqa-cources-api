/// <reference types="cypress" />

describe('First spec', () => {
    beforeEach(() => {
        cy.login();
        Cypress.Cookies.preserveOnce('GETAFREE_AUTH_HASH_V2', 'GETAFREE_USER_ID');
        cy.visit('');
    });

    // First test will call full login chain
    it('123', () => {
        cy.title().should('contain', 'Dashboard');
    });

    // Login shouldn't call full chain again
    it('1234', () => {
        cy.title().should('contain', 'Dashboard');
    })
});
