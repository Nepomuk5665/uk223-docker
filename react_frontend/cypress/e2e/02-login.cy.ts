describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/login');
    // Wait for the page to be fully loaded
    cy.get('[data-testid="login-page"]', { timeout: 10000 }).should('exist');
  });

  it('should display login form', () => {
    cy.get('[data-testid="login-page"]').should('exist');
    cy.get('[data-testid="login-card"]').should('exist');
    cy.get('[data-testid="login-email-input"]').should('exist');
    cy.get('[data-testid="login-password-input"]').should('exist');
    cy.get('[data-testid="login-submit-button"]').should('exist');
  });

  it('should show error for invalid credentials', () => {
    cy.get('[data-testid="login-email-input"]').type('wrong@example.com');
    cy.get('[data-testid="login-password-input"]').type('wrongpass');
    cy.get('[data-testid="login-submit-button"]').click();

    // Wait longer for the error message and check if it exists
    cy.get('[data-testid="login-error-message"]', { timeout: 10000 }).should('exist');
    cy.get('[data-testid="login-error-message"]').should('be.visible');
  });

  it('should successfully login as admin and redirect to dashboard', () => {
    cy.get('[data-testid="login-email-input"]').clear().type('admin@example.com');
    cy.get('[data-testid="login-password-input"]').clear().type('1234');
    cy.get('[data-testid="login-submit-button"]').click();

    // Wait longer for redirect and backend response
    cy.url({ timeout: 15000 }).should('include', '/admin');
  });

  it('should successfully login as user and redirect to events', () => {
    cy.get('[data-testid="login-email-input"]').clear().type('user@example.com');
    cy.get('[data-testid="login-password-input"]').clear().type('1234');
    cy.get('[data-testid="login-submit-button"]').click();

    // Wait longer for redirect and backend response
    cy.url({ timeout: 15000 }).should('include', '/events');
  });

  it('should display demo credentials info', () => {
    cy.contains('Demo Credentials').should('be.visible');
    cy.contains('admin@example.com').should('be.visible');
    cy.contains('user@example.com').should('be.visible');
  });
});
