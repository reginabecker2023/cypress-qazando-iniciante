Samuel Lucax Cupress + Cucumber
https://www.youtube.com/watch?v=mfZfhp6Ql8c
Não funciona Github
https://github.com/samlucax/calculator-cucumber-cypress

## Funciona o Cucumber
https://medium.com/cwi-software/testes-automatizados-com-cypress-e-cucumber-d78b211da766

II) Tendo acessado a pasta do projeto, execute o comando de instalação:

npm install --save-dev cypress cypress-cucumber-preprocessor

Configuração do Cypress:
Adicione o trecho abaixo no arquivo de plugins:

cypress/plugins/index.js

const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}

Adicione o suporte a arquivos de feature em sua configuração do Cypress:
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    "viewportWidth": 1366,
    "viewportHeight": 768,
    "defaultCommandTimeout": 10000,
    "baseUrl": "https://cwi.com.br/",
    specPattern: 'cypress/e2e/**/*.feature',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },    
  },
})

Configuração:
Por favor, faça uso de cosmiconfig para criar uma configuração para o plugin, por exemplo, adicionando a seção abaixo ao seu package.json:

{
    "scripts": {
        "test:chrome": "cypress run --browser chrome --no-exit"
    },
    "cypress-cucumber-preprocessor": {
        "step_definitions": "cypress/support/steps"
    }
}

Essa configução se tornara padrão futuramente.

Como organizar os testes
Arquivos de feature independentes
Adicione seu arquivo de feature na pasta cypress/integration Exemplo: cypress/integration/Calculadora.feature

  Feature: Login site CWI

    Como usuario, desejo acessar o site da cwi
    Para que possa conferir a home page

 Scenario: Visualizar opção de recuperar senha esquecida
        Given acesso o site CWI
        When acesso a pagina de login
        Then devo visualizar botao de recuperar senha esquecida
Neste caso, vamos substituir pelos termos em inglês: Given, When, Then, And

Arquivos de feature "empacotados"
Definição dos passos (step definitions)
Formato RECOMENDADO

Criando os passos

Os arquivos de feature irão utilizar os passos definidos nos arquivos que estiverem em uma pasta com o mesmo nome do arquivo de feature. Os arquivos js dentro dessa pasta podem ter qualquer outro nome, caso queira quebrar ou organizar com mais formas.

Apenas para ilustrar: Google.feature -> Google/Google.steps.js

Cuke Step Definition Generator badeball/cypress-cucumber-preprocessor#370

# Botão direito nos steps > Generate step defs > Copy to clipboard
Given("acesso o site CWI", () => {   
})

When("acesso a pagina de login", () => {
})

Then("devo visualizar botao de recuperar senha esquecida", () => {
})


#  Ou via de comando
cucumber Login.feature

#  Abrir o Cypress
npx cypress open

# Executar o teste. Após ter salvo todos os arquivos, execute pelo terminal do próprio VS Code o comando abaixo que configuramos no arquivo package.json:
    npm run test:chrome

Ou assim:
    cypress run --browser chrome --no-exit

# Relatório com mochawasome
https://github.com/LironEr/cypress-mochawesome-reporter

## Setup install cypress-mochawesome-reporter
npm i --save-dev cypress-mochawesome-reporter

## Change cypress reporter & setup hooks cypress.config.js

## Add to cypress/support/e2e.js
import 'cypress-mochawesome-reporter/register';

## Run Cypress
npx cypress run
 
 npx cypress run --record --key d71f987b-98c4-418d-a1e8-422d847c94ad


## Repositório no Git
git init
git remote add origin git@github.com:reginabecker2023/cypress-qazando-iniciante.git
Criar o arquivo .gitignore
git status
git add .
git commit -m "first commit"
git branch -M main
git push -u origin main



