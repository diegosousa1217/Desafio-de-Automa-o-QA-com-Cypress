describe('Login EBAC Store', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('diegosousa.adv@hotmail.com')
    cy.get('#password').type('t123Abc@@@')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(2)').should('contain', 'Login')
  })

  it('Deve exibir erro com credenciais inválidas', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('invalido@teste.com')
    cy.get('#password').type('senhaerrada')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
  })
})
