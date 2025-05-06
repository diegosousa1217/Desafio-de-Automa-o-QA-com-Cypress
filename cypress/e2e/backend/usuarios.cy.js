
describe('Usuários API', () => {
    it('Listar usuários', () => {
      cy.request('GET', 'https://serverest.dev/usuarios').then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.quantidade).to.be.greaterThan(0)
      })
    })
  
    it('Cadastrar novo usuário', () => {
      cy.request('POST', 'https://serverest.dev/usuarios', {
        nome: 'QA Backend',
        email: `qa.backend+${Date.now()}@email.com`,
        password: 'teste123',
        administrador: 'true'
      }).then((res) => {
        expect(res.status).to.eq(201)
        expect(res.body.message).to.eq('Cadastro realizado com sucesso')
      })
    })
  
    it('Cadastrar e deletar usuário fixo', () => {
      const usuario = {
        nome: 'diego sousa',
        email: 'diego.sousa@qa.com.br',
        password: 'teste',
        administrador: 'true'
      }
  
      cy.request('POST', 'https://serverest.dev/usuarios', usuario).then((res) => {
        expect(res.status).to.eq(201)
        expect(res.body.message).to.eq('Cadastro realizado com sucesso')
        const id = res.body._id
  
        cy.request({
          method: 'DELETE',
          url: `https://serverest.dev/usuarios/${id}`
        }).then((res) => {
          expect(res.status).to.eq(200)
          expect(res.body.message).to.eq('Registro excluído com sucesso')
        })
      })
    })
  })
  