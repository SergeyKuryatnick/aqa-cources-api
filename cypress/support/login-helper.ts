/// <reference types="cypress" />

import {loginData} from "../fixtures/test-data";
import Chainable = Cypress.Chainable;

export class LogInHelper {
    private userToken = null;

    login(): Chainable {
        if(this.userToken){
            return cy.log('you are logged in already');
        }

        return cy.request({
            method: 'GET',
            url: loginData.urlGetDeviceToken
        }).then(({body: {result}, status}) => {
            expect(status).to.eq(200);

            return cy.request({
                method: 'POST',
                url: loginData.urlLogin,
                form: true,
                body: {
                    device_token: result.token,
                    user: loginData.userLogin,
                    password: loginData.userPass
                }
            }).then(({body: {result: {token, user}}}) => {
                expect(token).to.be.a('string');
                cy.setCookie('GETAFREE_AUTH_HASH_V2', `${token}`);
                cy.setCookie('GETAFREE_USER_ID', `${user}`);
                this.userToken = user;
                return;
            })
        });
    }

}