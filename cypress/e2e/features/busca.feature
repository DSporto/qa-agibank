Feature: Consulta de produtos no site do Agi Bank

  Como usuário do site do Agi Bank
  Quero consultar os produtos disponíveis
  Para conhecer as opções oferecidas pelo banco

  Scenario: Consultar opções de empréstimo
    Given que acesso o site do Agi Bank
    When seleciono a opção "Empréstimos"
    Then devo visualizar as opções de empréstimos disponíveis

  Scenario: Consultar opções de cartões
    Given que acesso o site do Agi Bank
    When seleciono a opção "Cartões"
    Then devo visualizar as opções de cartões disponíveis