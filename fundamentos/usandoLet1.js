let numero = 1;

{
    let numero = 2; //O Let tem escopo de bloco, função, global mesmo que não esteja em uma função
    console.log('Dentro = ', numero)
}

console.log('Fora = ', numero)