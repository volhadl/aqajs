import Homepage from'../../pages/homepage'
const date = require('../../test_data/data').homepage_date;

describe(" Should navigate to 'Roumig' page", ()=>{

    it("Navigte to Roumingpage", ()=>{
        
        cy.viewport(1920, 1080)
        cy.visit(date.homepage)

        Homepage.click_on_element();

        
    })
    /*it("Navigte to Homepage", ()=>{
        let width = 1920;
        let height = 1080;
        cy.viewport(width, height)
        cy.visit(date.homepage)
        cy.get(homepage.shop_tab).should('be.visible').click()
    })*/
})