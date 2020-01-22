class Rouming {
    world_wide_url = 'https://www.mts.by/services/roaming/world-travel/'

    
    navigateByUrl() {
        cy.visit(this.world_wide_url)
        cy.url().should('include', '/roaming/world-travel/')
    }

    elmentContent() {
        cy.get(':nth-child(1) > *> .item__img > *').contains('1 ГБ за границей')
        cy.get(':nth-child(2) > *> .item__img > *').contains('Безлимитный интернет в роуминге')
        cy.get(':nth-child(3) > *> .item__img > *').contains('Открытый интернет в роуминге')
    }


}
export default new Rouming();