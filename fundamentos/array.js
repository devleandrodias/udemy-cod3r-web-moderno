//Array no java script é dinâmico e heterogênios e podem crescer sem limites
const valores = [1, 2, 3, 4, 5];
console.log(valores);

//Retorna valores em um intervalo
console.log(valores[0], valores[3]); 

//Gera undefined caso não existir
console.log(valores[10]);

//Atribui novo valo na posição 4
valores[4] = 10; 
console.log(valores);

//Gera valores vazios até a posição definada
valores[11] = 10;
console.log(valores);

//Mostra quantos elementes tem no array
console.log(valores.length);

//Adiciona valores no final do array
valores.push(false, true, null, 7, "Thaísa")
console.log(valores);

//Retira do array o último valor
console.log(valores.pop());
delete valores[0];

//Array é do tipo object
console.log(typeof(valores));  