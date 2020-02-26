class ScreenProtectorPage {
    firstItem = ':first-child > *> .catalog_tovar_title'
    sortingSelected = "#select2-chosen-8"
    sortByPopularity = "#select2-result-label-10"
    sortByPriceDesc = "#select2-result-label-12"
    sortByPriceAsc = "#select2-result-label-11"
    priceThree = ":nth-child(3) > * >.catalog_tovar_cost"
    priceTwo = ":nth-child(2) > * >.catalog_tovar_cost"
    rateOne = ":first-child > * > * > * >* > * > .vote-active"
    colorDropdown = "#select2-chosen-6"
    whitePearlColor = "#select2-result-label-13"
    galaxyA10Model = "#select2-result-label-14"
    modelDropdown = "#select2-chosen-4"
    appleBrand = ".select2-results > li:nth-child(2)"
    priceFromFiled = '[name*="arrCatalogFilter_207_MIN"]'
    priceToFiled = '[name*="arrCatalogFilter_207_MAX"]'

    sortBy(property) {
        cy.get(this.sortingSelected).click()
        cy.get(property).trigger('mousemove').click()
        return this
    }

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
}
export default new ScreenProtectorPage();
