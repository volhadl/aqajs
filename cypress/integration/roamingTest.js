import RoamingPage from '../../src/pages/roamingPage'
import OpenInternetPage from '../../src/pages/openInternetPage'
import HomePage from '../../src/pages/homePage'
import * as roamingData from '../../testData/roamingData'
import * as openInternetData from '../../testData/openInternetData'

describe("Titles verification for roaming tariffs", ()=>{
    
    // https://app.qase.io/case/CYAQA-47
    // https://app.qase.io/case/CYAQA-48
    before(function() {
        HomePage.openUrl(roamingData.roamingUrl);      })

    it("Verify titles of roaming tariffs", ()=>{        
        cy.url().should('eq', roamingData.roamingUrl)

        cy.get(RoamingPage.tariffOne).should('have.text', roamingData.tariffNameOne)
        cy.get(RoamingPage.tariffTwo).should('have.text', roamingData.tariffNameTwo)
        cy.get(RoamingPage.tariffThree).should('have.text', roamingData.tariffNameThree)
    })

    it("Verify availability of otkrytyy-internet-v-rouminge", ()=>{
        cy.get(RoamingPage.tariffThreeShowButton).click()
        cy.url().should('eq', openInternetData.urlThreeTariff)
        cy.get(OpenInternetPage.title).should('have.text', roamingData.tariffNameThree)
        //cy.get(OpenInternetPage.priceFrom).contains(openInternetData.priceFrom)
        //cy.get(OpenInternetPage.priceTo).contains(openInternetData.priceTo)
    })
})
