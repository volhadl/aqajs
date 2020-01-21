class Homepage {
    constructor() {
        const shop_tab = '.page-header-links > :nth-child(3) > a';
        const tarifs_tab = '.page-header-links > :nth-child(1) > a';
        const rouming = '.page-header-submenu > :nth-child(3) > a';
    }


    click_on_element(tarifs_tab) {
        cy.get(tarifs_tab).click()
        return new Homepage()}
}
export default new Homepage();