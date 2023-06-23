document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("tipsForm").addEventListener("submit", calculateTip);

function calculateTip(event) {
    event.preventDefault(); //para de recarregar a página
    console.log(event); //mostrar no console o que está acontecendo

    let bill = document.getElementById("bill").value; //recebe através do id=bill o valor da conta  -->LINHA 18 HTML

    let serviceQual = document.getElementById("serviceQual").value; //recebe através do id=serviceQual o valor do serviço    -->LINHA 31 HTML

    let numOfPeople = document.getElementById("people").value; //recebe através do id=people em quantas pessoas vai ser dividido a conta   -->LINHA 50 HTML

    if ((bill == "") | (serviceQual == 0)) {
        alert("Por favor, preencha todos os campos!");
        return;
    } // caso não tenha sido preenchido o valor da conta e o serviço

    if ((numOfPeople == "") | (numOfPeople <= 1)) {
        document.getElementById("each").style.display = "none";
    } // caso não possuir nenhuma pessoa para pagar a conta, OU só 1 = a palavra CADA q está dentro de "each" SOME na tela devido ao style.display="none"
    else {
        document.getElementById("each").style.display = "block";
    } // caso possuir mais de 1 pessoa para pagar a conta = a palavra CADA q está dentro de "each" APARECE na tela devido ao style.display="block"

    let total = (bill * serviceQual) / numOfPeople;
    //conta do total= (pegando o valor da conta(bill) *(vezes) pegando o valor do serviço(serviceQual)) /(dividido) pelo numero de pessoas(numOfPeople)

    console.log(bill); //mostra o valor da conta
    console.log(serviceQual); //mostra como foi o serviço
    console.log(numOfPeople); //mostra em quantas pessoas irá ser dividio a conta

    total = total.toFixed(2);
    // deixa o valor total com apenas 2 digitos

    document.getElementById("tip").innerHTML = total;
    document.getElementById("totalTip").style.display = "block";
    // mostra na tela o resultado da gorjeta geral

    console.log(total); //mostra o total da conta para cada
}
