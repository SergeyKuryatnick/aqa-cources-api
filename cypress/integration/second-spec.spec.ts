/// <reference types="cypress" />

import {LogInHelper} from "../cypress/support/login-helper";

describe('Second spec', () => {
    const loginHelper = new LogInHelper();
    before(() => {
        cy.login();
    });
    beforeEach(() => {
        cy.visit('', );
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
