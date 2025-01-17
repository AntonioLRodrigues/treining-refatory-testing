describe('Cadastro para entrega - burguerEats', () => {
  beforeEach(() => {
    cy.visitBurgerEats()
  })

  it('preenche os campos obrigatórios e envia o formulário com método de entrega: moto', () => {
    cy.preenchendoFormulárioeEnvio('Alex Poatan Pereira', '98765412386', 'AlexPoatanPereira@gmail.com', '11990000', '99', 'Moto', null, 'cypress/fixtures/images.jpeg')
  });

  it('preenche os campos obrigatórios e envia o formulário com método de entrega: Bicicleta', () => {
    cy.preenchendoFormulárioeEnvio('Connor Macgragor', '98765412386', 'ConnorMacgragor.com', '11990000', '450', 'Bicicleta', null, 'cypress/fixtures/images.jpeg')
  });

  it('preenche os campos obrigatórios e envia o formulário com método de entrega: Van/Carro', () => {
    cy.preenchendoFormulárioeEnvio('Charles do Bronks', '98765412386', 'CharlesdoBronks@gmail.com', '11990000', '488', 'Van/Carro', null, 'cypress/fixtures/images.jpeg')
  });

  it('exibe mensagem de erro ao submeter o formulário com dois métodos de pagamentos', () => {
    cy.preenchendoFormulárioeEnvio('jiri prochazka', '98765412386', 'jiriprochazka@gmail.com', '11990000', '56', 'Van/Carro', 'Moto', 'cypress/fixtures/images.jpeg')
  });

  it('exibe mensagem de erro ao submeter o formulário com um CPF com formatação inválida', () => {
    cy.preenchendoFormulárioeEnvio('jiri prochazka', '987.654.123.86', 'jiriprochazka@gmail.com', '11990000', '56', 'Van/Carro', null, 'cypress/fixtures/images.jpeg')
  });

  it('exibe mensagem de erro ao submeter o formulário com um CEP com formatação inválida', () => {
    cy.preenchendoFormulárioeEnvio('jiri prochazka', '95425874156', 'jiriprochazka@gmail.com', '119900009999', '50', 'Van/Carro', null, 'cypress/fixtures/images.jpeg')
  });


  it('exibe mensagem de erro ao submeter o formulário com o número do endereço vazio', () => {
    cy.preenchendoFormulárioeEnvio('jiri prochazka', '95425874156', 'jiriprochazka@gmail.com', '119900009999', '', 'Van/Carro', null,  'cypress/fixtures/images.jpeg')
  });
  it('exibe mensagem de erro ao submeter o formulário sem o método de entrega', () => {
    cy.preenchendoFormulárioeEnvio('jiri prochazka', '95425874156', 'jiriprochazka@gmail.com', '11990000', '21', null, null, 'cypress/fixtures/images.jpeg')
  })

  it('exibe mensagem de erro ao submeter o formulário sem a imagem da CNH', () => {
    cy.preenchendoFormulárioeEnvio('jiri prochazka', '95425874156', 'jiriprochazka@gmail.com', '11990000', '2345', 'Bicicleta', null, null)
  })
})
