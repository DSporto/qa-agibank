# QA Agibank - Automação de Testes

![Cypress Tests](https://github.com/DSporto/qa-agibank/actions/workflows/cypress.yml/badge.svg)

Projeto desenvolvido como desafio técnico de QA, reunindo testes automatizados de Web e API, além de testes de performance.

Para a automação foram utilizados Cypress, Cucumber/Gherkin e Page Object. Os testes de performance foram desenvolvidos com Apache JMeter.

## Tecnologias utilizadas

- Cypress 16
- JavaScript
- Cucumber / Gherkin
- Page Object
- Node.js
- GitHub Actions
- Mochawesome
- Apache JMeter

## Testes Web

Os testes Web foram desenvolvidos com Cypress e Cucumber, utilizando Gherkin para descrever os cenários e Page Object para separar as ações da página das definições dos steps.

Os cenários realizam consultas de produtos disponíveis no site do Agibank.

### Cenários implementados

- Consulta das opções de empréstimos
- Consulta das opções de cartões

Os testes validam o acesso ao site, a seleção das opções de produtos e o direcionamento para o conteúdo correspondente.

## Testes de API

Para os testes de API foi utilizada a Dog API.

Foram criados cenários positivos e negativos para validar as respostas da API.

### Cenários implementados

- Consulta da lista de raças
- Consulta de imagens da raça Labrador
- Consulta de imagem aleatória
- Consulta de uma raça inexistente

### Validações realizadas

- Status HTTP
- Status retornado no body
- Tipo dos dados retornados
- Conteúdo da resposta
- Tratamento de cenário negativo com HTTP 404

## Executando o projeto

### Pré-requisitos

Para executar os testes Web e API:

- Node.js
- npm

Para executar os testes de performance:

- Java 8 ou superior
- Apache JMeter 5.6.3

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
qa-agibank/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/
│   │   ├── api/
│   │   │   └── dogAPI.cy.js
│   │   └── features/
│   │       └── busca.feature
│   ├── pages/
│   │   └── BuscaPage.js
│   ├── reports/
│   ├── step_definitions/
│   │   └── busca.step.js
│   └── support/
├── jmeter/
│   ├── blazedemo-performance.jmx
│   ├── results/
│   │   └── resultado-pico.jtl
│   └── report/
│       └── index.html
├── cypress.config.js
├── package.json
└── README.md
```

## Cenários automatizados

### Web

- Consulta das opções de empréstimos
- Consulta das opções de cartões

### API

- Retorno da lista de raças
- Retorno das imagens da raça Labrador
- Retorno de uma imagem aleatória
- Tratamento de raça inexistente

## Integração Contínua

O projeto possui integração contínua configurada com GitHub Actions.

A pipeline é executada automaticamente em:

- Push para a branch `main`
- Pull Requests para a branch `main`

Durante a execução são realizadas as seguintes etapas:

1. Checkout do projeto
2. Configuração do Node.js
3. Instalação das dependências
4. Execução dos testes Cypress

Os testes Web e de API são executados através do comando:

```bash
npm run cy:run
```

## Relatórios dos testes Web e API

O projeto utiliza Mochawesome para geração dos relatórios dos testes automatizados.

Para executar somente os testes de API:

```bash
npx cypress run --spec "cypress/e2e/api/dogAPI.cy.js"
```

Os relatórios gerados pelo Cypress ficam disponíveis em:

```text
cypress/reports/
```

São gerados arquivos HTML e JSON contendo os resultados das execuções, incluindo testes aprovados, falhas e detalhes dos erros encontrados.

---

# Testes de Performance

Os testes de performance foram desenvolvidos com Apache JMeter utilizando o fluxo de compra de passagem do BlazeDemo.

## Fluxo testado

O cenário executa as seguintes etapas:

1. Acessar o BlazeDemo
2. Pesquisar voos
3. Escolher um voo
4. Finalizar a compra

A conclusão do fluxo é validada através da resposta:

```text
Thank you for your purchase today!
```

## Teste de Carga

Foi realizada uma execução controlada com:

- 10 usuários simultâneos
- Ramp-up de 10 segundos
- 5 iterações
- 200 requisições executadas

### Resultados

| Métrica | Resultado |
|---|---:|
| Requisições | 200 |
| Tempo médio | 275 ms |
| P90 | 302 ms |
| P95 | 400 ms |
| P99 | 470 ms |
| Tempo máximo | 524 ms |
| Erros | 0,00% |
| Throughput | 13,9 req/s |

Durante essa execução não foram registrados erros e o P90 permaneceu abaixo de 2 segundos.

## Teste de Pico

Também foi executado um cenário com aumento mais rápido no número de usuários:

- 25 usuários simultâneos
- Ramp-up de 2 segundos
- 2 iterações
- 200 requisições executadas

### Resultados

| Métrica | Resultado |
|---|---:|
| Requisições | 200 |
| Tempo médio | 296 ms |
| P90 | 408 ms |
| P95 | 436 ms |
| P99 | 522 ms |
| Tempo máximo | 534 ms |
| Erros | 0,00% |
| Throughput | 46,1 req/s |

Mesmo com o aumento mais rápido de usuários, não foram registrados erros e o P90 continuou abaixo do limite definido.

## Critério de desempenho

O critério utilizado para tempo de resposta foi:

```text
P90 < 2 segundos
```

Resultados obtidos:

```text
Teste de carga: P90 = 302 ms
Teste de pico:  P90 = 408 ms
```

Nos dois cenários executados, o critério de P90 inferior a 2 segundos foi atendido.

A meta de 250 requisições por segundo não foi validada diretamente contra o BlazeDemo. Como a aplicação utilizada é um serviço público de terceiros, optei por não aplicar uma carga agressiva que pudesse afetar sua disponibilidade.

O maior throughput obtido nos testes controlados foi:

```text
46,1 requisições por segundo
```

Portanto, os resultados demonstram o atendimento ao critério definido para tempo de resposta dentro da carga aplicada, mas não são suficientes para afirmar que a aplicação suporta 250 requisições por segundo.

## Relatório JMeter

Também foi realizada uma execução em modo non-GUI para geração do dashboard HTML do Apache JMeter.

A execução registrou:

- 200 requisições
- 0% de erros
- Dashboard HTML gerado com sucesso
- Requests Summary com 100% PASS

Os arquivos relacionados aos testes de performance estão disponíveis no diretório:

```text
jmeter/
```

Plano de teste:

```text
jmeter/blazedemo-performance.jmx
```

Resultado da execução:

```text
jmeter/results/resultado-pico.jtl
```

Dashboard HTML:

```text
jmeter/report/index.html
```

## Executando o teste de Performance

Exemplo de execução do JMeter em modo non-GUI:

```powershell
jmeter -n -t jmeter/blazedemo-performance.jmx -l jmeter/results/resultado-pico.jtl -e -o jmeter/report
```

Após a execução, o dashboard pode ser acessado pelo arquivo:

```text
jmeter/report/index.html
```

## Autor

Projeto desenvolvido para um desafio técnico de QA, com foco na aplicação prática de automação de testes Web e API, integração contínua e testes de performance.