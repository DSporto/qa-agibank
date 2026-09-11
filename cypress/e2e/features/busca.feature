Feature: Pesquisa de artigos no Blog do Agi

  Como usuário do site do Agi Bank
  Quero pesquisar produtos
  Para encontrar as opções de produtos

  Scenario: Pesquisar por empréstimo consignado
    Given que acesso o site do Agi
    When pesquiso por "Empréstimo consignado"
    Then devo visualizar resultados relacionados a "Empréstimo consignado"

  Scenario: Pesquisar por cartões
    Given que acesso o site do Agi
    When pesquiso por "cartões"
    Then devo visualizar resultados relacionados a "cartões"