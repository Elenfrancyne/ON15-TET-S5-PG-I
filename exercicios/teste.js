for (deixe i = 0; i < 10; i++) {
    console.log(`estamos no numero ${i}`)
}

for (deixe j = 0; j < 20; j++) {
    console.log("O j continua se repetindo!!")
}

let arr = ["uva", "maça", "abacaxi"]
for (let i = 0; i < arr.length; i++) {
    console.log(`a fruta é ${arr[i]}`)
}


deixe total = 0;
deixe contador = 0;
while (contador < 10) {
    total += contador + 1
    console.log(`contando...${contador} com o valor de ${total}`)
    contador++
}



deixe total = 0;
deixe contador = 0;
Faz {
    total += contador + 10
    console.log(`contando...${contador} com o valor de ${total}`)
    contador++
}
while (contador < 10)



    let aldeias = ["Aldeia da Folha", "Aldeia da Areia", "Aldeia das Nuvens", "Aldeia do Som"]
for (deixe a aldeia de aldeias) {
    console.log(`Mais para min a aldeia: ${aldeia}`)
}


let numeros = [2, 3, 4, 6, 10, 21, 38]
deixe numerosPares = []
for (deixe numero de numeros) {
    if (numero % 2 == 0) {
        numerosPares.push(numero)
    }
}
console.log(numerosPares)

let novoArray = ["Carro", "Casa"]
let outroArray = novoArray.concat("Televisão")
console.log(novoArray)
console.log(outroArray)