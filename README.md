# QA Agibank - Automação de Testes

# QA Agibank - Automação de Testes

Projeto de automação de testes desenvolvido com Cypress, contemplando testes Web e testes de API.

## Tecnologias

- Cypress 16
- JavaScript
- Cucumber / Gherkin
- Page Object
- Node.js

## Testes Web

Automação de cenários de busca no Blog do Agibank utilizando:

- Cypress
- Cucumber
- Gherkin
- Page Object

> Observação: alguns comportamentos da funcionalidade de busca podem depender da disponibilidade da aplicação.

## Testes de API

Os testes de API utilizam a Dog API para validar diferentes cenários.

### Cenários implementados

- Consulta da lista de raças
- Consulta de imagens da raça Labrador
- Consulta de imagem aleatória
- Validação de erro para raça inexistente

### Validações realizadas

- Status HTTP
- Status retornado no body
- Tipo dos dados retornados
- Conteúdo da resposta
- Cenário negativo com HTTP 404

## Executando o projeto

### Pré-requisitos

- Node.js
- npm

### Instalar as dependências

```bash
npm install
```

### Abrir o Cypress

```bash
npm run cy:open
```

### Executar os testes em modo headless

```bash
npm run cy:run
```

## Estrutura do projeto

```text
cypress/
├── e2e/
│   ├── api/
│   │   └── dogAPI.cy.js
│   └── features/
│       └── busca.feature
├── fixtures/
├── pages/
│   └── BuscaPage.js
├── step_definitions/
│   └── busca.step.js
└── support/
```

## Cenários automatizados

### Web

- Pesquisa por empréstimo consignado
- Pesquisa por cartões

### API

- Retorno da lista de raças
- Retorno das imagens da raça Labrador
- Retorno de uma imagem aleatória
- Tratamento de raça inexistente

## Autor

Projeto desenvolvido para prática e demonstração de conhecimentos em automação de testes Web e API.