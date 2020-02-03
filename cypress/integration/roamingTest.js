import RoumingPage from '../../pages/RoamingPage'
import * as data from '../../test_data/roaming_data'

describe(" Should verify tariffs in 'Rouming' page", ()=>{
    
    // https://app.qase.io/case/CYAQA-47
    // https://app.qase.io/case/CYAQA-48
    it("Should verify world-travel tariffs ", ()=>{
        RoumingPage.navigateByUrl(data.roamingUrl);
        cy.url().should('include', '/roaming/world-travel/')
        
        cy.get(RoumingPage.tariffFirst).should('have.text', data.tariffFirstName)
        cy.get(RoumingPage.tariffSecond).should('have.text', data.tariffSecondName)
        cy.get(RoumingPage.tariffThird).should('have.text', data.tariffThirdName)
    })
})
