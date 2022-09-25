class AccessoriesPage {
    protection = '#bx_1847241719_ > * > *> *> * > [href="/accessories/protection"]'
    screenProtectionType = "//span[contains(text(),'Защитное стекло')]"
    accessoryType = "//div[contains(text(),'Тип аксессуара')]"
    protectorsTitle = "//span[contains(text(),'Защитные аксессуары')]"

    selectAccessory(accessory) {
        cy.get(accessory).click({ force: true })
        return this
    }
}
export default new AccessoriesPage();
