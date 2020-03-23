import HomePage from '../../src/pages/HomePage'
import * as homeData from '../../testData/homeData'
import * as roamingData from '../../testData/roamingData'

describe("Perform tests by homepage", ()=>{

    it('"Roaming" page availability',()=>{
        HomePage.openUrl(homeData.homeUrl)
        cy.get(HomePage.roaming).click()
        cy.url().should('eq', roamingData.roamingUrl)
    })

    it('"instagram" page availability',()=>{
        HomePage.openUrl(homeData.homeUrl)
        cy.get(HomePage.instagramButton).should('have.attr', 'href', homeData.instagramUrl)
    })

    it('"twitter" page availability',()=>{
        HomePage.openUrl(homeData.homeUrl)
        cy.get(HomePage.twitterButton).should('have.attr', 'href', homeData.twitterUrl)
    })

    it('Verification of "Bestseller" section availability', ()=>{
        HomePage.openUrl(homeData.homeUrl)
        cy.get(HomePage.tariffOne).should('have.text', homeData.tariffNameOne)
        cy.get(HomePage.tariffTwo).should('have.text', homeData.tariffNameTwo)
        cy.get(HomePage.tariffThree).should('have.text', homeData.tariffNameThree)
    })
})
