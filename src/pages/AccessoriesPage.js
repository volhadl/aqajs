class AccessoriesPage {
    cover = '#bx_1847241719_ > *> * > [href="/zashchita"]'
    screenProtectionGlass = "//*[contains(text(),'Защитное')]"

    selectAccessory(accessory) {
        cy.get(accessory).click({ force: true })
        return this
    }
}
export default new AccessoriesPage();
