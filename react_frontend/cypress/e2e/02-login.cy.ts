describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/login');
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

    cy.get('[data-testid="login-error-message"]', { timeout: 5000 }).should('exist');
    cy.get('[data-testid="login-error-message"]').should('contain', 'Invalid');
  });

  it('should successfully login as admin and redirect to dashboard', () => {
    cy.get('[data-testid="login-email-input"]').type('admin@example.com');
    cy.get('[data-testid="login-password-input"]').type('1234');
    cy.get('[data-testid="login-submit-button"]').click();

    cy.url({ timeout: 10000 }).should('include', '/admin');
  });

  it('should successfully login as user and redirect to events', () => {
    cy.get('[data-testid="login-email-input"]').type('user@example.com');
    cy.get('[data-testid="login-password-input"]').type('1234');
    cy.get('[data-testid="login-submit-button"]').click();

    cy.url({ timeout: 10000 }).should('include', '/events');
  });

  it('should display demo credentials info', () => {
    cy.contains('Demo Credentials').should('be.visible');
    cy.contains('admin@example.com').should('be.visible');
    cy.contains('user@example.com').should('be.visible');
  });
});
