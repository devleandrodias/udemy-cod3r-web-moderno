const funcs = [];

for (let i = 0; i < 11; i++) {
    funcs.push(function () {
        console.log(i);
    });
};

//No Let respeita o escopo de bloco
funcs[2]();
funcs[8]();