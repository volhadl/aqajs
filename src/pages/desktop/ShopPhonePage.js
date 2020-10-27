class ShopPhonePage {
    firstPhone = '.catalog_tovar:first-child > * > * >span'
    installmentLink = '.condition-title > [href*="installment"]'

    clikInstallmentLink() {
        cy.get(this.installmentLink).invoke('removeAttr', 'target').click()
        return this
    }
}
export default new ShopPhonePage();
