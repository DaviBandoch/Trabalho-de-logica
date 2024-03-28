function exibirMensalidade() {
    var matricula = document.getElementById("matricula").value;
    var valor = parseFloat(document.getElementById("valor").value); 
  
    if (matricula <= 0 || !Number.isInteger(parseFloat(matricula))) {
      alert("A matrícula deve ser um número inteiro positivo.");
      return;
    }
  
    if (isNaN(valor) || valor <= 0) { 
      alert("O valor da mensalidade deve ser um número positivo.");
      return;
    }
  
    var resultado = "O aluno " + matricula + " paga mensalmente R$ " + valor.toFixed(2);
    document.getElementById("resultado").innerText = resultado;
  }