import HomePage from '../../src/pages/HomePage'
import ShopPage from '../../src/pages/ShopPage'
import AccessoriesPage from '../../src/pages/AccessoriesPage'
import * as shopData from '../../testData/shopPageData'
import * as urls from '../../testData/urls'

describe("Verifiy navigation from 'Акссесуары' page", ()=>{
    
    it("'Акссесуары' page is available", ()=>{
        HomePage.openUrl(urls.shopUrl)
        AccessoriesPage.selectAccessory(ShopPage.screenProtectorTab)
        cy.get(ShopPage.accessoriesPageTitle).should('contain', shopData.accessoriesPageTitle)
    })

    it("'Защита' page is available", ()=>{
        HomePage.openUrl(urls.accessoriesUrl)
        AccessoriesPage.selectAccessory(AccessoriesPage.cover)
        cy.get(ShopPage.coverCheckbox).should('be.checked')
        cy.get(ShopPage.screenProtectorCheckbox).should('be.checked')
    })
})
