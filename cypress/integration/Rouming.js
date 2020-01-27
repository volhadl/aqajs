import Rouming from '../../pages/RoumingPage'
import * as data from '../../test_data/data'

describe(" Should navigate to 'Rouming' page", ()=>{
    
    // https://app.qase.io/case/CYAQA-47
    // https://app.qase.io/case/CYAQA-48
    it("Should verify world-travel tariffs ", ()=>{
        Rouming.navigateByUrl(data.world_wide_url);
        cy.url().should('include', '/roaming/world-travel/')
        
        
        cy.get(data.tarifs[0]).should('have.text', data.tafis_name[0])
        
    })
})