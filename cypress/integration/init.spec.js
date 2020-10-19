describe('Cypress', () => {
  it('setup cypress', () => {
    expect(true).to.equal(true);
  });

  it('url root config', () => {
    cy.visit('/');
  });
});
