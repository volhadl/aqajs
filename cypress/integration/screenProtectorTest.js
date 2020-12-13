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
        ScreenPage.selectType(AccessoriesPage.screenProtectionGlass)
    })

    it("Verification of sorting by color if 'Черный' is selected", ()=>{  
        ScreenPage.selectColor(ScreenPage.blackColor)
        cy.get(ScreenPage.firstItem).should('contain', screenData.blackFrame)
    })

    it("Verification of sorting by 'Модель вашего устройства' if 'iPhone 12 Pro Max Model' is selected", ()=>{
        ScreenPage.selectModel(ScreenPage.iPhone12ProMaxModel)
        cy.get(ScreenPage.firstItem).should('contain', screenData.iPhoneModel)
    })

    it("Verification of sorting by 'Производитель вашего устройства' if 'Apple' is selected", ()=>{
        ScreenPage.selectBrand(ScreenPage.appleBrand)
        cy.get(ScreenPage.firstItem).should('contain', shopPhoneData.iPhoneBrand)
    })

    xit("Verification of sorting by 'Цена'", ()=>{
        ScreenPage.fillInPrice(screenData.priceFrom, screenData.priceTo)
        cy.get(ScreenPage.priceTwo).then(($strong) => {
            priceTwoValue = parseFloat($strong.text())
            assert.isAtMost(priceTwoValue, screenData.priceTo)
        })
    })
})
