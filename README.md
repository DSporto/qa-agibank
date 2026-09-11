# QA Agibank - Automação de Testes

![Cypress Tests](https://github.com/DSporto/qa-agibank/actions/workflows/cypress.yml/badge.svg)

Projeto de automação de testes contemplando testes Web, API e Performance, utilizando Cypress, Cucumber, GitHub Actions e Apache JMeter.

## Tecnologias

- Cypress 16
- JavaScript
- Cucumber / Gherkin
- Page Object
- Node.js
- GitHub Actions
- Mochawesome
- Apache JMeter

## Testes Web

Automação de cenários de busca no Blog do Agibank utilizando Cypress, Cucumber, Gherkin e o padrão Page Object.

### Cenários implementados

- Pesquisa por empréstimo consignado
- Pesquisa por cartões

> Observação: alguns comportamentos da funcionalidade de busca podem depender da disponibilidade da aplicação.

## Testes de API

Os testes de API utilizam a Dog API para validar diferentes cenários de requisição e resposta.

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

Para executar os testes Web e API:

- Node.js
- npm

Para executar os testes de Performance:

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

- Pesquisa por empréstimo consignado
- Pesquisa por cartões

### API

- Retorno da lista de raças
- Retorno das imagens da raça Labrador
- Retorno de uma imagem aleatória
- Tratamento de raça inexistente

## Integração Contínua

O projeto possui integração contínua utilizando GitHub Actions.

A pipeline é executada automaticamente em:

- Push para a branch `main`
- Pull Requests para a branch `main`

Durante a execução são realizadas as seguintes etapas:

1. Checkout do projeto
2. Configuração do Node.js
3. Instalação das dependências
4. Execução automatizada dos testes Cypress

A pipeline executa os testes Web e de API através do comando:

```bash
npm run cy:run
```

## Relatório de Testes Web e API

Os testes automatizados utilizam Mochawesome para geração de relatórios.

Para executar especificamente os testes de API:

```bash
npx cypress run --spec "cypress/e2e/api/dogAPI.cy.js"
```

Os relatórios são gerados no diretório:

```text
cypress/reports/
```

Entre os arquivos gerados estão relatórios nos formatos HTML e JSON.

O relatório apresenta informações sobre os testes executados, sucessos, falhas e detalhes de eventuais erros.

---

# Testes de Performance

Os testes de performance foram implementados com Apache JMeter utilizando o fluxo de compra de passagem do BlazeDemo.

## Fluxo testado

O cenário automatizado executa as seguintes etapas:

1. Acessar o BlazeDemo
2. Pesquisar voos
3. Escolher um voo
4. Finalizar a compra

A conclusão do fluxo foi validada através da resposta:

```text
Thank you for your purchase today!
```

## Teste de Carga

Foi realizada uma execução controlada utilizando:

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

O cenário apresentou 0% de erros e P90 abaixo de 2 segundos.

## Teste de Pico

Para simular um aumento abrupto de usuários, foi executado um cenário com:

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

Mesmo com o aumento abrupto de usuários, não foram registrados erros e o P90 permaneceu abaixo do limite estabelecido.

## Critério de Desempenho

O critério definido para tempo de resposta foi:

```text
P90 < 2 segundos
```

Nos cenários executados:

```text
Teste de carga: P90 = 302 ms
Teste de pico:  P90 = 408 ms
```

Portanto, o critério de P90 inferior a 2 segundos foi atendido nos testes realizados.

A meta de 250 requisições por segundo não foi validada diretamente contra o BlazeDemo, pois se trata de um serviço público de terceiros e uma carga agressiva poderia impactar sua disponibilidade.

O maior throughput observado no cenário controlado foi de:

```text
46,1 requisições por segundo
```

Dessa forma, os resultados permitem concluir que o critério de tempo de resposta foi atendido nos cenários executados, porém não permitem afirmar que a aplicação suporta 250 requisições por segundo.

## Relatório JMeter

Também foi realizada uma execução em modo non-GUI para geração do dashboard HTML do Apache JMeter.

A execução registrou:

- 200 requisições
- 0% de erros
- Dashboard HTML gerado com sucesso
- Requests Summary com 100% PASS

Os arquivos relacionados aos testes de performance estão disponíveis em:

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

Após a execução, o dashboard pode ser acessado através do arquivo:

```text
jmeter/report/index.html
```

## Autor

Projeto desenvolvido para demonstração de conhecimentos em automação de testes Web, API, integração contínua e testes de Performance.