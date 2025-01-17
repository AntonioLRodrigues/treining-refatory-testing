Cypress.Commands.add('visitBurgerEats', () => {
    cy.visit('https://buger-eats.vercel.app/deliver')
    cy.title('Buger Eats')
})

Cypress.Commands.add('preenchendoFormulárioeEnvio', (nome, cpf, email, cep, numeroEndereço, veiculo1 = null, veiculo2 = null, cnh = null) => {
    cy.get('input[name="name"]').type('nome')
    .should('have.value', 'nome');

    cy.get('input[name="cpf"]').type('cpf')
      .should('have.value', 'cpf');

    cy.get('input[name="email"]').type('email')
      .should('have.value', 'email');

    cy.get('input[name="postalcode"]').type('cep')
      .should('have.value', 'cep');
        cy.get('input[value="Buscar CEP"]').click();

    cy.get('input[name="address-number"]').type('numeroEndereço')
      .should('have.value', 'numeroEndereço');

      if (typeof veiculo1 === 'string' && veiculo1.trim() !== '') {
        cy.get(`img[alt="${veiculo1}"]`).click();
      }
    
      if (typeof veiculo2 === 'string' && veiculo2.trim() !== '') {
        cy.get(`img[alt="${veiculo2}"]`).click();
      }

    if (cnh){
        cy.get('input[type="file"]').selectFile(cnh, { force: true }, {timeout: 4000});
    }
        
    cy.contains('button', 'Cadastre-se para fazer entregas').click();

    cy.contains('a', 'Voltar para home').click()

    cy.contains('h1', 'Seja um parceiro entregador pela Buger Eats').should('be.visible')
  });
