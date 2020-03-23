class AccessoriesPage {
    screenProtectionGlass = 'label[for*="4174963110"]'
    cover = 'label[for*="2675092570"]'

    selectAccessory(accessoryName) {
        cy.get(accessoryName).click()
        return this
    }
}
export default new AccessoriesPage();
