class RoumingPage {
    tariffFirst = ':nth-child(1) > *> .item__img > *'
    tariffSecond = ':nth-child(2) > *> .item__img > *'
    tariffThird = ':nth-child(3) > *> .item__img > *'

    navigateByUrl(url) {
        cy.viewport(1920, 1080)
        cy.visit(url)
    }
}
export default new RoumingPage();
