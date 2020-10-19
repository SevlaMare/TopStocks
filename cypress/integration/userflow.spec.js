describe('User flow', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('render stocks from dashboard', () => {
    cy.get('.stock')
  })

  it('have filter for categories', () => {
    cy.get('#dash-right')
  })

  it('select a option from filter, it becomes first element', () => {
    cy.get('#category').select('AAPL');
    cy.get('#dash').first().contains('AAPL')
  })

  it('click to see details from dashbord and rende details', () => {
    cy.get('.stock a').first().click()
    cy.get('.detail')
  })
})