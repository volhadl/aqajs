class Homepage {
        shop_tab = '.page-header-links > :nth-child(3) > a';
        tarifs_tab = '.page-header-links > :nth-child(1) > a';
        rouming = '.page-header-submenu > :nth-child(3) > a';
    
        clickOnElement() {
        cy.get(this.tarifs_tab).click();
    }
}
export default new Homepage();