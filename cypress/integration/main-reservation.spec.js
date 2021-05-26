describe('Show main view of Turing Reservation App', () => {

  beforeEach(() => {
    cy.fixture('mockdata.json')
      .then(mockData => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
          statusCode: 200,
          delay: 100,
          body: mockData
        })
      })
    cy.visit('http://localhost:3000')
  });

  it('Should be able to visit the main page', () => {
    cy.visit('http://localhost:3000/')
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should display the title upon loading the page', () => {
    cy.contains('h1', 'Turing Cafe Reservations')
  })

  it('Should display form input lines for name, number and button to submit', () => {
    cy.get('form').find('input').should('be.visible')
      .get('form input[type=text]').should('be.visible')
      .get('form input[type=number]').should('be.visible')
      .get('form').find('button').should('be.visible')
  })

  it('Should be able to click and make new reservation', () => {
    cy.get('form').click()
  })

  it('Should display all reservations on the main page', () => {
    cy.get('article').find('.card').should('have.length', 7)
  })

})
