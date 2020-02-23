import HomePage from '../../src/pages/homePage'
import ShopPhonePage from '../../src/pages/shopPhonePage'
import AccessoriesPage from '../../src/pages/accessoriesPage'
import ScreenProtectorPage from '../../src/pages/screenProtectorPage'
import * as homeData from '../../testData/homeData'
import * as screenData from '../../testData/screenProtectorData'

describe("Verification of filters for screen protector", ()=>{
    
    it("Verify redirection to screen protector page", ()=>{      
        HomePage.openUrl(homeData.accessoriesUrl)  
        AccessoriesPage.selectAccessoriesType()
        ShopPhonePage.clickShowButton()
        cy.get(ScreenProtectorPage.firstScreen).should('contain', screenData.sceenTitle)
    })
})
