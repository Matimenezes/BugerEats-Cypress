import cadastro from '../pages/PaginaCadastro'
import cadastroFactory from '../factories/cadastroFactory'
import PaginaCadastro from '../pages/PaginaCadastro'


describe('Cadastro', () => {


    it('Realizar o cadastro na aplicação com sucesso', () => {

        var entregador = cadastroFactory.entregador()

        cadastro.go()
        cadastro.fillForm(entregador)
        cadastro.submit()
        const expectedMessege = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        cadastro.aMensagemDeveSer(expectedMessege)


    })


    it('Cadastro invalido ao inserir um CPF incorreto', () => {

        var entregador = cadastroFactory.entregador()

        entregador.cpf = '000000555aa'

        cadastro.go()
        cadastro.fillForm(entregador)
        cadastro.submit()
        cadastro.mensagemDeAlerta('Oops! CPF inválido')


    })


  

  it('Cadastro invalido ao selecionar dois metodos de entrega', () => {

    var entregador = cadastroFactory.entregador()

    cadastro.go()
    cadastro.fillFormInvlidDelivery(entregador)
    cadastro.submit()
    cadastro.mensagemDeAlerta('Oops! Selecione apenas um método de entrega')



})

it('Cadastro invalido ao não inserir uma foto da CNH', () => {

    var entregador = cadastroFactory.entregador()

    cadastro.go()
    cadastro.fillFormIvalidCnh(entregador)
    cadastro.submit()
    cadastro.mensagemDeAlerta('Adicione uma foto da sua CNH')



})



    })

    context('Campos obrigatorios', () => {

        const mensagem = [
            {
                field: 'nome',
                output: 'É necessário informar o nome'
            },
            {
                field: 'cpf',
                output: 'É necessário informar o CPF'
            },
            {
                field: 'email',
                output: 'É necessário informar o email'
            },
            {
                field: 'cep',
                output: 'É necessário informar o CEP'
            }, {
                field: 'numero',
                output: 'É necessário informar o número do endereço'
            }, {
                field: ' metodo_entrega',
                output: 'Selecione o método de entrega'
            }, {
                field: 'cnh',
                output: 'Adicione uma foto da sua CNH'
            }
        ]

        before(function () {
            cadastro.go()
            cadastro.submit()

        })

        mensagem.forEach(function (msg) {
            it(`${msg.field} Campo obrigatorio`, function () {
                PaginaCadastro.mensagemDeAlerta(msg.output)
            })


        })


    })


