import HomePage from '../../src/pages/HomePage'
import ShopPhonePage from '../../src/pages/desktop/ShopPhonePage'
import InstallmentPage from '../../src/pages/desktop/InstallmentPage'
import * as installmentData from '../../testData/installmentPageData'
import * as urls from '../../testData/urlsDesktop'

describe("Redirection from 'Shop phone' page", () => {

    it("Verify redirection to installment page", () => {
        cy.viewport(1280, 1280)
        HomePage.openUrl(urls.shopPhonesUrl)
        cy.get(ShopPhonePage.firstPhone).click()
        ShopPhonePage.clikInstallmentLink()
        cy.get(InstallmentPage.pageTitle).should('contain', installmentData.pageTitle)
    })
})
