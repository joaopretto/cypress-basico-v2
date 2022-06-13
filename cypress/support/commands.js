Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('João');
    cy.get('#lastName').type('Pretto');
    cy.get('#email').type('joao.pretto99@hotmail.com');
    cy.get('#open-text-area').type('Teste');
    cy.contains('Enviar').click();
    cy.get('.success').should('be.visible');
})
