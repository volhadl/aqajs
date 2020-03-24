class ShopPhonePage {
    brandDropdown = '#select2-chosen-2'
    appleBrand = '.select2-results > li:nth-child(3)'
    ramSizeFrom = '#arrCatalogFilter_750_MIN'
    ramSizeTo = '#arrCatalogFilter_750_MAX'
    metallMaterialCheckbox = 'label[for*="1086_1914675509"]'
    year2019Checkbox = 'label[for*="1039_3327493404"]'
    advancedSearch = 'div.js-accordeon > a > span'
    showButton = '#set_filter'
    firstPhone = ':nth-child(1) > * > .catalog_tovar_title'

    selectBrand(brandName) {
        cy.get(this.brandDropdown).click()
        cy.get(brandName).trigger('mousemove').click()
        return this
    }

    clickAdvancedSearch() {
        cy.get(this.advancedSearch).click()
        return this
    }
    
    selectMaterial(metallMaterialCheckbox) {
        cy.get(metallMaterialCheckbox).click()
        return this
    }

    fillInRam(ramSizeTo, ramSizeFrom) {
        cy.get(this.ramSizeFrom).clear() 
        cy.get(this.ramSizeFrom).type(ramSizeTo)
        cy.get(this.ramSizeTo).clear() 
        cy.get(this.ramSizeTo).type(ramSizeFrom)
        return this
    }

    selectYear(year) {
        cy.get(year).click()
        return this
    }

    clickShowButton() {
        cy.get(this.showButton).click()
        return this
    }
}
export default new ShopPhonePage();
