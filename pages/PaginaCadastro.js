
class PaginaCadastro{
   
    go() {
        cy.visit('/')
     
       
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
    }

    fillForm(entregador) {
        cy.get('input[placeholder="Nome completo"]').type(entregador.nome)
        cy.get('input[name="cpf"]').type(entregador.cpf)
        cy.get('input[name="email"]').type(entregador.email)
        cy.get('input[name="whatsapp"]').type(entregador.wpp)
 
 
        cy.get('input[name="postalcode"]').type(entregador.endereço.cep)
        cy.get('input[type="button"]').click()
        cy.get('input[name="address-number"]').type(entregador.endereço.numero)
        cy.get('input[name="address-details"]').type(entregador.endereço.complemento)
 
        cy.get('input[name="address"]').should('have.value', entregador.endereço.rua)
        cy.get('input[name="district"]').should('have.value', entregador.endereço.bairro)
        cy.get('input[name="city-uf"]').should('have.value', entregador.endereço.cidade)
 
        cy.contains('.delivery-method li', entregador.metodo_entrega).click()

 
        cy.get('input[type="file"]').attachFile('/images/' + entregador.cnh)

    }
    
    fillFormInvlidDelivery(entregador) {
      cy.get('input[placeholder="Nome completo"]').type(entregador.nome)
      cy.get('input[name="cpf"]').type(entregador.cpf)
      cy.get('input[name="email"]').type(entregador.email)
      cy.get('input[name="whatsapp"]').type(entregador.wpp)


      cy.get('input[name="postalcode"]').type(entregador.endereço.cep)
      cy.get('input[type="button"]').click()
      cy.get('input[name="address-number"]').type(entregador.endereço.numero)
      cy.get('input[name="address-details"]').type(entregador.endereço.complemento)

      cy.get('input[name="address"]').should('have.value', entregador.endereço.rua)
      cy.get('input[name="district"]').should('have.value', entregador.endereço.bairro)
      cy.get('input[name="city-uf"]').should('have.value', entregador.endereço.cidade)

      cy.contains('.delivery-method li', entregador.metodo_entrega).click()
      cy.contains('.delivery-method li', entregador.metodo_entrega2).click()
      

      cy.get('input[type="file"]').attachFile('/images/' + entregador.cnh)

  } 
  fillFormIvalidCnh(entregador) {
    cy.get('input[placeholder="Nome completo"]').type(entregador.nome)
    cy.get('input[name="cpf"]').type(entregador.cpf)
    cy.get('input[name="email"]').type(entregador.email)
    cy.get('input[name="whatsapp"]').type(entregador.wpp)


    cy.get('input[name="postalcode"]').type(entregador.endereço.cep)
    cy.get('input[type="button"]').click()
    cy.get('input[name="address-number"]').type(entregador.endereço.numero)
    cy.get('input[name="address-details"]').type(entregador.endereço.complemento)

    cy.get('input[name="address"]').should('have.value', entregador.endereço.rua)
    cy.get('input[name="district"]').should('have.value', entregador.endereço.bairro)
    cy.get('input[name="city-uf"]').should('have.value', entregador.endereço.cidade)

    cy.contains('.delivery-method li', entregador.metodo_entrega).click()




}


    submit(){

        cy.get('button[type="submit"]').click()

    }

  aMensagemDeveSer(expectedMessege){
    cy.get('div[class="swal2-html-container"]').should('have.text', expectedMessege)


  }

mensagemDeAlerta(expectedMessege){

   // cy.get('span[class="alert-error"]').should('have.text', expectedMessege)
    cy.contains('span[class="alert-error"]', expectedMessege).should('be.visible')

}



}
export default new PaginaCadastro;