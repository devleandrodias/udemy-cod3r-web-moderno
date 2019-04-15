const teste1 = num => {
    if (num > 7) //IF sem chaves esxecuta primeira sentença de código
        console.log(num);
    console.log('final'); //Sempre será executado mesmo se condição for falsa
};

// teste1(6);
// teste1(8);

const teste2 = num => {
    if (num > 2) //Cuidado!, Não usar ';' com as estruturas de controle
        ; //Sentença de código vazia
    {   
        console.log(num);
    }
};

teste2(6);
teste2(8);