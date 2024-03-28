function exibirTabuada() {
    var numero = parseInt(document.getElementById("numero").value);
    var tabuada = "";
  
    if (isNaN(numero)) {
      alert("Por favor, insira um número válido.");
      return;
    }
  
  
    for (var i = 1; i <= 10; i++) {
      tabuada += "<p>" + numero + " X " + i + " = " + (numero * i) + "</p>";
    }

    document.getElementById("tabuada").innerHTML = tabuada;

}