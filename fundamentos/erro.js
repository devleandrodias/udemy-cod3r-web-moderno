function tratarErro(){
    throw new Error('Deu pau!');
    // throw 10;
    // throw 'Deu Pau!!';
    // throw {
    //     nomeErro: e.nome
    // }
};

function imprimirNomeGritado(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } 
    catch (e) {
        tratarErro(e);        
    }
    finally{
        console.log('Se fudeu!');
    }
};

obj = {nome: 'Thaísa'}
imprimirNomeGritado(obj);