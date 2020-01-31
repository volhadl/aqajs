import HomePage from '../../src/pages/HomePage'
import * as homeData from '../../testData/homeData'
import * as roamingData from '../../testData/roamingData'

describe("HomePage tests", ()=>{

    it('"Roaming" page is available',()=>{
        HomePage.openUrl(homeData.homeUrl)
        cy.get(HomePage.roaming).click()
        cy.url().should('eq', roamingData.roamingUrl)
    })

    it('"Twitter" page is available',()=>{
        HomePage.openUrl(homeData.homeUrl)
        cy.get(HomePage.instagramButton).should('have.attr', 'href', homeData.instagramUrl)
    })

    it('"twitter" page is available',()=>{
        HomePage.openUrl(homeData.homeUrl)
        cy.get(HomePage.twitterButton).should('have.attr', 'href', homeData.twitterUrl)
    })

    it('"Bestseller" section is available', ()=>{
        HomePage.openUrl(homeData.homeUrl)
        cy.get(HomePage.tariffOne).should('have.text', homeData.tariffNameOne)
        cy.get(HomePage.tariffTwo).should('have.text', homeData.tariffNameTwo)
        cy.get(HomePage.tariffThree).should('have.text', homeData.tariffNameThree)
    })
})
