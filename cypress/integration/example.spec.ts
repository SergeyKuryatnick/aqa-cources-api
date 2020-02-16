/// <reference types="cypress" />

describe('First spec', () => {
    it('123', () => {
        cy.login()
        cy.visit('');
        cy.title().should('contain', 'Hire Freelancers & Find Freelance Jobs Online | Freelancer');
    })
})