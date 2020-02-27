class ScreenProtectorPage {
    firstScreen = ':first-child > *> .catalog_tovar_title'
    sortingSelected = "#select2-chosen-8"
    sortByPopularity = "#select2-result-label-10"
    sortByPriceDesc = "#select2-result-label-12"
    sortByPriceAsc = "#select2-result-label-11"

    sortBy(property) {
        cy.get(this.sortingSelected).click()
        cy.get(property).trigger('mousemove').click()
        return this
    }
}
export default new ScreenProtectorPage();
