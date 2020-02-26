import HomePage from '../../src/pages/homePage'
import * as homeData from '../../testData/homeData'

describe("Perform search for iPhone11", ()=>{
    
    it("Search for iPhone11", ()=>{
        HomePage.openUrl(homeData.homeUrl)
        HomePage.performSearch(homeData.iPhone11)
        cy.get(HomePage.title).should('have.text', homeData.title)
    })
})
