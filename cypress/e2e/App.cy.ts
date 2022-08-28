describe('App E2E', () => {
  it('Should have table', () => {
    cy.visit('/');
    cy.get('table').should('be.visible').should('exist');
  });
  it('Should have map', () => {
    cy.get('.leaflet-control-zoom-in').should('be.visible').should('exist');
  });
  it('Should have header', () => {
    cy.get('h1')
      .should('have.text', 'PEOPLE | FLOOR PLAN')
      .should('be.visible');
  });
  it('Should have pagination', () => {
    cy.contains('Next').should('be.visible').should('exist');
    cy.contains('Prev').should('be.visible').should('exist');
  });
  it('Should click pagination', () => {
    cy.contains('Next').click().click();
    cy.contains('Prev').click().click();
  });
  it('Prev btn should be disabled in pagination', () => {
    cy.contains('Prev').should('be.disabled');
  });
  it('Should have Map view button', () => {
    cy.contains('Map view').should('be.visible');
  });

  it('Should click Map view button', () => {
    cy.contains('Map view').click();
    cy.contains('Scheme').should('be.visible');
  });
  it('Should click Scheme button', () => {
    cy.contains('Scheme').click();
    cy.contains('Map view').should('be.visible');
  });
});
