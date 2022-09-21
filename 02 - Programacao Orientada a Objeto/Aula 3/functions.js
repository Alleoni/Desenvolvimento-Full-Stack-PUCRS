/*Exemplos
• Funções que não recebem parâmetros */

// 01a_funcaoSemParametro
function funcaoSemRetorno() {
    console.log("Alô Mundo!");
}
function funcaoComReturn() {
    return "Alô Mundo!";
}
let msg = funcaoSemRetorno()
console.log(msg)
msg = funcaoComReturn()
console.log(msg)


/* Exemplos
• Funções que recebem parâmetro */

// 01b_funcaoComParametro
function potencia(base, expoente = 2) {
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++) {
        resultado *= base;
    }
    return resultado;
}
console.log(potencia());
console.log(potencia(4));
console.log(potencia(2, 6));
console.log(potencia(2, 6, 18));

/*Funções Manipuláveis
Exemplo – função como argumento */

// 02a_funcaoComoParametro
function decision(question, doOK, doCancel) {
    if (question == "OK") doOK()
    else doCancel();
}
function showOk() { console.log("You agreed."); }
function showCancel() { console.log("You canceled the execution."); }
decision("OK", showOk, showCancel);
decision("Cancel", showOk, showCancel);

//Exemplo – função anônima como argumento

// 02b_funcaoComoParametro
function decision(question, doOK, doCancel) {
    if (question == "OK") doOK()
    else doCancel();
}
decision(
    "OK",
    function () { console.log("You agreed."); },
    function () { console.log("You canceled the execution."); }
);
decision(
    "Cancel",
    function () { console.log("You agreed."); },
    function () { console.log("You canceled the execution."); }
);

//Exemplo – função atribuída a variável como argumento

// 02c_funcaoComoParametro
function decision(question, doOK, doCancel) {
    if (question == "OK") doOK()
    else doCancel();
}
let beOK = function showOk() { console.log("You agreed."); }
let beCancel = function showCancel() { console.log("You canceled the execution."); }
decision("OK", beOK, beCancel);
decision("Cancel", beOK, beCancel);
