describe('Cadastro de usuário', () => {
    it('Deve cadastrar um novo usuário com sucesso', () => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  
      const email = `novo_usuario_${Date.now()}@email.com`
      const senha = 'Teste@123'
  
      cy.get('#reg_email').type(email)
      cy.get('#reg_password').type(senha)
  
      cy.get(':nth-child(4) > .button').click()
  
      cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá')
    })

    it('Deve solicitar redefinição de senha com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/lost-password/')
    
        cy.get('#user_login').type('cliente@ebac.com.br')
        cy.get('.woocommerce-Button').click()
    
        cy.get('.woocommerce-message').should(
          'contain',
          'O e-mail de redefinição de senha foi enviado.'
        )
      })
  })