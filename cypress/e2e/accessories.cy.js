import HomePage from '../../src/pages/HomePage'
import AccessoriesPage from '../../src/pages/AccessoriesPage'
import * as urls from '../../testData/urls'
import * as accessories from '../../testData/accessoriesData'

describe("Navigation on Accessories page", ()=>{
    
    it("Verify redirect to protection page", ()=>{      
        HomePage.openUrl(urls.accessoriesUrl)  
        AccessoriesPage.selectAccessory(AccessoriesPage.protection)
        cy.get(AccessoriesPage.protectorsTitle).should('contain', accessories.protectorPageTitle)
    })

    it("Verify redirect to screen protector page", ()=>{      
        HomePage.openUrl(urls.accessoriesUrl)  
        AccessoriesPage.selectAccessory(AccessoriesPage.protection)
        AccessoriesPage.selectType(AccessoriesPage.screenType)
        cy.get(ScreenPage.firstItem).should('contain', screenData.sceenTitle)
    })
})
