Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirNota = nota => {
    if (nota.entre(9, 10)) {
        console.log('Quadro de honra')
    }
    else if (nota.entre(7, 8.99)) { //Pode ter vários else if
        console.log('Aprovado')
    }
    else {
        console.log('Reprovado')
    }
}

imprimirNota(10)