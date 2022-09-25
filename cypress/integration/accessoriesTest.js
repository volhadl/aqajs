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
})
