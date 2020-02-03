import HomePage from '../../pages/HomePage'
import * as data from '../../test_data/home_data'

describe("Should find iPhome11", ()=>{
    
    it("Should search for iPhone11 and verify title", ()=>{
       HomePage.navigateByUrl(data.homeUrl)
       HomePage.typeText(data.text)
       cy.get(HomePage.title).should('have.text', data.title)
    })
})
