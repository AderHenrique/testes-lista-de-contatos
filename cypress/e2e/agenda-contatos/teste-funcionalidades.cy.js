/// <reference types="cypress"/>

describe('Testes de inclusão, alteração e remoção de contato',() => {
  beforeEach(() =>{
    cy.visit('https://agenda-contatos-react.vercel.app/;')
  })

  it('Deve preencher e cadastrar o contato', () => {
    cy.get('[type="text"]').type('Ader contato Teste')
    cy.get('[type="email"]').type('aderteste@gmail.com')
    cy.get('[type="tel"]').type('61 1234567789')
    cy.get('.adicionar').click()
  }) 

  it('Deve alterar e salvar contato', () =>{
    cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()
    cy.get('[type="text"]').clear().type('Ader Henrique')
    cy.get('[type="email"]').clear().type('adercontas@gmail.com')
    cy.get('[type="tel"]').clear().type('61 998501954')
    cy.get('.alterar').click()
  })

  it('Deve remover o contato criado', () => {
    cy.get(':nth-child(4) > .sc-gueYoa > .delete').click()
  })
})