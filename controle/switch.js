const imprimirNota = nota => { //Switch é uma forma de selação multipla e não uma expressão relacional

    switch (Math.floor(nota)) { //Arredendoda nota para baixo

        case 10: case 9: //Executa tanto quando nota for 10 ou 9
            console.log('Quadro de honra!')
            break

        case 8: case 7:
            console.log('Aprovado!')
            break

        case 6: case 5: case 4:
            console.log('Recuperação!')
            break

        case 3 , 2 , 1 , 0: //Sintaxe também funcionada
            console.log('Reprovado!')
            break

        default: //Pode colocar ele em qualquer lugar
            console.log('Nota Inválida')
            break //Tem q ter o break se não executa todos após o primeiro q for verdadeiro
    }
}

imprimirNota(10)