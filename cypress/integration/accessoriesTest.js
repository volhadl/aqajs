import HomePage from '../../src/pages/HomePage'
import ShopPhonePage from '../../src/pages/ShopPhonePage'
import AccessoriesPage from '../../src/pages/AccessoriesPage'
import ScreenPage from '../../src/pages/ScreenProtectorPage'
import * as screenData from '../../testData/screenProtectorData'
import * as urls from '../../testData/urls'

describe("Redirection from Accessories page", ()=>{
    
    it("Verify redirection to screen protector page", ()=>{      
        HomePage.openUrl(urls.accessoriesUrl)  
        AccessoriesPage.selectAccessory(AccessoriesPage.screenProtectionGlass)
        ShopPhonePage.clickShowButton()
        cy.get(ScreenPage.firstItem).should('contain', screenData.sceenTitle)
    })
})
