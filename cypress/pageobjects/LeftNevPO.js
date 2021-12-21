/// <reference types = "cypress" />

//locators
const menuIconButton = "ion-buttons"
const userName = ".profile-wrapper > h1"
class LeftNevPO
{
    clickOnMenuIconButton(){
        cy.get(menuIconButton).click()
    }

    getUserName(userNameValue){
      cy.get(userName).should('have.text', userNameValue)
    }
}

export default LeftNevPO