import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import BuscaPage from '../pages/BuscaPage'

Given('que acesso o site do Agi', () => {
  cy.visit('/')
})

When('pesquiso por {string}', (termo) => {
  BuscaPage.abrirBusca()
  BuscaPage.pesquisar(termo)
})

Then('devo visualizar resultados relacionados a {string}', (termo) => {
  BuscaPage.validarResultados(termo)
})