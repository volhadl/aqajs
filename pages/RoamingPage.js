class RoumingPage {
    tariffFirst = ':nth-child(1) > *> .item__img > *'
    tariffSecond = ':nth-child(2) > *> .item__img > *'
    tariffThird = ':nth-child(3) > *> .item__img > *'

    navigateByUrl(url) {
        cy.viewport(1920, 1080)
        cy.visit(url)
    }

    checkTariffsName(tariffFirstName, tariffSecondName, tariffThirdName) {
        cy.get('.row.items > * > .item__img > *').should(($divs) => {
            expect($divs.eq(0)).to.contain(tariffFirstName)
            expect($divs.eq(1)).to.contain(tariffSecondName)
            expect($divs.eq(2)).to.contain(tariffThirdName)
        })
    }
}
export default new RoumingPage();
