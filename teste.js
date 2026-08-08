class Pessoa {
    nome;
    idade;
    peso;
    status(){
        console.log(`${this.nome} tem ${this.idade} anos e um peso de ${this.peso}kg.`);
    }
}

let pessoa = new Pessoa;
pessoa.nome =  "Valdemir";
pessoa.idade = 55;
pessoa.peso = 72;
console.log(pessoa);
