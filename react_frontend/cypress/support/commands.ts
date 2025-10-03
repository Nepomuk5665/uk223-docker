/// <reference types="cypress" />

// Custom login command
Cypress.Commands.add('login', (email: string, password: string) => {
  cy.visit('/login');
  cy.get('[data-testid="login-email-input"]').type(email);
  cy.get('[data-testid="login-password-input"]').type(password);
  cy.get('[data-testid="login-submit-button"]').click();
  // Wait for redirect
  cy.url().should('not.include', '/login');
});

// Quick login as admin
Cypress.Commands.add('loginAsAdmin', () => {
  cy.login('admin@example.com', '1234');
});

// Quick login as user
Cypress.Commands.add('loginAsUser', () => {
  cy.login('user@example.com', '1234');
});

// Logout command
Cypress.Commands.add('logout', () => {
  cy.window().then((win) => {
    win.localStorage.clear();
    win.sessionStorage.clear();
  });
  cy.visit('/');
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
      loginAsAdmin(): Chainable<void>
      loginAsUser(): Chainable<void>
      logout(): Chainable<void>
    }
  }
}

export {};