describe('Show main view of Turing Reservation App', () => {

  it('Should be able to visit the main page', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should display the title upon loading the page', () => {
    cy.contains('h1', 'Turing Cafe Reservations')
  })




})
