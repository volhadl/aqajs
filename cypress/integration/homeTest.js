import HomePage from '../../src/pages/HomePage'
import * as homeData from '../../testData/homeData'
import * as urls from '../../testData/urls'

describe("HomePage tests", ()=>{

    beforeEach(function() {
        HomePage.openUrl(urls.homeUrl);
    })

    it('"Roaming" page is available',()=>{
        cy.get(HomePage.roaming).click()
        cy.url().should('eq', urls.roamingUrl)
    })

    it('"Twitter" page is available',()=>{
        cy.get(HomePage.instagramButton).should('have.attr', 'href', urls.instagramUrl)
    })

    it('"twitter" page is available',()=>{
        cy.get(HomePage.twitterButton).should('have.attr', 'href', urls.twitterUrl)
    })

    it('"Bestseller" section is available', ()=>{
        cy.get(HomePage.tariffOne).should('have.text', homeData.tariffNameOne)
        cy.get(HomePage.tariffTwo).should('have.text', homeData.tariffNameTwo)
        cy.get(HomePage.tariffsSection).trigger('mousemove', 'right')
        cy.get(HomePage.tariffThree).should('have.text', homeData.tariffNameThree)
    })
})
