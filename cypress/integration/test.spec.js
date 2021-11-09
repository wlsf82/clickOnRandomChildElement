it('removes a random item from the lists', () => {
  cy.visit('/')

  cy.clickOnRandomChildElement('.container', '.button-small')

  cy.get('.item').should('have.length', 19)
})
