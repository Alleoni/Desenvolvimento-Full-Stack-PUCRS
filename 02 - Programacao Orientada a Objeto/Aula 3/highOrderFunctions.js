/*Funções de alta ordem
• Array.some() */
// 05a_arraySome
array = [4, 5, 6, 7, 8, 9, 10]
regraImpar = (item) => item % 2 == 0
console.log("Há algum número impar? " +
    array.some(regraImpar))
regraPrimo = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++)
        if ((item % divisor) == 0)
            ndiv++
    if (ndiv == 2)
        return true
    else
        return false
}
console.log("Há algum número primo? " +
    array.some(regraPrimo))

//Array.every()
// 05b_arrayEvery
array = [4, 5, 6, 7, 8, 9, 10]
regraImpar = (item) => item % 2 != 0
console.log("Todos os números que são impar ? " + array.every(regraImpar))
regraPrimo = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++)
        if ((item % divisor) == 0)
            ndiv++
    if (ndiv == 2)
        return true
    else
        return false
}
console.log("Todos os números que são primos ? " +
    array.every(regraPrimo))

//Array.filter()

// 05c_arrayFilter
array = [4, 5, 6, 7, 8, 9, 10]
regraImpar = (item) => item % 2 != 0
console.log("Filtrar números impar? " + array.filter(regraImpar))
regraPrimo = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++)
        if ((item % divisor) == 0)
            ndiv++
    if (ndiv == 2)
        return true
    else
        return false
}
console.log("Filtrar os números primos ? " + array.filter(regraPrimo))

//Array.forEach()

// 05d_arrayForEach
array = [4, 5, 6, 7, 8, 9, 10]
array.forEach(
    (nro) => console.log(nro + " -> " + (nro % 2 == 0 ? "par" : "ímpar")))
nroDivisores = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++)
        if ((item % divisor) == 0)
            ndiv++
    return ndiv;
}

array.forEach(
    (nro) => console.log(
        nro +
        `-> nDivisores de 1 até ${nro} =` +
        nroDivisores(nro))
)

//• Array.reduce()
// 05e_arrayReduce
array = [4, 5, 6, 7, 8, 9, 10]
let resultado =
    array.reduce(
        (acc, val) => acc += (val % 2 == 0) ? val : 0,
        0
    )
console.log("A soma dos nros pares é " + resultado)

//• Array.map()
// 05f_arrayMap
array = [4, 5, 6, 7, 8, 9, 10]
var newArray = array.map((item) => item * 2)
console.log(newArray)
newArray = array.map((item) => { return { x: item, y: 2 * item } })
console.log(newArray)


//• Juntando Operações
// 05g_arrayFilterMapForEach
array = [2, 3, 4, 5, 6, 7, 8, 9, 10]
nroDivisores = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++)
        if ((item % divisor) == 0)
            ndiv++
    return ndiv;
}
array
    .filter((nro) => nroDivisores(nro) == 2)
    .map((item) => { return { x: item, par: (item % 2) == 0 } })
    .forEach((obj) => console.log(obj.x + " é par? " + obj.par))

    

