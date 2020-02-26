import RoamingPage from '../../src/pages/roamingPage'
import HomePage from '../../src/pages/homePage'
import * as roamingData from '../../testData/roamingData'
import * as openInternetData from '../../testData/openInternetData'

describe("Titles verification for roaming tariffs", ()=>{
    
    before(function() {
        HomePage.openUrl(roamingData.roamingUrl);
    })

    it("Verify titles of roaming tariffs", ()=>{        
        cy.get(RoamingPage.tariffOne).should('have.text', roamingData.tariffNameOne)
        cy.get(RoamingPage.tariffTwo).should('have.text', roamingData.tariffNameTwo)
        cy.get(RoamingPage.tariffThree).should('have.text', roamingData.tariffNameThree)
    })

    it("Verify availability of otkrytyy-internet-v-rouminge", ()=>{
        cy.get(RoamingPage.tariffThreeShowButton).click()
        cy.url().should('eq', openInternetData.urlThreeTariff)
        cy.get(OpenInternetPage.title).should('have.text', roamingData.tariffNameThree)
        cy.get(OpenInternetPage.priceFrom).should('contain', openInternetData.priceFrom)
        cy.get(OpenInternetPage.priceTo).should('contain', openInternetData.priceTo)
    })
})
