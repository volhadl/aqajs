class RoumingPage {

    navigateByUrl(url) {
        cy.viewport(1920, 1080)
        cy.visit(url)
    }

    elmentContent(array_with_selectors) {
        for (let i in array_with_selectors)
        {
            cy.get(i)
            cy.get(i)
            cy.get(i)
        }
    }
}
export default new RoumingPage();