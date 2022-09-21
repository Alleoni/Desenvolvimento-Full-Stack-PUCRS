// Códigos utilizados na Aula 2 para se aplicar no console.

class Pessoa {
    constructor(nome, anoDeNascimento,  profissao){
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };
    ola(){
        console.log("Olá, eu sou o " + this.nome);
    };
    calculaIdade(){
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};
const pessoa1 = new Pessoa("João", 1990, "Estudante");

pessoa1

pessoa1.ola();

pessoa1.calculaIdade();

//____________________________________________________

class Estudante extends Pessoa{
    constructor(nome, anoDeNascimento, profissao, matricula){
        super(nome, anoDeNascimento, profissao);
        this.matricula = matricula;
    };
};

const estudante1 = new Estudante("Julio", 1999, "Estudante", 3442488);
estudante1

pessoa1

class Professor extends Pessoa{
    constructor(nome, anoDeNascimento, profissao, titulacao){
        super(nome, anoDeNascimento, "Professor");
        this.titulacao = titulacao;
    };
}

const prof1 = new Professor("Marta", 1970, "Mestre");

//Polimorfiismo com a classe Pessoa


class Estudante extends Pessoa{
    constructor(nome, anoDeNascimento, profissao, matricula){
        super(nome, anoDeNascimento, "Estudante");
        this.matricula = matricula;
    };
    ola(){
        super.ola();  //Usa o método Ola do pai e o seu mesmo.
        console.log("Colegas")//Usa o método Ola do pai e o seu mesmo.

    } 
};

const prof3 = new Professor();

Professor.prototype.formacao = "Favor completar com a sua";


class ValidadorCPF{
    static validar(cpf, tamanho){
        if(tamanho = 11){
            return true;
        }
        return false;
    };
};

ValidadorCPF("87892815482", 10);



