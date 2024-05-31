const { it } = require("mocha")

describe('Se registrar', () => {
  it('Verificar se o botão de registro existe', () => {
    cy.visit('http://localhost:8080/')
    cy.get('.texto-cadastro').should('be.visible')
    cy.contains('Cadastra-se já!').should('be.visible')
  })

    it('Verificar se os campos estão no lugar', () => {
        cy.visit('http://localhost:8080/')
        cy.contains('Cadastra-se já!').click()
        cy.get('[type="email"]').should('be.visible')
        cy.get('[placeholder="Digite seu nome"]').should('be.visible')
        cy.get('[type="password"]').should('be.visible')
        cy.get('.btn').should('be.visible')
    })

    it('Tentando registrar sem preencher o nome', () => {
        cy.visit('http://localhost:8080/')
        cy.contains('Cadastra-se já!').click()
        cy.get('[type="email"]').type('lucasmvenero@gmail.com')
        cy.get('[type="password"]').type('123456')
        cy.get('.btn').should('have.css', 'cursor', 'not-allowed')
    })

    it('Tentando registrar sem preencher o email', () => {
        cy.visit('http://localhost:8080/')
        cy.contains('Cadastra-se já!').click()
        cy.get('[placeholder="Digite seu nome"]').type('Lucas')
        cy.get('[type="password"]').type('123456')
        cy.get('.btn').should('have.css', 'cursor', 'not-allowed')
    })

    it('Tentando registrar sem preencher a senha', () => {
        cy.visit('http://localhost:8080/')
        cy.contains('Cadastra-se já!').click()
        cy.get('[type="email"]').type('lucasmvenero@gmail.com')
        cy.get('[placeholder="Digite seu nome"]').type('Lucas')
        cy.get('.btn').should('have.css', 'cursor', 'not-allowed')
    })

    


})
