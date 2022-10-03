Feature: Criar conta no website My Store

Scenario: Criar nova conta com sucesso
    Given que esteja na home do website
    When eu clico em create account
    And preencho todos os dados do formulário
    And clico no botão registar
    Then o cadastro é realizado com sucesso exibindo a mensagem "Welcome to your account. Here you can manage all of your personal information and orders."
    And exibe o o nome do usuário cadastrado no menu