# Automação Web - Site do Agi

Projeto de automação de testes 

## Tecnologias utilizadas

- JavaScript
- Cypress
- Cucumber
- Page Object Model
- Node.js

## Cenários automatizados

### Cenário 1 - Pesquisa por empréstimo consignado

Validar a pesquisa de opções utilizando o termo "Empréstimo consignado".

### Cenário 2 - Pesquisa por cartões

Validar a pesquisa de opções utilizando o termo "cartões".

## Estrutura do projeto

cypress/
├── e2e/
│   └── features/
│       └── busca.feature
├── pages/
│   └── BuscaPage.js
├── step_definitions/
│   └── busca.step.js
└── support/

## Pré-requisitos

- Node.js
- npm
- Google Chrome

## Instalação

Clone o repositório:

git clone <URL_DO_REPOSITORIO>

Entre na pasta do projeto:

cd qa-agibank

Instale as dependências:

npm install

## Executando os testes

Para executar utilizando a interface gráfica do Cypress:

npm run cy:open

Para executar em modo headless:

npm run cy:run

## Observações

Durante o desenvolvimento dos testes, foi identificado que o acionamento
do ícone de pesquisa ocorre normalmente, porém o campo de pesquisa não
está sendo exibido no ambiente.

Por esse motivo, a interação com o campo de pesquisa e a validação dos
resultados permanecem pendentes até que a funcionalidade esteja
disponível novamente.