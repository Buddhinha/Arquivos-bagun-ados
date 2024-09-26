// primeiro recebo os dados para dps 
 /* 
let inicio = prompt("Digite um numero para iniciar a contagem.");
let fim = prompt("digite um numero para finalizar a contagem.");
let passo = prompt("Qual será o passo da contagem?");

if (as) {
    
}
*/

// codigo que funciona
/*
let iniciotxt = prompt("Digite um número para iniciar a contagem.");
let fimtxt = prompt("Digite um número para finalizar a contagem."); 
let passotxt = prompt("Qual será o passo da contagem?");

// Converta as entradas para números usando parseFloat
let inicionumber = parseFloat(iniciotxt);
let fimnumber = parseFloat(fimtxt);
let passonumber = parseFloat(passotxt);

// Verificação de valores
if (fimnumber <= 0) {
    console.log("Reinicie a página e tente novamente.");
} else if (passonumber <= 0) {
    console.log("O passo deve ser um número positivo.");
} else {

    while (inicionumber < fimnumber) {
        console.log(inicionumber);
        inicionumber += passonumber;  // Atualize o valor de inicionumber
    }
    console.log(fimnumber)
}
*/

    function verificar() {
        var inicio = parseInt(document.getElementById('iniciotxt').value, 10);
        var fim = parseInt(document.getElementById('fimtxt').value, 10);
        var passo = parseInt(document.getElementById('passotxt').value, 10);
    
        if (fim <= 0 || passo <= 0) {
            window.alert("Reverifique os dados e tente novamente");
            return; // Interrompe a execução da função
        }
    
        // Crie uma string para armazenar os resultados com quebras de linha
        var resultadoHTML = "";
    
        // Use um loop para gerar os valores
        while (inicio < fim) {
           resultadoHTML += inicio + "<br>"; // Adiciona o valor e uma quebra de linha
            inicio += passo; // Atualiza o valor de inicio
        }
    
        // Adiciona o valor final
        resultadoHTML += fim + "<br>";
    
        // Exiba o resultado na div com id 'res'
        var res =  document.getElementById('res');
        res.innerHTML = resultadoHTML;
    }
    
    
    




//codigo esplode pc 

/* 
    let iniciotxt = prompt("Digite um número para iniciar a contagem.");
    let fimtxt = prompt("Digite um número para finalizar a contagem."); 
    let passotxt = prompt("Qual será o passo da contagem?");

    // Converta as entradas para números usando parseFloat
    let inicionumber = parseFloat(iniciotxt);
    let fimnumber = parseFloat(fimtxt);
    let passonumber = parseFloat(passotxt);

    
    if (fimnumber<=0) {
        console.log ("renicie a pagina e tente novamente")
    } else {
        while(inicionumber < fimnumber){
             inicionumber + passonumber
             console.log(inicionumber)
        }
    }
*/


