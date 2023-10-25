import HomePage from '../../src/pages/HomePage'
import ShopPhonePage from '../../src/pages/ShopPhonePage'
import * as shopPhoneData from '../../testData/shopPhoneData'
import * as homeData from '../../testData/homeData'
import * as urls from '../../testData/urls'

describe("Perform search for iPhone", ()=>{

    it("Search for iPhone12", ()=>{
        HomePage.openUrl(urls.homeUrl)
        cy.get(HomePage.searchIcon).click()
        HomePage.performSearch(homeData.iPhone11)
        cy.get(HomePage.title).should('have.text', homeData.title)
    })

    it("Search for iPhone11 2019 16GB metal", ()=>{
        HomePage.openUrl(urls.shopPhonesUrl)
        ShopPhonePage.clickAdvancedSearch()
                .selectMaterial(ShopPhonePage.metallMaterialCheckbox, ShopPhonePage.selectedMetalMaterial)
                .selectYear(ShopPhonePage.year2019Checkbox)
                .selectBrand(ShopPhonePage.appleBrand)
                .fillInRam(shopPhoneData.ramSizeFrom, shopPhoneData.ramSizeTo)
        cy.get(ShopPhonePage.firstPhone).should('contain', shopPhoneData.iPhoneBrand)
    })
})
