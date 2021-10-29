const notas = [6, 7, 8, 9, 6.6]

for(let i in notas ){
    console.log(i, notas[i])
}

const pessoa = {
    nome: `ana`,
    sobrenome: `silva`,
    idade: 20,
    peso: 64,

}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
