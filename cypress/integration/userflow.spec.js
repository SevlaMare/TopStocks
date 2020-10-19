describe('Form', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('render stocks form dashboard', () => {
    cy.get('.stock')
  })

  it('have filter for categories', () => {
    cy.get('#dash-right')
  })
})