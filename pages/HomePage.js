class RoumingPage {
    search = '[type="search"]'
    title = '#pagetitle'

    navigateByUrl(url) {
        cy.viewport(1920, 1080)
        cy.visit(url)
    }

    typeText(textValue) {
        cy.get(this.search).type(textValue)
        cy.get(this.search).type('{enter}')
    }
}
export default new RoumingPage();
