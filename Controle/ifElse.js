const imnprimirResultado = function(nota) {
    if(nota >= 7 ) {
        console.log(`Aprovado!!`)
    } else {
        console.log(`Reprovado`)
    }
}

imnprimirResultado(10)
imnprimirResultado(4)
imnprimirResultado(`epa!`) // cuidado !!    