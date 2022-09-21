const empregado1 = {
    salarioBase: 10000,
    valorHoraExtra: 100,
    qtHorasExtras: 20,
    calculaSalario: function(){
        return this.salarioBase + (this.valorHoraExtra * this.qtHorasExtras);
    }
}

function criarPessoa(){
    return {
        nome: ['Fulano', 'de Tal'],
        anoDeNascimento: 1990,
        profissao: 'Estudante',
        calculaIdade: function(){
            return new Date().getFullYear()-this.anoDeNascimento;
        }
    };
};

const pessoa = criarPessoa();
console.log(pessoa);

function criarPessoa(){
    return {
        nome,
        anoDeNascimento: 1990,
        profissao: 'Estudante',
        calculaIdade: function(){
            return new Date().getFullYear()-this.anoDeNascimento;
        }
    };
};

