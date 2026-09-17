class BuscaPage {

  acessarSite() {
    cy.visit('https://agibank.com.br/')
  }

  selecionarEmprestimos() {
    cy.contains('Empréstimos', { timeout: 10000 })
      .should('be.visible')
      .click()
  }

  selecionarCartoes() {
    cy.contains('a', 'Cartões', { timeout: 10000 })
      .should('exist')
      .click({ force: true })
  }

  validarEmprestimos() {
    cy.contains('Empréstimo', { timeout: 10000 })
      .should('be.visible')
  }

  validarCartoes() {
    cy.url({ timeout: 10000 })
      .should('include', '/cartoes')
  }
}

export default new BuscaPage()