describe('Events Tests', () => {
  beforeEach(() => {
    cy.loginAsUser();
    cy.visit('/events');
  });

  it('should display events list page', () => {
    cy.get('[data-testid="event-list-page"]', { timeout: 10000 }).should('exist');
    cy.contains('Events').should('be.visible');
  });

  it('should have create event button', () => {
    cy.get('[data-testid="events-create-button"]').should('exist');
    cy.get('[data-testid="events-create-button"]').should('be.visible');
  });

  it('should navigate to create event page', () => {
    cy.get('[data-testid="events-create-button"]').click();
    cy.url().should('include', '/events/create');
  });

  it('should display existing events', () => {
    cy.get('[data-testid="event-list-page"]').should('exist');
    // Check if any event cards exist (if there are events in the database)
    cy.get('body').then(($body) => {
      if ($body.find('[data-testid^="event-card-"]').length > 0) {
        cy.get('[data-testid^="event-card-"]').first().should('exist');
      } else {
        // If no events, check for empty state
        cy.contains('No events yet').should('be.visible');
      }
    });
  });
});
