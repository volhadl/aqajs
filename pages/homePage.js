class HomePage {
    searchInput = '[type="search"]'
    title = '#pagetitle'

    openUrl(url) {
        cy.viewport(1920, 1080)
        cy.visit(url)
    }

    performSearch(text) {
        cy.get(this.searchInput).type(text)
        cy.get(this.searchInput).type('{enter}')
    }
}
export default new HomePage();
