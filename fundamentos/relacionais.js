console.log('1)', 2 == "2"); //Compara apenas o valor (Igual)
console.log('2)', 2 === "2"); //Compara estritamente o valor e o tipo (Estritamente igual)
console.log('3)', 3 != "3"); //Compara se eh diferente apenas o valor (Diferente)
console.log('4)', 3 !== "3"); //Compara se é estritamente diferente o valor e o tipo (Estritamente diferente)

console.log('5)', 5 < 2); //Menor que 
console.log('6)', 5 > 2); //Maior que
console.log('7)', 5 <= 2); //Menor igual a
console.log('8)', 5 >= 2); //Maior igual a

const d1 = new Date(0);
const d2 = new Date(0);

console.log('9)', d1 == d2);
console.log('10)', d1 === d2);
console.log('11)', d1.getTime() === d2.getTime());
console.log('12)', undefined == null);
console.log('13)', undefined === null);