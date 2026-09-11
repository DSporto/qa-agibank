
class BuscaPage {
  elements = {
    botaoBusca: () => cy.get('[aria-label="Search icon link"]').first()
  }

  abrirBusca() {
    this.elements.botaoBusca()
      .should('be.visible')
      .click()
  }

  pesquisar(termo) {
    // implementar quando o campo de busca estiver acessível
  }

  validarResultados(termo) {
    // implementar quando conseguirmos executar a busca
  }
}

export default new BuscaPage()