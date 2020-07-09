import HomePage from '../../src/pages/HomePage'
import ShopPage from '../../src/pages/ShopPage'
import AccessoriesPage from '../../src/pages/AccessoriesPage'
import ShopPhonePage from '../../src/pages/ShopPhonePage'
import * as shopData from '../../testData/shopPageData'
import * as urls from '../../testData/urls'

describe("Verifiy navigation from 'Акссесуары' page", ()=>{
    
    it("'Акссесуары' page is available", ()=>{
        HomePage.openUrl(urls.shopUrl)
        cy.get(ShopPage.accessoriesTab).click()
        cy.get(ShopPage.accessoriesPageTitle).should('contain', shopData.accessoriesPageTitle)
    })

    it("'Защита' page is available", ()=>{
        HomePage.openUrl(urls.accessoriesUrl)
        ShopPhonePage.openFilterMenu()
        AccessoriesPage.selectAccessory(AccessoriesPage.cover)
        AccessoriesPage.selectAccessory(AccessoriesPage.screenProtectionGlass)
        ShopPhonePage.clickShowButton()
        cy.get(ShopPage.coverCheckbox).should('be.checked')
        cy.get(ShopPage.screenProtectorCheckbox).should('be.checked')
    })
})
