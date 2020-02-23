class AccessoriesPage {
    accessoriesType = 'label[for*="4174963110"]'

    selectAccessoriesType() {
        cy.get(this.accessoriesType).click()
        return this
    }
}
export default new AccessoriesPage();
