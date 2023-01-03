//Todas as informações deste arquivo constam no Wscalc.wsdl

const soap = require('soap')
const express = require('express')
const fs = require ('fs')
const PORT = 8001;

const app = express()
  
  var myservice = {
    ws: { // no arquivo WSDL em service que consta o "ws" wsdl:service name="ws"
        calc: { // no arquivo WSDL em port que consta o "calc" wsdl:port binding="calcB" name="calc">
            somar : function(args) {
                var n = 1*args.a + 1*args.b;
                return { sumres : n };
            },
            multiplicar : function(args) {
                  var n = args.a * args.b;
                  return { mulres : n };
            }
        }
      }
  };

  var xml = fs.readFileSync('wscalc1.wsdl', 'utf8');

  app.listen(PORT, function(){
    soap.listen(app,'/wscalc1', myservice, xml, function(){
        console.log('server initialized', + PORT)
    })
  })