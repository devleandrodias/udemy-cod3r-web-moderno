const funcs = [];

for (var i = 0; i < 11; i++) {
    funcs.push(function () {
        console.log(i);
    });
};

funcs[2](); //Cuidado com escopo do var 
funcs[8](); //Cuidado com escopo do var