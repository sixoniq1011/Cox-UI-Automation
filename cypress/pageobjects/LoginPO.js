/// <reference types = "cypress" />

//Locators of the Login Page 
const emailTextBox =  "#email"
const passwordTextBox = "#password"
const loginButton = ".btn-block"

class LoginPO 
{

    /**
     * Enter Username and Password and Click on Login button 
     * @param {*} emailValue username  
     * @param {*} passwordValue password
     */
    performLogin(emailValue, passwordValue){
        cy.get(emailTextBox).type(emailValue)
        cy.get(passwordTextBox).type(passwordValue)
        cy.get(loginButton).click()
    }


}

export default LoginPO
