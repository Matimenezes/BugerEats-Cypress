export default {

    entregador: function () {

        var data = {
            nome: 'Mateus Menezes',
            cpf: '00000055521',
            email: 'mati@gmail.com',
            wpp: '11999995555',

            endereço: {
                cep: '06401160',
                numero: '445',
                complemento: 'casa',
                rua: 'Avenida Henriqueta Mendes Guerra',
                cidade: 'Barueri/SP',
                bairro: 'Vila São João'
            },

            metodo_entrega: 'Moto',
            metodo_entrega2: 'Bicicleta',
            cnh: 'cnh-digital.jpg'

        }
        return data
    }
}

