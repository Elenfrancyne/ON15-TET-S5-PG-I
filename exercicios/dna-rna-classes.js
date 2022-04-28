/*Atividade reforço. < 3

Segundo o Só Biologia a“ Síntese de RNA(mensageiro, por exemplo) se inicia com a separação das duas fitas de DNA.Apenas uma das fitas do DNA serve de molde para a produção da molécula de RNAm.A outra fita não é transcrita.Essa é uma das diferenças entre a duplicação do DNA e a produção do RNA.”.
            Essa síntese estava sendo analisada em um centro de genética, através de equipamento que geraram a cadeia de DNA e RNA de modo textual.
        Pensando em automatizar funturos mapeamentos de mutação, foi solicitado a criação de um programa que pudesse gerar de modo mais rápido a sequência de RNA a partir de um DNA.
    Imaginando um segmento hipotético de um filamento de DNA com a seqüência de bases:

    DNA - ATGCCGAAATTTGCG



O segmento de RNA formado na transcrição terá a seqüência de bases:

    RNA - UACGGCUUUAAACGC


Ou seja, o processo consiste basicamente na conversão:
    DNA-- > G, C, T, A

RNA-- > C, G, A, U


Então, tente criar um script que gere essa conversão.

Por exemplo:*/

// let aprendizes = ["Amanda", "Priscila", "Vanessa"];
// aprendizes.forEach((aprendiz) => {
//             console.log(aprendiz);
let rna = []
class Converge {
    constructor(dna) {
        this.dna = dna;

    }

    inserir(filamento) {
        let arrayDna = filamento.split("")
        arrayDna.forEach(elemento => {
            if (elemento == "G") {
                elemento = "C"
                rna.push(elemento)
            } else if (elemento == "C") {
                elemento = "G"
                rna.push(elemento)
            } else if (elemento == "A") {
                elemento = "U"
                rna.push(elemento)
            } else if (elemento == "T") {
                elemento = "A"
                rna.push(elemento)
            } else {
                console.log("este filamento não existe. Verifique quais são os filamentos corretos, para que possa realizar a consulta denovo!")
            }


        });
        let arrayRna = rna.join("")
        let resultadoRna = arrayRna
        console.log(`Realizando a Conversão do DNA: ${filamento}, em RNA teremos o seguinte resultado: ${resultadoRna}}`)
    }
}
const resultadoRna = new Converge("ATGCCGAAATTTGCG");
resultadoRna.inserir(resultadoRna.dna)
















/* let dna1 = dna.split("")
    let elementoDna = filamentoDna
    console.log(filamentoDna) elementoDna.forEach((elemento) => {});


    if (elemento == "G") {
        elemento = "C"
        rna.push(elemento)
    } else if (elemento == "C") {
        elemento = "G"
        rna.push(elemento)
    } else if (elemento == "A") {
        elemento = "U"
        rna.push(elemento)

    } else if (elemento == "T") {
        elemento = "A"
        rna.push(elemento)
    } else {
        console.log("Este filamento não existe. Verifique e tente novamente!")

        let resultadoRna = rna.join("")
        return resultadoRna

    }

    let dna1 = new Converger("ATGCCGAAATTTGCG")
    console.log(dna1) console.log(`Conversão finalizada, a sequência de RNA gerada é ${converger.converter(converger.dna)}`)


}

}
const filamento = new Converge("ATGCCGAAATTTGCG");*/