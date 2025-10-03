describe('Profile Tests', () => {
  beforeEach(() => {
    cy.loginAsUser();
    cy.visit('/profile');
  });

  it('should display profile page', () => {
    cy.url({ timeout: 10000 }).should('include', '/profile');
    cy.contains('Edit Profile').should('be.visible');
  });

  it('should show user information in form fields', () => {
    cy.get('input[name="firstName"]').should('exist');
    cy.get('input[name="lastName"]').should('exist');
    cy.get('input[name="email"]').should('exist');
  });

  it('should have save and cancel buttons', () => {
    cy.contains('button', 'Save').should('exist');
    cy.contains('button', 'Cancel').should('exist');
  });
});
