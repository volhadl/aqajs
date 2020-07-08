import HomePage from '../../src/pages/HomePage'
import * as urls from '../../testData/urls'

describe("Redirect test", ()=>{
    

    it("Verify URL after redirect", ()=>{  
        HomePage.openUrl(urls.homeUrl);
        cy.get(HomePage.mobileMenu).click()
        HomePage.openMobileService(HomePage.selectMobileTariff)
        cy.request('https://www.a1.by')

    })
})

