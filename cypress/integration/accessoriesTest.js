import HomePage from '../../src/pages/HomePage'
import ShopPhonePage from '../../src/pages/ShopPhonePage'
import AccessoriesPage from '../../src/pages/AccessoriesPage'
import ScreenPage from '../../src/pages/ScreenProtectorPage'
import * as shopData from '../../testData/shopPageData'
import * as screenData from '../../testData/screenProtectorData'

describe("Redirection from Accessories page", ()=>{
    
    it("Verify redirection to screen protector page", ()=>{      
        HomePage.openUrl(shopData.accessoriesUrl)  
        AccessoriesPage.selectAccessory(AccessoriesPage.screenProtectionGlass)
        ShopPhonePage.clickShowButton()
        cy.get(ScreenPage.firstItem).should('contain', screenData.sceenTitle)
    })
})
