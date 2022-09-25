/// <reference types = "cypress"/>

import HomePage from '../../src/pages/HomePage'
import ScreenPage from '../../src/pages/ScreenProtectorPage'
import AccessoriesPage from '../../src/pages/AccessoriesPage'
import * as screenData from '../../testData/screenProtectorData'
import * as shopPhoneData from '../../testData/shopPhoneData'
import * as urls from '../../testData/urls'
import ScreenProtectorPage from '../../src/pages/ScreenProtectorPage'

describe("Verification of filters for screen protector", ()=>{
    let priceTwoValue = 0
    
    beforeEach(function() {
        HomePage.openUrl(urls.accessoriesUrl)  
        ScreenPage.selectType(AccessoriesPage.screenProtectionType)
        cy.contains(screenData.found).should('be.visible')
    })

    it("Verify screen protector page selection", ()=>{      
        cy.get(ScreenPage.firstItem).should('contain', screenData.sceenTitle)
    })

    it("Verification of sorting by color if 'Черный' is selected", ()=>{  
        ScreenPage.selectColor(ScreenPage.blackColor)
        cy.get(ScreenProtectorPage.allProducts).should('contain', screenData.blackFrame)
    })

    xit("Verification of sorting by 'Модель вашего устройства' if 'iPhone 12 Pro Max Model' is selected", ()=>{
        // today there is no way to select a model
        ScreenPage.selectModel(ScreenPage.iPhone12ProMaxModel)
        cy.get(ScreenPage.firstItem).should('contain', screenData.iPhoneModel)
    })

    xit("Verification of sorting by 'Производитель вашего устройства' if 'Apple' is selected", ()=>{
        // today there is no way to select a model
        ScreenPage.selectBrand(ScreenPage.appleBrand)
        cy.get(ScreenPage.firstItem).should('contain', shopPhoneData.iPhoneBrand)
    })

    xit("Verification of sorting by 'Цена'", ()=>{
        // there is a bug on ui. filtering by price returns nothing or not screens
        ScreenPage.fillInPrice(screenData.priceFrom, screenData.priceTo)
        cy.get(ScreenPage.priceTwo).then(($strong) => {
            priceTwoValue = parseFloat($strong.text())
            assert.isAtMost(priceTwoValue, screenData.priceTo)
        })
    })
})
