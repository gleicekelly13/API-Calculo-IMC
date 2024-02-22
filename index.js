const express = require('express');  //Importação do express
const app = express();

const calculadoraIMC = require('./calculadoraIMC'); //Importação da camada de serviço e atribuindo à constante calculadoraIMC

app.get('/', (req, res) => { //A função get recebe uma requisição do front-end
    let peso = req.query.peso; //req => contém todos os dados enviados na requisição *
    let altura = req.query.altura; //query => Acessa apenas os parâmetros enviados pelo front-end via get,  
                                    //e eles estarão no formato json

    if(calculadoraIMC.validaParametro(req.query.peso) && calculadoraIMC.validaParametro(req.query.altura)) {
        let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura); //Chama a função através da constante
        let status = calculadoraIMC.retornaStatusIMC(imc); /* Variável status recebe o retorno da função retornaSatusIMC */

        let json = {imc : imc, status : status}; // ...com o IMC formatado em json (json de duas chaves)

        res.json(json); //Finaliza o método get enviando uma resposta de volta ao front-end...
    }
    else {  //Executa se um dos valores não forem numéricos
        res.status(400).json({'Erro' : 'Peso ou altura inválidos.'});
    }
})

app.listen(8080, () => { //Método listen => responsável por escutar todas as requisições HTTP feitas à API
    let data = new Date();
    console.log('Servido iniciado em: ' + data);
})


/*   
    Calculadora que recebe parâmetros do front-end diretamente na API

* let peso = req.query.peso;  (A chave deve ser a mesma enviada pelo front-end //peso)
  let altura = req.query.altura;  (A chave deve ser a mesma enviada pelo front-end //altura)
  (São declaradas duas variáveis, peso e altura, req.query mais a chave é utilizado para acessar o valor do parâmetro )

*if(calculadoraIMC.validaParametro(req.query.peso) && calculadoraIMC.validaParametro(req.query.altura)) { 
    //Chama a função validaParametros no get da API e passa os parâmetros peso e altura. O cálculo só ocorrerá
    se os dois parâmetros tiverem dois valores numéricos

* let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);  //A função retorna o resultado do cálculo 
para a variável imc a qual ela está atribuída.

* res.status(400).json({'Erro' : 'Peso ou altura inválidos.'}); 
A função status, nativa do Express, é utilizada para retornar um código de status para o front-end através do Node e Express
*/