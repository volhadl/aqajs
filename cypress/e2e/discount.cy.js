import HomePage from '../../src/pages/HomePage'
import DiscountPage from '../../src/pages/DiscountPage'
import * as urls from '../../testData/urls'

describe("Verification of the discount sum", () => {

    it('Verify sum of the discount', () => {
        let prices = [];
        let selectors = [DiscountPage.oneColumn, DiscountPage.twoColumn, DiscountPage.threeColumn];

        HomePage.openUrl(urls.salesUrl)
        cy.getSumArray(selectors, prices)
        cy.then(() => {
            cy.log(prices[2], prices[1], prices[0])
            expect(prices[2]).to.equal(prices[1] - prices[0])
        })
    })
})
