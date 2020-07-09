class ShopPhonePage {
    brandDropdown = '#select2-chosen-10'
    appleBrand = '#select2-result-label-20'
    ramSizeFrom = '#arrCatalogFilter_750_MIN'
    ramSizeTo = '#arrCatalogFilter_750_MAX'
    metallMaterialCheckbox = 'label[for*="1086_1914675509"]'
    year2019Checkbox = 'label[for*="1039_3327493404"]'
    advancedSearch = 'div.js-accordeon > a > span'
    showButton = '.btn_send'
    firstPhone = '.phone-cat-i:first-child > *> a'
    filterMenu = '.button-filt-lnk'

    openFilterMenu() {
        cy.get(this.filterMenu).click()
        return this
    }

    selectBrand(brandName) {
        cy.get(this.brandDropdown).click()
        cy.get(brandName).trigger('mousemove').click()
        return this
    }

    clickAdvancedSearch() {
        cy.get(this.advancedSearch).click()
        return this
    }
    
    selectMaterial(material) {
        cy.get(material).click()
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
