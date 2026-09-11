
class BuscaPage {
  elements = {
    botaoBusca: () => cy.get('[aria-label="Search icon link"]').first()
  }

  abrirBusca() {
  this.elements.botaoBusca()
    .filter(':visible')
    .first()
    .should('exist')

  this.elements.botaoBusca()
    .filter(':visible')
    .first()
    .click({ force: true })
}

  pesquisar(termo) {
    // implementar quando o campo de busca estiver acessível
  }

  validarResultados(termo) {
    // implementar quando conseguirmos executar a busca
  }
}

export default new BuscaPage()