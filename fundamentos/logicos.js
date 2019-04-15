function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2; //Operadores de curto circuito
    const comprarTv50 = trabalho1 && trabalho2; //Operadores de curto circuito
    const comprarTv32 = trabalho1 != trabalho2; //Diferença também simula um ou exclusivo
    const manterSaudavel = !comprarSorvete; //Operador unário

    return { comprarSorvete, comprarTv32, comprarTv50, manterSaudavel } // Criação mais inteligente de objeto, sem necessidade de explicitar chave valor, ex: comprarSorvete: comprarSorvete, isso acontece por baixo dos panos
};

console.log(compras(true, false));