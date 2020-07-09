class HomePage {
    searchInput = 'input.menu-mobile-top-search__input'
    title = '#pagetitle'
    roaming = '#footer4 > [href="/help/rouming/"]'
    tariffOne = '#bx_651765591_39333 > * > * > .main-hit__top > *'
    tariffTwo = '#bx_651765591_39320 > * > * > .main-hit__top > *'
    tariffsSection = 'div > div.main-hit > div'
    tariffThree = '#bx_651765591_39327 > * > * > * > h2'
    instagramButton = '[href*="instagram.com"]'
    twitterButton = '[href="https://t.me/by_mts "]'
    mobileMenu = '[class*="burger-icon"]'

    openUrl(url) {
        cy.visit(url)
    }

    performSearch(text) {
        cy.get(this.searchInput).type(text)
        cy.get(this.searchInput).type('{enter}')
    }
}
export default new HomePage();
