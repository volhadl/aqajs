class HomePage {
    searchInput = '[type="search"]'
    title = '#pagetitle'
    roaming = '#footer4 > [href="/help/rouming/"]'
    tariffOne = '[href*="/super-10/"] > * > .main-hit__top > *'
    tariffTwo = '[href*="bezlimitishche"] > * > .main-hit__top > *'
    tariffThree = '[href*="super-25"] > * > .main-hit__top > *'
    instagramButton = '[href*="instagram.com"]'
    twitterButton = '[href="https://t.me/by_mts "]'
    mobileMenu = '[class*="burger-icon"]'
    tariffs = '.menu-mobile__icon>[src*="icon_mobile"]'
    mobileTariffs = '.mobile-submenu>[href="/services/mobile/"]'
    selectMobileTariff = '.mobile-submenu > [href*="/services/mobile/tariffs/"]'


    openUrl(url) {
        cy.visit(url)
    }

    performSearch(text) {
        cy.get(this.searchInput).type(text)
        cy.get(this.searchInput).type('{enter}')
    }

    openMobileService(service) {
        cy.get(this.tariffs).click()
        cy.get(this.mobileTariffs).click()
        cy.get(service).click()
    }
}
export default new HomePage();
