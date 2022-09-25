class AccessoriesPage {
    protection = '#bx_1847241719_ > * > *> *> * > [href="/accessories/protection"]'
    screenProtectionGlass = "//*[contains(text(),'Защитное')]"
    accessoryType = "//div[contains(text(),'Тип аксессуара')]"
    screenType = "//span[contains(text(),'Защитное стекло')]"
    protectorsTitle = "//span[contains(text(),'Защитные аксессуары')]"

    selectAccessory(accessory) {
        cy.get(accessory).click({ force: true })
        return this
    }

    selectType(typeName) {
        cy.xpath(this.accessoryType).click()
        cy.xpath(typeName).click()
        return this
    }
}
export default new AccessoriesPage();
