import HomePage from '../../src/pages/HomePage'
import ScreenPage from '../../src/pages/ScreenProtectorPage'
import ShopPhonePage from '../../src/pages/ShopPhonePage'
import AccessoriesPage from '../../src/pages/AccessoriesPage'
import * as screenData from '../../testData/screenProtectorData'
import * as shopPhoneData from '../../testData/shopPhoneData'
import * as urls from '../../testData/urls'

describe("Verification of filters for screen protector", ()=>{
    let priceTwoValue = 0

    beforeEach(function() {
        HomePage.openUrl(urls.accessoriesUrl)  
        ShopPhonePage.openFilterMenu()
        AccessoriesPage.selectAccessory(AccessoriesPage.screenProtectionGlass)
        ShopPhonePage.clickShowButton()
    })

    it("Verification of sorting by color if 'Белый Перламутр' is selected", ()=>{  
        ShopPhonePage.openFilterMenu()      
        ScreenPage.selectColor(ScreenPage.whitePearlColor)
        ShopPhonePage.clickShowButton()
        cy.get(ScreenPage.firstItem).should('contain', screenData.whitePearl)
    })

    it("Verification of sorting by 'Модель вашего устройства' if 'Galaxy A10' is selected", ()=>{
        ShopPhonePage.openFilterMenu()
        ScreenPage.selectModel(ScreenPage.galaxyA10Model)
        ShopPhonePage.clickShowButton()
        cy.get(ScreenPage.firstItem).should('contain', screenData.samsungA10Model)
    })

    it("Verification of sorting by 'Производитель вашего устройства' if 'Apple' is selected", ()=>{
        ShopPhonePage.openFilterMenu()
        ScreenPage.selectBrand(ScreenPage.appleBrand)
        ShopPhonePage.clickShowButton()
        cy.get(ScreenPage.firstItem).should('contain', shopPhoneData.iPhoneBrand)
    })

    it("Verification of sorting by 'Цена'", ()=>{
        ShopPhonePage.openFilterMenu()
        ScreenPage.fillInPrice(screenData.priceFrom, screenData.priceTo)
        ShopPhonePage.clickShowButton()
        cy.get(ScreenPage.priceTwo).then(($strong) => {
            priceTwoValue = parseFloat($strong.text())
            assert.isAtMost(priceTwoValue, screenData.priceTo)
        })
    })
})
