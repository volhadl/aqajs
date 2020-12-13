class HomePage {
    searchInput = 'input[placeholder="Поиск"]'
    title = '#pagetitle'
    roaming = '.promo-links__list > [href="/services/roaming/world-travel/"]'
    optionOne = '.news-ads__item:first-child > .page-block__header> *'
    optionTwo = '.news-ads__item:nth-child(3)> .page-block__header> *'
    tariffOne = '#bx_651765591_39333 > * > * > .main-hit__top > *'
    tariffTwo = '#bx_651765591_39320 > * > * > .main-hit__top > *'
    tariffsSection = 'div > div.main-hit > div'
    tariffThree = '#bx_651765591_39327 > * > * > * > h2'
    instagramButton = '[href*="instagram.com"]'
    twitterButton = '[href*="twitter"]'
    searchIcon = 'div.page-header-search__btn > div'

    openUrl(url) {
        cy.visit(url)
    }

    performSearch(text) {
        cy.get(this.searchInput).type(text)
        cy.get(this.searchInput).type('{enter}')
    }
}
export default new HomePage();
