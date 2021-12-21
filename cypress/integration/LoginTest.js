///<reference types = "cypress" />

//import for the PO classes 
import LoginPO from "../pageobjects/LoginPO"
import LeftNevPO from "../pageobjects/LeftNevPO"

//PO classes 
const login = new LoginPO()
const leftNev = new LeftNevPO()

//Data objects 
const loginData = require('../dataobjects/loginData.json')


describe('Create Cases for Login Scenarios', ()=>{

    it('User Can Login Successfully with Valid Credentials', ()=>{

        //Step 1 -  Navigate to URL 
        cy.visit(Cypress.config().baseUrl)

        //Perfrom login 
        login.performLogin(loginData.userName, loginData.password)

        //Validating the Username for success login 
        leftNev.clickOnMenuIconButton()
        leftNev.getUserName(loginData.userNameValue)
    })

})