import HomePage from '../../src/pages/HomePage'
import * as homeData from '../../testData/homeData'
import * as urls from '../../testData/urls'

describe("HomePage tests", ()=>{

    beforeEach(function() {
        HomePage.openUrl(urls.homeUrl);
    })

    it('"Roaming" page is available',()=>{
        cy.get(HomePage.roaming).click()
        cy.url().should('eq', urls.roamingWorldUrl)
    })

    it('"Instagram" page is available',()=>{
        cy.get(HomePage.instagramButton).should('have.attr', 'href', urls.instagramUrl)
    })

    it('"twitter" page is available',()=>{
        cy.get(HomePage.twitterButton).should('have.attr', 'href', urls.twitterUrl)
    })

    it('News options are available', ()=>{
        cy.get(HomePage.optionOne).should('have.text', homeData.newsOptionOne)
        cy.get(HomePage.optionTwo).should('have.text', homeData.newsOptionTwo)
    })
})
