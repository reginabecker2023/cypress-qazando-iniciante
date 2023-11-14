//Configuração para importar globalmente os passos que escrevemos nos arquivos .feature.
/* global Given, Then, When */

//Comando para importar o arquivo LoginPage.js 
import LoginPage from '../pageobjects/LoginPage'
//Cria uma constante para que utilizemos as funções que serão criadas no arquivo LoginPage.js.
const loginPage = new LoginPage

//Função que associa o nosso passo escrito em Gherkin com a função que deve executar.
Given("acesso o site CWI", () => {   
    loginPage.acessarSite();
})

//Função com nossos comandos que será criada dentro do arquivo LoginPage.js.
When("acesso a pagina de login", () => {
    loginPage.clicarBotaoPaginaLogin();
})

//Passo que escrevemos em Gherkin no arquivo Login.feature. Deve ser exatamente igual ao que foi digitado.
Then("devo visualizar botao de recuperar senha esquecida", () => {
    loginPage.visualizarBotaoRecuperarSenha();
})