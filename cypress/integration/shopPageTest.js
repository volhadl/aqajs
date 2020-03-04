import HomePage from '../../src/pages/homePage'
import ShopPage from '../../src/pages/shopPage'
import * as shopData from '../../testData/shopPageData'

describe("Verifiy navigation from 'Акссесуары' page", ()=>{
    
    it("Verification of 'Акссесуары' page availability", ()=>{
        HomePage.openUrl(shopData.shopUrl)
        cy.get(ShopPage.accessoriesTab).click()
        cy.get(ShopPage.accessoriesPageTitle).should('contain', shopData.accessoriesPageTitle)
    })

    it("Verification of 'Защита' page availability", ()=>{
        HomePage.openUrl(shopData.protectorssUrl)
        cy.get(ShopPage.coverCheckbox).should('be.checked')
        cy.get(ShopPage.screenProtectorCheckbox).should('be.checked')
    })
})
