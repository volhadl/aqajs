import HomePage from '../../src/pages/homePage'
import ShopPhonePage from '../../src/pages/shopPhonePage'
import AccessoriesPage from '../../src/pages/accessoriesPage'
import ScreenPage from '../../src/pages/screenProtectorPage'
import * as shopData from '../../testData/shopPageData'
import * as screenData from '../../testData/screenProtectorData'

describe("Verification of redirection from Accessories page", ()=>{
    
    it("Verify redirection to screen protector page", ()=>{      
        HomePage.openUrl(shopData.accessoriesUrl)  
        AccessoriesPage.selectAccessoriesType()
        ShopPhonePage.clickShowButton()
        cy.get(ScreenPage.firstScreen).should('contain', screenData.sceenTitle)
    })
})
