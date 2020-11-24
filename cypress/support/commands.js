Cypress.Commands.add('getSumArray', (selectors, resultArray) => { 
    selectors.forEach(element => cy.get(element).then(($row) => {
        let priceResultValue = 0
        $row.each((index, el) => {
            cy.wrap(el).invoke('text').then(text => {
                priceResultValue += parseFloat(text);
            })
        })
        cy.then(() => {
            resultArray.push(priceResultValue)
        })
    }))
});