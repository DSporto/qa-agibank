const apiUrl = Cypress.expose('dogApiUrl')

describe('Dog API', () => {

  it('deve retornar a lista de raças com sucesso', () => {
    cy.request('GET', `${apiUrl}/breeds/list/all`)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.status).to.eq('success')
        expect(response.body.message).to.be.an('object')
      })
  })

  it('deve retornar as imagens da raça labrador', () => {
    cy.request('GET', `${apiUrl}/breed/labrador/images`)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.status).to.eq('success')
        expect(response.body.message).to.be.an('array')
        expect(response.body.message).to.not.be.empty
      })
  })

  it('deve retornar uma imagem aleatória com sucesso', () => {
    cy.request('GET', `${apiUrl}/breeds/image/random`)
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.status).to.eq('success')
        expect(response.body.message).to.be.a('string')
        expect(response.body.message).to.include('https://images.dog.ceo/')
      })
  })

  it('deve retornar erro ao buscar uma raça inexistente', () => {
    cy.request({
      method: 'GET',
      url: `${apiUrl}/breed/raca-inexistente/images`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body.status).to.eq('error')
      expect(response.body.message).to.exist
    })
  })

})

