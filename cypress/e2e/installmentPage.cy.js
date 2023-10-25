import HomePage from '../../src/pages/HomePage'
import ShopPhonePage from '../../src/pages/ShopPhonePage'
import InstallmentPage from '../../src/pages/InstallmentPage'
import * as installmentData from '../../testData/installmentPageData'
import * as urls from '../../testData/urlsDesktop'

describe("Redirection from 'Shop phone' page", () => {

    xit("Verify redirection to installment page", () => {
        HomePage.openUrl(urls.shopPhonesUrl)
        cy.get(ShopPhonePage.firstPhone).click()
        ShopPhonePage.clikInstallmentLink()
        cy.get(InstallmentPage.pageTitle).should('contain', installmentData.pageTitle)
    })
})
