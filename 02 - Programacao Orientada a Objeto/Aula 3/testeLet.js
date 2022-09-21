/*var, let e const
• Exemplos - LET 
• As variáveis são acessadas normalmente */


//02a_let.js
function testVar() {
    let let01 = "let 01"
    {
        let let02 = "let 02"
        console.log("01a." + let01)
        console.log("01b." + let02)
    }
    console.log("02a." + let01)
}
testVar()

/*• Exemplos - LET 
• A variável let02 não é acessíveis for a do bloco de definição
• Haverá erro no comando: console.log(“02b.”+let02) */

//02b_let.js
function testVar() {
    let let01 = "let 01"
    {
        let let02 = "let 02"
        console.log("01a." + let01)
        console.log("01b." + let02)
    }
    console.log("02a." + let01)
    console.log("02b." + let02)
}
testVar()


/*• Exemplos - LET 
• A redefinição da variável let01 não é suportada
• Haverá erro no comando: console.log("01a."+let01)
• A variável let01 causará conflito pois pode ser a primeira ou a segunda declaração */

//02c_let.js
function testVar(){
    let let01="let 01"
    {
    console.log("01a."+let01)
    let let01="let 02"
    console.log("02a."+let01)
    }
    console.log("03a."+let01)
    }
    testVar()
