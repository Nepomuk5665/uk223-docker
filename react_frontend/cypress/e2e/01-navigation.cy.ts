describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the homepage', () => {
    cy.get('[data-testid="home-page"]').should('exist');
    cy.contains('Event Management').should('be.visible');
  });

  it('should navigate to login page from home', () => {
    cy.get('[data-testid="home-login-button"]').click();
    cy.url().should('include', '/login');
    cy.get('[data-testid="login-page"]').should('exist');
  });

  it('should have working navbar links', () => {
    cy.get('[data-testid="navbar"]').should('exist');

    cy.get('[data-testid="navbar-home"]').click();
    cy.url().should('match', /http:\/\/localhost:3000\/?$/);

    cy.get('[data-testid="navbar-events"]').click();
    cy.url().should('include', '/events');
  });

  it('should show navbar logo and brand', () => {
    cy.get('[data-testid="navbar-logo"]').should('exist');
    cy.get('[data-testid="navbar-logo"]').should('contain', 'EventHub');
  });

  it('should display feature cards on homepage', () => {
    cy.get('[data-testid="feature-card-0"]').should('exist');
    cy.get('[data-testid="feature-card-1"]').should('exist');
    cy.get('[data-testid="feature-card-2"]').should('exist');
  });
});
