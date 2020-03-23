import HomePage from '../../src/pages/HomePage'
import ScreenPage from '../../src/pages/ScreenProtectorPage'
import ShopPhonePage from '../../src/pages/ShopPhonePage'
import AccessoriesPage from '../../src/pages/AccessoriesPage'
import * as screenData from '../../testData/screenProtectorData'
import * as shopPhoneData from '../../testData/shopPhoneData'
import * as shopPageData from '../../testData/shopPageData'


describe("Verification of filters for screen protector", ()=>{
    let priceTwoValue = 0
    let priceThreeValue = 0

    beforeEach(function() {
        HomePage.openUrl(shopPageData.accessoriesUrl)  
        AccessoriesPage.selectAccessory(AccessoriesPage.screenProtectionGlass)
        ShopPhonePage.clickShowButton()
    })

    it("Verification of sorting by popularity", ()=>{      
        ScreenPage.sortBy(ScreenPage.sortByPopularity)
        cy.get(ScreenPage.sortingSelected).should('contain', screenData.sortByPopularity)
        cy.url().should('contain', screenData.sortingByPopularityUrl)
        cy.get(ScreenPage.rateOne).should('have.css', 'width', '55px')
    })

    it("Verification of sorting by price in descending order", ()=>{
        ScreenPage.sortBy(ScreenPage.sortByPriceDesc)
        cy.get(ScreenPage.sortingSelected).should('contain', screenData.sortByPriceDesc)
        cy.url().should('contain', screenData.sortingByPriceDescUrl)
        cy.get(ScreenPage.priceTwo).then(($strong) => {
            priceTwoValue = parseFloat($strong.text())
            cy.get(ScreenPage.priceThree).then(($strong) => {
                priceThreeValue = parseFloat($strong.text())
                assert.isAtLeast(priceTwoValue, priceThreeValue)
            })
        })
    })

    it("Verification of sorting by price in ascending order", ()=>{
        ScreenPage.sortBy(ScreenPage.sortByPriceAsc)
        cy.get(ScreenPage.sortingSelected).should('contain', screenData.sortByPriceAsc)
        cy.url().should('contain', screenData.sortingByPriceAscUrl)
        cy.get(ScreenPage.priceTwo).then(($strong) => {
            priceTwoValue = parseFloat($strong.text())
            cy.get(ScreenPage.priceThree).then(($strong) => {
                priceThreeValue = parseFloat($strong.text())
                assert.isAtMost(priceTwoValue, priceThreeValue)
            })
        })
    })

    it("Verification of sorting by color if 'Белый Перламутр' is selected", ()=>{
        ScreenPage.selectColor(ScreenPage.whitePearlColor)
        ShopPhonePage.clickShowButton()
        cy.get(ScreenPage.firstItem).should('contain', screenData.whitePearl)
    })

    it("Verification of sorting by 'Модель вашего устройства' if 'Galaxy A10' is selected", ()=>{
        ScreenPage.selectModel(ScreenPage.galaxyA10Model)
        ShopPhonePage.clickShowButton()
        cy.get(ScreenPage.firstItem).should('contain', screenData.samsungA10Model)
    })

    it("Verification of sorting by 'Производитель вашего устройства' if 'Apple' is selected", ()=>{
        ShopPhonePage.selectBrand(ScreenPage.appleBrand)
        ShopPhonePage.clickShowButton()
        cy.get(ScreenPage.firstItem).should('contain', shopPhoneData.appleBrand)
    })

    it("Verification of sorting by 'Цена'", ()=>{
        ScreenPage.fillInPrice(screenData.priceFrom, screenData.priceTo)
        ShopPhonePage.clickShowButton()
        cy.get(ScreenPage.priceTwo).then(($strong) => {
            priceTwoValue = parseFloat($strong.text())
            assert.isAtMost(priceTwoValue, screenData.priceTo)
        })
    })
})
