import RoamingPage from '../../src/pages/RoamingPage'
import OpenInternetPage from '../../src/pages/OpenInternetPage'
import OneGbPage from '../../src/pages/OneGbPage'
import HomePage from '../../src/pages/HomePage'
import * as roamingData from '../../testData/roamingData'
import * as openInternetData from '../../testData/openInternetData'
import * as oneGbData from '../../testData/oneGbvRoamingeData'
import * as urls from '../../testData/urls'

describe("Titles verification for roaming tariffs", ()=>{
    
    beforeEach(function() {
        HomePage.openUrl(urls.internetRoumingUrl);
    })
    
    it("Verify titles of roaming tariffs", ()=>{        
        cy.get(RoamingPage.tariffOne).should('have.text', roamingData.tariffNameOne)
        cy.get(RoamingPage.tariffTwo).should('have.text', roamingData.tariffNameTwo)
        cy.get(RoamingPage.tariffThree).should('have.text', roamingData.tariffNameThree)
    })
    
    it("'Otkrytyy-internet-v-rouminge' page is available", ()=>{
        cy.get(RoamingPage.tariffThree).click()
        cy.url().should('eq', urls.urlThreeTariff)
        cy.get(OpenInternetPage.title).should('have.text', roamingData.tariffNameThree)
        cy.get(OpenInternetPage.priceFrom).should('contain', openInternetData.priceFrom)
        cy.get(OpenInternetPage.priceTo).should('contain', openInternetData.priceTo)
    })
    
    it("'1GB-v-rouminge' page is available", ()=>{
        cy.get(RoamingPage.tariffOne).click()
        cy.url().should('eq', urls.urlOneTariff)
        cy.get(OneGbPage.title).should('have.text', roamingData.tariffNameOne)
        cy.get(OneGbPage.price).should('contain', oneGbData.price)
    })
})
