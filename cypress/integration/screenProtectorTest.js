var chai = require('chai');  
var assert = chai.assert
import HomePage from '../../src/pages/homePage'
import ScreenPage from '../../src/pages/screenProtectorPage'
import * as screenData from '../../testData/screenProtectorData'

describe("Verification of filters for screen protector", ()=>{
    
    beforeEach(function() {
        HomePage.openUrl(screenData.screenProtectorUrl)  
    })

    

    it("Verification of sorting by price in ascending order", ()=>{
        ScreenPage.sortBy(ScreenPage.sortByPriceAsc)
        cy.get(ScreenPage.sortingSelected).should('contain', screenData.sortByPriceAsc)
        cy.url().should('contain', screenData.sortingByPriceAscUrl)
        cy.get(":first-child > * >.catalog_tovar_cost").then(($strong) => {
            const num1 = parseFloat($strong.text())
            cy.log(num1)
            cy.get(":nth-child(2) > * >.catalog_tovar_cost").then(($strong) => {
                const num2 = parseFloat($strong.text())
                cy.log(num2)
                assert.isAtMost(num1, num2, '${num1} is less than or equal to ${num2}')
            })
        })
    })

    it("Verification of sorting by popularity", ()=>{      
        ScreenPage.sortBy(ScreenPage.sortByPopularity)
        cy.get(ScreenPage.sortingSelected).should('contain', screenData.sortByPopularity)
        cy.url().should('contain', screenData.sortingByPopularityUrl)
    })

    it("Verification of sorting by price in descending order", ()=>{
        ScreenPage.sortBy(ScreenPage.sortByPriceDesc)
        cy.get(ScreenPage.sortingSelected).should('contain', screenData.sortByPriceDesc)
        cy.url().should('contain', screenData.sortingByPriceDescUrl)
    })
})
