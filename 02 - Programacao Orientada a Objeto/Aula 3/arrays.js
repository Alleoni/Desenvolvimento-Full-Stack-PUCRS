/* Crescimento de arrays e reserva de espaços */

//01a_length.js
var a = []
a[0] = Math.random()
console.log(a.length)
for (let val in a)
    console.log(" --> " + val)
console.log(" -=-=-=-=- ")
a.push(Math.random())
console.log(a.length)
for (let val in a)
    console.log(" --> " + val)

console.log(" -=-=-=-=- ")
a[9] = Math.random()
console.log(a.length)
for (let val in a)
    console.log(" --> " + val)
console.log(" -=-=-=-=- ")
for (let i = 0; i < a.length; i++)
    console.log(" -->" + i + ": " + a[i])


/* Arrays - Iteração
• Comando de repetição do tipo for */

//02a_loop.js
var a = []
a[0] = Math.random()
a[1] = Math.random()
a[9] = Math.random()
console.log(a.length)

//02a_loop.js
// ... Primeiro for
console.log(" -for .. in- ")
console.log(" -=-=-=-=- ")
for (let val in a)
    console.log(" --> " + val)
console.log(" -=-=-=-=- \n")

//02a_loop.js
// ... Segundo for
console.log(" -for .. of- ")
console.log(" -=-=-=-=- ")
for (let val of a)
    console.log(" --> " + val)
console.log(" -=-=-=-=- \n")

//02a_loop.js
// ... Terceiro for
console.log(" -for (;;))- ")
console.log(" -=-=-=-=- ")
for (let i = 0; i < a.length; i++)
    console.log(" -->" + i + ": " + a[i])

    
