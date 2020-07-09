class ScreenProtectorPage {
    firstItem = '.phone-cat-i:first-child > *> a'
    sortingSelected = "#select2-chosen-8"    
    priceThree = ":nth-child(3) > * >.catalog_tovar_cost"
    priceTwo = ".phone-cat-i:nth-child(2) > *> * > .pay-box"
    rateOne = ":first-child > * > * > * >* > * > .vote-active"
    colorDropdown = "#select2-chosen-12"
    whitePearlColor = "#select2-result-label-16"
    galaxyA10Model = "#select2-result-label-20"
    modelDropdown = "#select2-chosen-10"
    brandDropdown = '#s2id_autogen7'
    appleBrand = "#select2-result-label-14"
    priceFromFiled = '[name*="arrCatalogFilter_207_MIN"]'
    priceToFiled = '[name*="arrCatalogFilter_207_MAX"]'

    selectColor(color) {
        cy.get(this.colorDropdown).click()
        cy.get(color).trigger('mousemove').click()
        return this
    }

    selectModel(modelName) {
        cy.get(this.modelDropdown).click()
        cy.get(modelName).trigger('mousemove').click()
        return this
    }

    fillInPrice(priceFrom, priceTo) {
        cy.get(this.priceFromFiled).clear() 
        cy.get(this.priceFromFiled).type(priceFrom)
        cy.get(this.priceToFiled).clear() 
        cy.get(this.priceToFiled).type(priceTo)
        return this
    }

    selectBrand(brandName) {
        cy.get(this.brandDropdown).click()
        cy.get(brandName).trigger('mousemove').click()
        return this
    }
}
export default new ScreenProtectorPage();
