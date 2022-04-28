// if (condição) {

// } else {
//     if = se
//else= senão
//     securso
//     for literatura, faça isso
// }
if (curso = "literatura") {
    console.log("O curso é literatura!!!");
} else {
    console.log("Curso errado!!!");
}
console.log("---------------------------------------------------")
    //for = para

//== literalmente igual em genero e numero ;
//=== totalmente igual em todos os aspectos;
//=atribui um valor;
//let nome = 'Amanda';
//let numero = 7(inteiro);
//if (numero == '7' (string));

for (let i = 0; i < 10; i++) {
    console.log(`contando os numeros ${i}`)
}
console.log("---------------------------------------------------")

let calabresa = ["uva", "maçã", "abacaxi"]
for (let batataFrita = 0; batataFrita < calabresa.length; batataFrita++) {
    console.log(`A fruta é ${calabresa[batataFrita]}`)
}
//break- significa pare no looping infinito

console.log("---------------------------------------------------")
    /*While= enquanto
    += adicionar esse valor á variavel*/
let total = 0;
let contador = 0;
while (contador < 10) {
    total = total + (contador * 100);
    total += contador * 100;
    console.log(`contando os contadores ${contador}
        com o valor de ${total}`)
    contador++
}
console.log("---------------------------------------------------")
    /*While= enquanto*/
let total1 = 0;
let contador1 = 0;
while (contador1 < 10) {
    total1 += contador1 + 1
    console.log(`Contando o contador ${contador1} com o valor de ${total1}`)
    contador1++
}
console.log("---------------------------------------------------")
    //do while-faça, enquanto//
let totals = 0;
let contadors = 0;
do {
    totals += contadors + 10
    console.log(`contando contadores ${contadors} com valor de  ${totals}`)
    contadors++
} while (contadors < 10)
console.log("---------------------------------------------------")
    //for of//
let aldeias = ["Aldeia da Folha", "Aldeia da Areia", "Aldeia das nuvens", "Aldeia do Sol"]
for (let aldeia of aldeias) {
    console.log(`mostre pra mim a aldeia: ${aldeia}`)
}
console.log("---------------------------------------------------")
    // descobrir numero par
let numeros = [2, 3, 4, 6, 10, 12, 21, 38, 41, 46]
for (let numero of numeros) {
    if (numero % 2 == 0) {
        console.log(numero)
    }
}
console.log("** ** ** ** ** ** ** ** ** ** ** ** **")
    // descobrir numero ímpar 

let numeros1 = [2, 3, 4, 6, 10, 12, 21, 38, 41, 46]
for (let numero1 of numeros1) {
    if (numero1 % 2 == 1) {
        console.log(numero1)
    }
}

console.log("---------------------------------------------------")
    //transformar resposta em um novo array//
let numeros2 = [2, 3, 4, 6, 10, 21, 30]
let arr2 = []
for (let numero2 of numeros2) {
    if (numero2 % 2 == 0) {
        arr2.push(numero2)
    }
}
console.log(arr2)
console.log("---------------------------------------------------")
    //criando new array concatenando 
let numeros3 = [2, 3, 4, 6, 10, 21, 38, ]
let newArray = numeros.concat[34]
console.log(newArray)
console.log("** ** ** ** ** ** ** ** ** ** ** ** **")
let novoArray = ["carro", "casa"]
let outroArray = novoArray.concat("televisão")
console.log(novoArray)
console.log(outroArray)