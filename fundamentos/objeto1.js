//JSON - Java Script Object Notation

//Isso é um objeto e é uma coleção de chave e valor
const prod1 = {};
prod1.nome = "Thaísa Castro";
prod1.preco = 7887.89;
prod1['Desconto Legal'] = 0.4; //Evitar atributos com espaço

//Estrutura aninhada de objetos, objeto e um conjunto de pares chave valor
const prod2 = {
    produto: 'Camisa Polo',
    valor:  79.90,
    categoria: {
        setor: {
            nome: 'Vestuario'
        },
        nome: 'Camisas'
    }
};

//Isso é uma JSON
// "{ "nome": "Camisa Polo", "preco": "9009.2938"}"

console.log(prod1);
console.log(prod2);