/*Exemplos - CONST 
• O código exemplo terá dois erros
• const01 não pode receber novo valor
• Haverá erro no comando: const01 = “novo valor”
• const02 não é acessíveis fora do bloco
• Haverá erro no comando: console.log(“02b.”+let02) */

//03a_const.js
function testConst() {
    const const01 = "const 01"
    {
        const const02 = "const 02"
        console.log("01a." + const01)
        console.log("01b." + const02)
    }
    const01 = "novo valor"
    console.log("02a." + const01)
    console.log("02b." + const02)
}
testConst()


/* • Exemplos - CONST 
• O código 03b_const.js roda sem erro
• O código da direita apresenta um erro
• Redefinição do objeto não é permitida
• Erro no comando: const01 = {propriedade: “novo valor”} */

//03b_const.js
function testConst() {
    const const01 = { propriedade: "valor" }
    console.log("01a." + const01.propriedade)
    const01.propriedade = "novo valor"
    console.log("02a." + const01.propriedade)
}
testConst()


/*• O código 03c_const.js apresenta um erro
• Redefinição do objeto não é permitida
• Erro no comando: const01 = {propriedade: “novo valor”} */
//03c_const.js
function testConst() {
    const const01 = { propriedade: "valor" }
    console.log("01a." + const01.propriedade)
    const01 = { propriedade: "novo valor" }
    console.log("02a." + const01.propriedade)
}
testConst()