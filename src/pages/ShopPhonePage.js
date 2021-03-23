class ShopPhonePage {
    brandDropdown = "//div[text()='Бренд']"
    materialDropdown = "//*[contains(text(),'Материал корпуса')]"
    appleBrand = "//span[text()='Apple']"
    ramDropdown = "//div[text()='Объем оперативной памяти (Гб)']"
    ramSizeFrom = '[name="arrCatalogFilter_750_MIN"]'
    ramSizeTo = '[name="arrCatalogFilter_750_MAX"]'
    metallMaterialCheckbox = "//span[text()='Металл/Стекло']"
    selectedMetalMaterial = "//div[text()='Материал корпуса: Металл/Стекло']"
    yearDropdown = "//div[text()='Год выпуска']"
    year2019Checkbox = "//span[text()='2019']"
    advancedSearch = "//*[contains(text(),'Расширенный фильтр')]"
    showButton = '[name="_form"]'
    firstPhone = '.products__unit:first-child'
    filterMenu = '.header__filters'
    installmentLink = '.condition-title > [href*="installment"]'

    selectBrand(brandName) {
        cy.xpath(this.brandDropdown).click()
        cy.xpath(brandName).trigger('mousemove').click()
        cy.xpath("//div[text()='Бренд: Apple']")
        return this
    }

    clickAdvancedSearch() {
        cy.xpath(this.advancedSearch).click()
        return this
    }
    
    selectMaterial(material, selectedMaterial) {
        cy.xpath(this.materialDropdown).click()
        cy.xpath(material).click()
        cy.xpath(selectedMaterial)
        return this
    }

    fillInRam(ramSizeTo, ramSizeFrom) {
        cy.xpath(this.ramDropdown).click()
        cy.get(this.ramSizeFrom).clear() 
        cy.get(this.ramSizeFrom).type(ramSizeFrom)
        cy.get(this.ramSizeTo).clear() 
        cy.get(this.ramSizeTo).type(ramSizeTo)
        return this
    }

    selectYear(year) {
        cy.xpath(this.yearDropdown).click()
        cy.xpath(year).click()
        return this
    }

    clikInstallmentLink() {
        cy.get(this.installmentLink).invoke('removeAttr', 'target').click()
        return this
    }
}
export default new ShopPhonePage();
