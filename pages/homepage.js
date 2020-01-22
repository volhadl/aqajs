class Homepage {
        shop_tab = '.page-header-links > :nth-child(3) > a';
        tarifs_tab = '.page-header-links > :nth-child(1) > a';
        rouming = '#footer4 > :nth-child(3)';
    
        clickOnElement() {
            cy.get(this.rouming).click();
            cy.url().should('include', '/rouming/')
    }
}
export default new Homepage();