class LoginElements {
  //Função que retorna para a LoginPage.js o seletor do elemento que será utilizado.  
    botaoLogin = () => { return '.header__profile-wrapper > :nth-child(2)' }
  //Seletor do elemento do botão de recuperar senha. Nesse caso utilizamos a class .login__form__forgot-password. 
    botaoRecuperarSenha = () => { return '.login__form__forgot-password' }
  }
  
  //Comando para exportar a LoginElements.js e possibilitar sua importação no arquivo LoginPage.js.
  export default LoginElements;