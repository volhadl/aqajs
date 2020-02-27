import HomePage from '../../src/pages/homePage'
import ScreenPage from '../../src/pages/screenProtectorPage'
import ShopPage from '../../src/pages/shopPhonePage'
import * as screenData from '../../testData/screenProtectorData'
import * as shopData from '../../testData/shopPhoneData'
let priceOneValue = 0
let priceTwoValue = 0


describe("Verification of filters for screen protector", ()=>{

    beforeEach(function() {
        HomePage.openUrl(screenData.screenProtectorUrl)  
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
        cy.get(ScreenPage.priceOne).then(($strong) => {
            priceOneValue = parseFloat($strong.text())
            cy.get(ScreenPage.priceTwo).then(($strong) => {
                priceTwoValue = parseFloat($strong.text())
                assert.isAtLeast(priceOneValue, priceTwoValue)
            })
        })
    })

    it("Verification of sorting by price in ascending order", ()=>{
        ScreenPage.sortBy(ScreenPage.sortByPriceAsc)
        cy.get(ScreenPage.sortingSelected).should('contain', screenData.sortByPriceAsc)
        cy.url().should('contain', screenData.sortingByPriceAscUrl)
        cy.get(ScreenPage.priceOne).then(($strong) => {
            priceOneValue = parseFloat($strong.text())
            cy.get(ScreenPage.priceTwo).then(($strong) => {
                priceTwoValue = parseFloat($strong.text())
                assert.isAtMost(priceOneValue, priceTwoValue)
            })
        })
    })

    it("Verification of sorting by color if 'Белый Перламутр' is selected", ()=>{
        ScreenPage.selectColor(ScreenPage.whitePearlColor)
        ShopPage.clickShowButton()
        cy.get(ScreenPage.firstScreen).should('contain', screenData.whitePearl)
    })

    it("Verification of sorting by 'Модель вашего устройства' if 'Galaxy A10' is selected", ()=>{
        ScreenPage.selectModel(ScreenPage.galaxyA10Model)
        ShopPage.clickShowButton()
        cy.get(ScreenPage.firstScreen).should('contain', screenData.samsungA10Model)
    })

    it("Verification of sorting by 'Производитель вашего устройства' if 'Apple' is selected", ()=>{
        ShopPage.selectBrand(ScreenPage.appleBrand)
        ShopPage.clickShowButton()
        cy.get(ScreenPage.firstScreen).should('contain', shopData.appleBrand)
    })

    it("Verification of sorting by 'Цена'", ()=>{
        ScreenPage.fillInPrice(screenData.priceFrom, screenData.priceTo)
        ShopPage.clickShowButton()
        cy.get(ScreenPage.priceOne).then(($strong) => {
            priceOneValue = parseFloat($strong.text())
            assert.isAtMost(priceOneValue, screenData.priceTo)
        })
    })
})
