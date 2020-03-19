/// <reference types="cypress" />

import {loginData} from "../fixtures/test-data";
import Chainable = Cypress.Chainable;

export class LogInHelper {
    private userToken = null;
    private userID = null;

    login() {
        if (this.userID || this.userToken) {
            return;
        } else {
            this.getUserCookies()
        }
    };

    setUserCookies(token: string, user: number) {
        Cypress.Cookies.defaults({whitelist: ['GETAFREE_AUTH_HASH_V2','GETAFREE_USER_ID']});
        cy.setCookie('GETAFREE_AUTH_HASH_V2', `${token}`);
        cy.setCookie('GETAFREE_USER_ID', `${user}`);
    }

    getUserCookies() {
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
                    this.userID = user;
                    this.userToken = token;
                    this.setUserCookies(token, user);
                    return;
                })
            });
        }

}
