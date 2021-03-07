context('Theme Mode', () => {
  beforeEach(() => cy.visit('/'));

  it ('light mode', () => {
    cy.get('body').should('have.css', 'background-color', 'rgb(0, 0, 0)')
    cy.contains('light').click()
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })
})
