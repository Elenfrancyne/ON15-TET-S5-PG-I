class Estudante {
    constructor(nome, matricula, endereco, curso) {
        this.nome = nome;// de onde vem o nome??
        this.matricula = matricula;
        this.endereco = endereco;
        this.curso = curso;
    }

    estudarProva(estudo) {
        if (estudo == "S") {
            console.log("Tudo vai dar certo, você irá passar!!");
<<<<<<< HEAD
        } else if (estudo == "N") {
            console.log("Boa sorte então, o bicho vai pegar!!!");
        } else {
            console.log("Voce digitou errado!!!")
=======
        } else if(estudo == "N") {
            console.log("Boa sorte então, o bicho vai pegar!!!");
        } else {
            console.log("Você digitou errado!!!")
>>>>>>> 0465e74193db8e7112eda7ac360bf2ebaada51c3
        }
    }

};

const estudanteRafa = new Estudante("Rafa", 123456, "Algum lugar por ai, 111", "Quimica");
console.log(estudanteRafa);

estudanteRafa.estudarProva("S");
estudanteRafa.estudarProva("N");
console.log("-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --");

<<<<<<< HEAD
=======



>>>>>>> 0465e74193db8e7112eda7ac360bf2ebaada51c3
class Conta {
    constructor(nomeCliente, cpf, endereco, agencia, conta, telefone) {
        this.nomeCliente = nomeCliente;
        this.cpf = cpf;
        this.endereco = endereco;
        this.agencia = agencia;
        this.conta = conta;
        this.telefone = telefone;
        this.saldo = 0;
    }
<<<<<<< HEAD
    depositar(valor) {
        return this.saldo += valor

    }
    sacar(valor) {
        if (valor > this.saldo) {
=======
    
    depositar(valor) {
        return this.saldo += valor
    }

    sacar(valor) {
        if(valor > this.saldo) {
>>>>>>> 0465e74193db8e7112eda7ac360bf2ebaada51c3
            return "O saldo é insuficiente"
        }
        return this.saldo -= valor
    }

<<<<<<< HEAD

}

let contaAline = new Conta("Aline", "1111111111", "Logo ali", "1010-1", "234567-0", "(43) 333333333");
console.log(contaAline);
let contaCarol = new Conta("Carol", "2222222222", "aqui", "2020 - 2", "765432-0", "(43)222222222");
console.log(contaCarol);
let contaElen = new Conta("Elen", "333333333", "Ibipora", "2222-2", "123456-7", "(43)4444444444", );
console.log(contaElen);

let depositarSaldo = contaElen.depositar(2000)
console.log(`O novo saldo de Elen é : ${depositarSaldo}`);
console.log(contaElen.saldo);
console.log(contaElen.sacar(25));
console.log(`O novo saldo de Elen é de: ${saldo}.`);
=======
}

let contaAline = new Conta("Aline", "1111111111", "Logo ali", "1010-1", "234567-0", "(11)11111111")
console.log(contaAline)

let contaCarolaine = new Conta("Carolaine", "22222222", "aqui perto", "2323-2", "342543-0", "(22)22222222")
console.log(contaCarolaine)


let depositarSaldo = contaAline.depositar(10000)
console.log(`O novo saldo de ${contaAline.nomeCliente} é: ${depositarSaldo}`)
console.log(contaAline.saldo)
console.log(contaAline.sacar(100))
console.log(contaCarolaine.sacar(10))
>>>>>>> 0465e74193db8e7112eda7ac360bf2ebaada51c3
