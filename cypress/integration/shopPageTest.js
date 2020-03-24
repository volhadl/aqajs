import HomePage from '../../src/pages/HomePage'
import ShopPage from '../../src/pages/ShopPage'
import AccessoriesPage from '../../src/pages/AccessoriesPage'
import ShopPhonePage from '../../src/pages/ShopPhonePage'
import * as shopData from '../../testData/shopPageData'

describe("Verifiy navigation from 'Акссесуары' page", ()=>{
    
    it("Verification of 'Акссесуары' page availability", ()=>{
        HomePage.openUrl(shopData.shopUrl)
        cy.get(ShopPage.accessoriesTab).click()
        cy.get(ShopPage.accessoriesPageTitle).should('contain', shopData.accessoriesPageTitle)
    })

    it("Verification of 'Защита' page availability", ()=>{
        HomePage.openUrl(shopData.accessoriesUrl)
        AccessoriesPage.selectAccessory(AccessoriesPage.cover)
        AccessoriesPage.selectAccessory(AccessoriesPage.screenProtectionGlass)
        ShopPhonePage.clickShowButton()
        cy.get(ShopPage.coverCheckbox).should('be.checked')
        cy.get(ShopPage.screenProtectorCheckbox).should('be.checked')
    })
})