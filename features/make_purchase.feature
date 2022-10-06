Feature: Efetuar compra no website My Store

    Scenario: Efetuar compra com sucesso
        Given que esteja na home do website
        When eu clico em already registered
        And acesso a categoria Women selecionando "Summer Dresses"
        And seleciono o produto a ser comprado "Printed Chiffon Dress"
        Then redireciona para carrinho para finalizar a compra
        And em histórico de compras envio uma mensagem de agradecimento ao fornecedor do produto "I loved the dress"
