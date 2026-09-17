import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import BuscaPage from '../pages/BuscaPage'

Given('que acesso o site do Agi Bank', () => {
  BuscaPage.acessarSite()
})


When('seleciono a opção {string}', (opcao) => {
  switch (opcao) {
    case 'Empréstimos':
      BuscaPage.selecionarEmprestimos()
      break

    case 'Cartões':
      BuscaPage.selecionarCartoes()
      break

    default:
      throw new Error(`Opção "${opcao}" não está mapeada`)
  }
})

Then('devo visualizar as opções de empréstimos disponíveis', () => {
  BuscaPage.validarEmprestimos()
})

Then('devo visualizar as opções de cartões disponíveis', () => {
  BuscaPage.validarCartoes()
})