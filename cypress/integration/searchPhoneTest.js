import HomePage from '../../src/pages/HomePage'
import ShopPhonePage from '../../src/pages/ShopPhonePage'
import * as shopPhoneData from '../../testData/shopPhoneData'
import * as homeData from '../../testData/homeData'

describe("Perform search for iPhone11", ()=>{

    it("Search for iPhone11", ()=>{
        HomePage.openUrl(homeData.homeUrl)
        HomePage.performSearch(homeData.iPhone11)
        cy.get(HomePage.title).should('have.text', homeData.title)
    })

    it("Search for iPhone11 2019 16GB metal", ()=>{
        HomePage.openUrl(shopPhoneData.shopPhonesUrl)
        ShopPhonePage.clickAdvancedSearch()
                .selectMaterial(ShopPhonePage.metallMaterialCheckbox)
                .selectYear(ShopPhonePage.year2019Checkbox)
                .selectBrand(ShopPhonePage.appleBrand)
                .fillInRam(shopPhoneData.ramSizeFrom, shopPhoneData.ramSizeTo)
                .clickShowButton()
        cy.get(ShopPhonePage.firstPhone).should('contain', shopPhoneData.appleBrand)
    })
})
