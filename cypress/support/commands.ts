import {LogInHelper} from "./login-helper";
export {}
declare global {
    namespace Cypress {
        interface Chainable {
            login(): Chainable;
        }
    }
}

const loginHelper = new LogInHelper();
Cypress.Commands.add('login', loginHelper.login);
