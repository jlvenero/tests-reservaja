describe('home', () => {
  it('verificar se existe o botão de criar sala', () => {
    cy.visit('http://localhost:8080/home')
    cy.get(':nth-child(1) > .btn').should('be.visible')
  })

  it('verificar se o modal de criar sala esta abrindo', () => {
    cy.visit('http://localhost:8080/home')
    cy.get(':nth-child(1) > .btn').click()
    cy.get('.box').should('be.visible')
  })

  it('verificar componentes do modal', () => {
    cy.visit('http://localhost:8080/home')
    cy.get(':nth-child(1) > .btn').click()
    cy.get('.box').should('be.visible')
    cy.get('.title-secondary').should('be.visible')
    cy.get('.input').should('be.visible')
    cy.contains('Fechar').should('be.visible')
    cy.contains('Confirmar').should('be.visible')
  })

  it('Criando sala', () => {
    cy.visit('http://localhost:8080/home')
    cy.get(':nth-child(1) > .btn').click()
    cy.get('.input').type('Sala de Teste')
    cy.contains('Confirmar').click()
  })

  it('Verificar se a sala foi criada', () => {
    cy.visit('http://localhost:8080/home')
    cy.get('.card').should('be.visible')
  })

  it('Verificar se a sala foi criada com o nome correto', () => {
    cy.visit('http://localhost:8080/home')
    cy.get('.card').should('be.visible')
    cy.get('.card').contains('Sala de Teste').should('be.visible')
  })

  it('verificar se o modal esta fechando', () => {
    cy.visit('http://localhost:8080/home')
    cy.get(':nth-child(1) > .btn').click()
    cy.get('.box').should('be.visible')
    cy.contains('Fechar').click()
    cy.get('.box').should('not.be.visible')
  })
})