import RoamingPage from '../../src/pages/roamingPage'
import HomePage from '../../src/pages/homePage'
import * as roamingData from '../../testData/roamingData'

describe("Titles verification for roaming tariffs", ()=>{
    
    // https://app.qase.io/case/CYAQA-47
    // https://app.qase.io/case/CYAQA-48
    it("Verify titles of roaming tariffs", ()=>{
        HomePage.openUrl(roamingData.roamingUrl);
        cy.url().should('eq', roamingData.roamingUrl)
        
        cy.get(RoamingPage.tariffOne).should('have.text', roamingData.tariffNameOne)
        cy.get(RoamingPage.tariffTwo).should('have.text', roamingData.tariffNameTwo)
        cy.get(RoamingPage.tariffThree).should('have.text', roamingData.tariffNameThree)
    })
})
