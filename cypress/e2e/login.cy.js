const { it } = require("mocha")

describe('Login', () => {
  it('Verificar se os botões estão lugar', () => {
    cy.visit('http://localhost:8080/')
    cy.get('[type="email"]').should('be.visible')
    cy.get('[type="password"]').should('be.visible')
    cy.get('.btn').should('be.visible')
  })

  it('Tentando logar sem preencher o email', () => {
    cy.visit('http://localhost:8080/')
    cy.get('[type="password"]').type('123456')
    cy.get('.btn').should('have.css', 'cursor', 'not-allowed')
  })

  it('Tentando logar sem preencher a senha', () => {
    cy.visit('http://localhost:8080/')
    cy.get('[type="email"]').type('lucasmvenero@gmail.com')
    cy.get('.btn').should('have.css', 'cursor', 'not-allowed')
})

it('Tentando logar com email e senha errados', () => {
    cy.visit('http://localhost:8080/')
    cy.get('[type="email"]').type('teste.cypress')
    cy.get('[type="password"]').type('senhaerrada')
    cy.get('.btn').click()
  })

  it('Tentando logar com email e senha corretos', () => {
    cy.visit('http://localhost:8080/')
    cy.get('[type="email"]').type('teste.cypress')
    cy.get('[type="password"]').type('123456')
    cy.get('.btn').click()
  })
})
