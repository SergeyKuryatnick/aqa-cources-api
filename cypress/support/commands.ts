import {LogInHelper} from "./login-helper";

declare global {
    namespace Cypress {
        interface Chainable {
        login(): Chainable<Response>;
        }
    }
}
    
const loginHelper = new LogInHelper();
Cypress.Commands.add('login', loginHelper.login);
