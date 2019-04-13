function rand([min = 0, max = 1000]){
    if( min > max) [min, max] = [max. min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor); //Arrendonda pra baixo
};

console.log(rand([10, 100]));
console.log(rand([, 1000]));