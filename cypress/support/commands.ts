import {LogInHelper} from "./login-helper";

declare namespace Cypress {
    interface Chainable<Response> {
        login(): Chainable<Response>;
    }
}

const loginHelper = new LogInHelper();
Cypress.Commands.add('login', loginHelper.login);