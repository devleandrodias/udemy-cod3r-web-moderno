const imprimirResultado = nota => {
    if (nota >= 7) {
        console.log('Aprovado');
    }
    else {
        console.log('Reprovado');
    }
};

imprimirResultado(7);
imprimirResultado('Epaa!'); //Cuidado!!