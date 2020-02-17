import HomePage from '../../src/pages/homePage'
import ShopPage from '../../src/pages/shopPage'
import * as shopData from '../../testData/shopData'

describe("Perform search for iPhone11 2019 16GB metall", ()=>{
    
    it("Search for iPhone11", ()=>{
        HomePage.openUrl(shopData.shopPhonesUrl)
        ShopPage.selectBrand()
        ShopPage.clickAdvancedSearch()
        ShopPage.selectMaterial()
        ShopPage.fillInRam(shopData.ramSize)
        ShopPage.selectYear()
        ShopPage.clickShow()
        cy.get(ShopPage.firstPhone).should('contain', shopData.phoneTitle)
    })
})
