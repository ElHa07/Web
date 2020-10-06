class Pessoas {
    constructor(name, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }
}
class outraClass {
    constructor() {
        alert('outra classe !');
    }
}