//Comando especial para VS Code. Exibe sugestões de complemento de comandos do Cypress enquanto digitamos.
/// <reference types="Cypress" />

// arquivo com as funções e comandos que executaremos. 
//Deve ter formato .js e ficar dentro de cypress/support/pageobjects.
import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    clicarBotaoPaginaLogin() {
        cy.get(loginElements.botaoLogin()).click()
    }
  
    // Verifica se o botão tem o texto "Esqueceu sua senha?"
    visualizarBotaoRecuperarSenha() {
        //Comando Cypress que seleciona o elemento da página que será utilizado.
        //should Comando Cypress que seleciona o elemento da página que será utilizado.
        cy.get(loginElements.botaoRecuperarSenha()).should('contain', 'Esqueceu sua senha?')
    }
}
//Comando para exportar a LoginPage.js e possibilitar sua importação no arquivo LoginSteps.js.
export default LoginPage;