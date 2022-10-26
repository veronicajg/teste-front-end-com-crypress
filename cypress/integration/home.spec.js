// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

describe('Acessando site VR e Localizar onde usar meu cartão VR', () => {       //descrição do teste

    it('acessar VR Benefícios - Onde aceita VR ', () => {
      cy.visit('https://www.vr.com.br/onde-aceita.htm')       //visitando a página VR Beneficios.
      
      cy.contains('Pra Você')       //consultando um elemento para asserção padrão.
      cy.get('#lum_4028808471FC1D5D0171FE80340D6AC8_closePrivacyTerm').click()        //aceitando o termo de privacidade.
      cy.contains('Onde usar meu cartão VR?').click()       //clicando no botão Onde usar meu cartão VR em forma de encadeamento.
      cy.get('[class^="vr-section vr-section-map"]').should('be.visible')       //validando o mapa na tela.
     
     
    })
    
  }) 


      
      
  
       








