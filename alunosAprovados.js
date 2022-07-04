const alunos = [
    {
        nome: 'Breno',
        nota: 7,
        turma: '1B',
    },
    {
        nome: 'Patricia',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Rosa',
        nota: 6,
        turma: '2D',
    },
    {
        nome: 'Aristeu',
        nota: 3,
        turma: '2C',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {

        //trabalhando em object destructuring
        const {nota, nome} = arr[i];

        //mudando argamento para object destructuring
        /* if(arr[i].nota >= media) {
            aprovados.push(arr[i].nome);
        } */
        if(nota >= media) {
            aprovados.push(nome);
        }

    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));