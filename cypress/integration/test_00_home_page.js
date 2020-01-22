import Rouming from '../../pages/roumingpage'
import * as data from '../../test_data/data'

describe(" Should navigate to 'Roumig' page", ()=>{
    
    // https://app.qase.io/case/CYAQA-47
    // https://app.qase.io/case/CYAQA-48
    it("Should verify world-travel tariffs ", ()=>{
        cy.viewport(1920, 1080)
        Rouming.navigateByUrl();
        Rouming.elmentContent();
    })
})