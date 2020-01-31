class RoumingPage {
    search = '[type="search"]'

    navigateByUrl(url) {
        cy.viewport(1920, 1080)
        cy.visit(url)
    }
}
export default new RoumingPage();
