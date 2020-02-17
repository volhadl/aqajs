import HomePage from '../../src/pages/homePage'
import ShopPage from '../../src/pages/shopPage'
import * as shopData from '../../testData/shopData'

describe("Perform search for iPhone11 2019 16GB metall", ()=>{
    
    it("Search for iPhone11", ()=>{
        HomePage.openUrl(shopData.shopPhonesUrl)
        ShopPage.clickAdvancedSearch()
                .selectMaterial(ShopPage.metallMaterialCheckbox)
        ShopPage.selectYear(ShopPage.year2019Checkbox)
        ShopPage.selectBrand(ShopPage.appleBrand)
                .fillInRam(shopData.ramSize4GB, shopData.ramSize4GB)
                .clickShow()
        cy.get(ShopPage.firstPhone).should('contain', shopData.phoneTitle)
    })
})
