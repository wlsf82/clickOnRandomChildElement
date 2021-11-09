Cypress.Commands.add('clickOnRandomChildElement', (parentEl, childEl) => {
  let randomElIndex
  cy.get(parentEl)
    .find(childEl)
    .then($element => {
      randomElIndex = getRandomNumber($element.length)
      cy.get(parentEl)
        .find(childEl)
        .eq(randomElIndex)
        .click()
    })
})

function getRandomNumber(n) {
  return Math.floor(Math.random() * n)
}
