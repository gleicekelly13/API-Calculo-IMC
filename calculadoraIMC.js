function efetuarCalculoIMC(peso, altura) {  //Código principal da aplicação, onde o IMC é calculado
    let imc = peso / (altura * altura); //Calcula o IMC

    return imc;  //Retorna o resultado do cálculo
}

function retornaStatusIMC(imc) {  //A função recebe como parâmetro o IMC
    let status;

    if(imc < 18.5) {
        status = 'Abaixo do peso';
    } 
    else if (imc >= 18.5 && imc < 24.9) {
        status = 'Peso Normal';
    }
    else if(imc >= 24.9 && imc < 30) {
        status = 'Acima do peso';
    }
    else {
        status = 'Obeso';
    }

    return status;
}

function validaParametro(parametro) {
    if(isNaN(parametro)) { //*
        return false;   //Se não for numérico, retorna false
    }
    else {
        return true;    //Se for numérico, retorna true
    }
}


exports.efetuarCalculoIMC = efetuarCalculoIMC;
exports.retornaStatusIMC = retornaStatusIMC;
exports.validaParametro = validaParametro;


/* 
* Função isNaN para detectar se o parâmetro é ou não numérico
*/