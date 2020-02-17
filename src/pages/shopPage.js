class ShopPage {
    brandList = '[name*="arrCatalogFilter_994"]'
    brandDropdown = '#select2-chosen-2'
    appleBrand = '#select2-result-label-29 > *'
    ramSizeFrom = '#arrCatalogFilter_750_MIN'
    ramSizeTo = '#arrCatalogFilter_750_MAX'
    materialCheckbox = 'label[for*="1086_1914675509"]'
    yearCheckbox = 'label[for*="1039_3327493404"]'
    advancedSearch = 'div.js-accordeon > a > span'
    showButton = '#set_filter'
    firstPhone = ':nth-child(1) > * > .catalog_tovar_title'

    selectBrand() {
        // cy.get(this.brandDropdown).click()
        // cy.get(this.brandList, {visible: true})
        // .select('191298858').should('have.value', '191298858')
        cy.get(this.brandDropdown).click()
        cy.get('.select2-results > li:nth-child(3)').trigger('mousemove').click()

    }


    clickAdvancedSearch() {
        cy.get(this.advancedSearch).click()
    }
    
    selectMaterial() {
        cy.get(this.materialCheckbox).click()
    }

    fillInRam(ramSize) {
        cy.get(this.ramSizeFrom).clear() 
        cy.get(this.ramSizeFrom).type(ramSize)
        cy.get(this.ramSizeTo).clear() 
        cy.get(this.ramSizeTo).type(ramSize)
    }

    selectYear() {
        cy.get(this.yearCheckbox).click()
    }

    clickShow() {
        cy.get(this.showButton).click()
    }
}
export default new ShopPage();