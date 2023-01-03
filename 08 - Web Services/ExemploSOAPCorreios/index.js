const soap = require('soap') // Para utilizar o soap
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl'

soap.createClient(url, function(err, res){
    //console.log('DESCREVE -->', res.describe().AtendeClienteService.AtendeClientePort);

    res.consultaCEP({cep: '13484011'}, function(err, res){
        if(err){
            console.log(err)
        } else {
            console.log(res)
        }
    })

});