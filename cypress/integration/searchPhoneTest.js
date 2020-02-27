import HomePage from '../../src/pages/homePage'
import ShopPage from '../../src/pages/shopPhonePage'
import * as shopData from '../../testData/shopPhoneData'

describe("Perform search for iPhone11 2019 16GB metall", ()=>{

    it("Search for iPhone11", ()=>{
        HomePage.openUrl(shopData.shopPhonesUrl)
        ShopPage.clickAdvancedSearch()
                .selectMaterial()
                .selectYear()
                .selectBrand(ShopPage.appleBrand)
                .fillInRam(shopData.ramSizeFrom, shopData.ramSizeTo)
                .clickShowButton()
        cy.get(ShopPage.firstPhone).should('contain', shopData.appleBrand)
    })
})
