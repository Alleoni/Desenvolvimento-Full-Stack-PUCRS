const soap = require('soap');
const url = 'http://www.dneonline.com/calculator.asmx?wsdl';

soap.createClient(url, function(err, client){
   console.log('Descrever o WSDL', client.describe().Calculator.CalculatorSoap)

   client.Add({intA: 19, intB: 21}, function (err, result){
    if(err){
        console.log(err)
    } else {
        console.log('A soma é: ' + result.AddResult )
    }
   })

   client.Divide({intA: 20, intB: 2}, function (err, result){
    if(err){
        console.log(err)
    } else {
        console.log('A divisão é: ' + result.DivideResult )
    }
   })

   client.Subtract({intA: 1250, intB: 447}, function (err, result){
    if(err){
        console.log(err)
    } else {
        console.log('A subtração é: ' + result.SubtractResult )
    }
   })

   client.Multiply({intA: 12, intB: 14}, function (err, result){
    if(err){
        console.log(err)
    } else {
        console.log('A multiplicação é: ' + result.MultiplyResult )
    }
   })

});