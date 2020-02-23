import RoamingPage from '../../src/pages/roamingPage'
import OpenInternetPage from '../../src/pages/openInternetPage'
import OneGbPage from '../../src/pages/oneGbPage'
import HomePage from '../../src/pages/homePage'
import * as roamingData from '../../testData/roamingData'
import * as openInternetData from '../../testData/openInternetData'
import * as oneGbData from '../../testData/oneGbvRoamingeData'

describe("Titles verification for roaming tariffs", ()=>{
    
    beforeEach(function() {
        HomePage.openUrl(roamingData.roamingUrl);
    })
    
    it("Verify titles of roaming tariffs", ()=>{        
        cy.get(RoamingPage.tariffOne).should('have.text', roamingData.tariffNameOne)
        cy.get(RoamingPage.tariffTwo).should('have.text', roamingData.tariffNameTwo)
        cy.get(RoamingPage.tariffThree).should('have.text', roamingData.tariffNameThree)
    })
    
    it("Verify availability of otkrytyy-internet-v-rouminge page", ()=>{
        cy.get(RoamingPage.tariffThreeShowButton).click()
        cy.url().should('eq', openInternetData.urlThreeTariff)
        cy.get(OpenInternetPage.title).should('have.text', roamingData.tariffNameThree)
        cy.get(OpenInternetPage.priceFrom).should('contain', openInternetData.priceFrom)
        cy.get(OpenInternetPage.priceTo).should('contain', openInternetData.priceTo)
    })
    
    it("Verify availability of 1GB-v-rouminge page", ()=>{
        cy.get(RoamingPage.tariffOneShowButton).click()
        cy.url().should('eq', oneGbData.urlOneTariff)
        cy.get(OneGbPage.title).should('have.text', roamingData.tariffNameOne)
        cy.get(OneGbPage.price).should('contain', oneGbData.price)
    })
})
