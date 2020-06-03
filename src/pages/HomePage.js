class HomePage {
    searchInput = '[type="search"]'
    title = '#pagetitle'
    roaming = '#footer4 > [href="/help/rouming/"]'
    tariffOne = '[href*="/super-10/"] > * > .main-hit__top > *'
    tariffTwo = '[href*="bezlimitishche"] > * > .main-hit__top > *'
    tariffThree = '[href*="super-25"] > * > .main-hit__top > *'
    instagramButton = '[href*="instagram.com"]'
    twitterButton = '[href="https://t.me/by_mts "]'

    openUrl(url) {
        cy.visit(url)
    }

    performSearch(text) {
        cy.get(this.searchInput).type(text)
        cy.get(this.searchInput).type('{enter}')
    }
}
export default new HomePage();
