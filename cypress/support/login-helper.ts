/// <reference types="cypress" />

import Chainable = Cypress.Chainable;
import Response = Cypress.Response;

const urlGetDeviceToken = 'https://www.freelancer.com/auth/device/';
const urlLogin = 'https://www.freelancer.com/ajax/auth/login.php';
const userLogin = 'anton.olkhovskyi@valor-software.com';
const userPass = 'bc?+c6QW@Cpv6u&';

export class LogInHelper {
    private userToken = null;
    private deviceToken = null;


    login(): Chainable<Response> {
        return cy.request({
            method: 'GET',
            url: urlGetDeviceToken
        }).then(({body: {result}, status}) => {
            expect(status).to.eq(200);

            return cy.request({
                method: 'POST',
                url: urlLogin,
                form: true,
                body: {
                    device_token: result.token,
                    user: userLogin,
                    password: userPass
                }
            }).then(({body: {result: {token, user}}}) => {
                expect(token).to.be.a('string');
                cy.setCookie('GETAFREE_AUTH_HASH_V2', `${token}`);
                cy.setCookie('GETAFREE_USER_ID', `${user}`);
                return;
            })
        });
    }

}