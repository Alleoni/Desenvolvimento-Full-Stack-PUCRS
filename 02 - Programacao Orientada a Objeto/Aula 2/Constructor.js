//Testando Construtor no Console/Node
function Pessoa(){
    this.nome = "Joao";
    this.anoDeNascimento = 1990;
    this.profissao = "Estudante";
    this.calculaIdade = function(){
        return new Date().getUTCFullYear() - this.anoDeNascimento;
    };
};

const pessoa1 = new Pessoa(); // A palavra New garante que o objeto criado, terá os valores pré definidos do  Construtor.

pessoa1.idade = 20;
pessoa1.anoDeNascimento = 2002;
pessoa1.calculaIdade();


const pessoa2 = new Object();
pessoa2.constructor

pessoa2.__proto__
