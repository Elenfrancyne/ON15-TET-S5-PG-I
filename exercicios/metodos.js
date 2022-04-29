<<<<<<< HEAD
//método split, transforma string em array//
let nomes = "Amanda, Priscila, Vanessa"
let alunas = nomes.split(",");
console.log(alunas)

console.log("**********************");
let dna = "A,T,C,G"
let arrayDna = dna.split(",")
console.log(arrayDna)
console.log("**********************");
let letras = "ATGCCGAAATTTGCG"
let arrDna = letras.split("")
console.log(arrDna);
console.log("---------------------------------------------------")
    //método join- transforma array em string//
let nomes1 = "Elen, Brenda, Hanna"

let alunas1 = nomes1.split(",");
console.log(alunas1);

alunas1 = alunas1.join(",");
console.log(alunas1);
console.log("------------------------------------")
    //push adiciona elemento ao final da array//
alunas.push(" Maria")
alunas.push("Adriana")
alunas.push("juliana")
console.log(alunas)
console.log("------------------------------------")
    //pop remove elemento ao final da array//
alunas.pop("Maria");
console.log(alunas);
//unshift adiciona no primeiro elemento do array
alunas.unshift("Lucilania");
alunas.unshift("Jeruza")
console.log(alunas)
    //shift retira primeiro elemento do array
alunas.shift();
console.log(alunas);
console.log("** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** *")
    //slice= copia de acordo com a solicitação começa no primeiro elemento e pega menos que o ultimo elemento de posição
let patrimonio = [" Lucas", "Edson", "Alan", "Elen"]
console.log(patrimonio)
var copia = patrimonio.slice(0, 2);
console.log(copia);
//sort- ordenar
//splice remove ou adiciona determinado elemento
patrimonio.splice(1, 0, "Eliza");
console.log(patrimonio)
    //indexof- descobrir a posição do elemento do array//
console.log(patrimonio.indexOf("Edson"));
let alunasExcluidas = alunas.splice(3, 1, "Eliza");
console.log(alunasExcluidas);
console.log("-------------------------")
console.log(alunas);
//includes-procura se existe o elemento dentro do array
console.log(alunas.includes("Beatriz"))
console.log(alunas.includes("Lucilania"))
    //reverse- reverte  a ordem do array

console.log(alunas.reverse(
    "alunas"));
console.log("----------------------------------------------")
    //concat unir dois elementos/ concatenar//
let servidoresAdm = ["Elen", "Suelen", "Aline", "Vinicius"];
let servidoresTec = ["Ana Claudia", "Clarise", "Patricia"];
servidores = servidoresAdm.concat(servidoresTec);
console.log(servidores);
console.log("----------------------------------------------")
    //forEach-percorre o array sem modificar o array original
let aprendizes = ["Amanda", "Priscila", "Vanessa"];
aprendizes.forEach((aprendiz) => {
    console.log(aprendiz);
})
console.log("----------------------------------------------")
    //find -encontraro primeiro elementoda array e especificadoe o retorno
let busca = "Priscila";
let aprendizEncontrada = aprendizes.find((aprendiz) => {
    return aprendiz == busca;
})
console.log(aprendizEncontrada);
//filter- retorna todas as alunas que contem a vogal "a"
let aprendizFiltradas = aprendizes.filter((aprendiz) => {
    return aprendiz.includes("i")
})
console.log(aprendizFiltradas)
console.log("--------------------------------------------------")
    //map - mapear um array com base no retorno especifico, deixei em caixa alta
let aprendizmapeados = aprendizes.map((aprendiz) => {
    return aprendiz.toUpperCase();
})
console.log(aprendizmapeados)
console.log("--------------------------------------------------")
let numeros = [1, 2, 3, 4, 5]
let dobroNumeros = numeros.map((numero) => {
    if (numero % 2 == 0) {
=======
let nomes = "Amanda, Priscila, Vanessa";
let alunas = nomes.split(",");
alunas.push("Maria");
alunas.pop();
alunas.unshift("Adriana")
alunas.unshift("Bianca")
console.log(alunas)
console.log("------------")
let alunasExcluidas = alunas.splice(3, 2, "Eliza")
console.log(alunasExcluidas)
console.log("------------")
console.log(alunas)
console.log("------------")
console.log(alunas.includes("Beatriz"))
alunas.reverse();
console.log(alunas)



var copia = alunas.slice(1,3);



let letras = "abbbcccddd"


alunas = alunas.join(",");




console.log("------------")
let alunas1 = ["Amanda", "Priscila", "Vanessa", "Adriana"];
let alunas2 = ["Maria", "Bianca", "Beatriz", "Eliza"];
alunas1 = alunas1.concat(alunas2); 
console.log(alunas1)


let alunasNovas = ["Amanda", "Priscila", "Vanessa"];
// Percorre o Array
alunasNovas.forEach( (aluna) => { 
    console.log(aluna);
})

// Faz uma busca 
let busca = "Priscila";
let alunaEncontrada = alunasNovas.find( (aluna) => { 
    return aluna == busca;
})

console.log("------------")
console.log(alunaEncontrada)

// Retorna todas as alunas que contem a vogal "a"
let alunasFiltradas = alunasNovas.filter( (aluna) => { 
    return aluna.includes("i");
})

console.log(alunasFiltradas)


// Deixa todos os nomes em Caixa Alta
let alunasMapeadas = alunasNovas.map( (aluna) => { 
    return aluna.toUpperCase();
})

console.log(alunasMapeadas)


let numeros = [1, 2, 3, 4, 5]
let dobroNumeros = numeros.map((numero) => {
    if(numero % 2 == 0) {
>>>>>>> 0465e74193db8e7112eda7ac360bf2ebaada51c3
        return numero * 2
    } else {
        return numero * 3
    }
})
<<<<<<< HEAD
console.log(dobroNumeros) **
    console.log("--------------------------------------------------")
    //every - retorna boolean verdadeiro ou falso
let aprendizIguais = aprendizes.every((aprendiz) => {
    return aprendiz === "Amanda";
})
console.log(aprendizIguais)
=======

console.log(dobroNumeros)

// Verifica se todas as alunas são iguais
let alunasAmanda = ["Amanda", "Amanda"]
let todasIguais = alunasNovas.every( (aluna) => { 
    return aluna == "Amanda";
})

console.log(todasIguais)
>>>>>>> 0465e74193db8e7112eda7ac360bf2ebaada51c3
