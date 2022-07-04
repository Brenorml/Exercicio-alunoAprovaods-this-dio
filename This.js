function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Breno',
    idade: 39,
};

const pessoa2 = {
    nome: 'Patricia',
    idade: 40,
};

const animal = {
    nome: 'Brownie',
    idade: 4,
    raca: 'Rafeiro',
};

//utilizando o método call
//console.log(calculaIdade.call(animal, 10));

//utilizando o método apply
console.log(calculaIdade.apply(pessoa1, [20]));