class AccessoriesPage {
    cover = '#bx_1847241719_ > * > *> *> * > [href="/accessories/protection"]'
    screenProtectionGlass = "//*[contains(text(),'Защитное')]"
    accessoryType = "//div[contains(text(),'Тип аксессуара')]"
    screenType = "//span[contains(text(),'Защитное стекло')]"


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
