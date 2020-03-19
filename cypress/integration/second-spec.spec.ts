/// <reference types="cypress" />

describe('Second spec', () => {
    before(() => {
        cy.login();
    });
    beforeEach(() => {
        Cypress.Cookies.preserveOnce('GETAFREE_AUTH_HASH_V2', 'GETAFREE_USER_ID');
        cy.visit('');
    });

    after(() => {
        cy.clearCookie('GETAFREE_AUTH_HASH_V2')
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
