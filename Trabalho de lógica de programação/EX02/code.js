function contaComDelay(x) {
    setTimeout(function() {
      document.getElementById("resultado").innerHTML += x + " ";
      if (x < 100) {
        if ((x - 1) % 24 === 0) { 
          document.getElementById("resultado").innerHTML += "<br>"; 
        }
        contaComDelay(x + 1);
      }
    }, 50); 
  }
  
  function iniciarContagem() {
    var num = parseInt(document.getElementById("numero").value);
    if (!isNaN(num)) {
      document.getElementById("resultado").innerHTML = "";
      contaComDelay(num);
    } else {
      alert("Por favor, insira um número válido.");
    }
  }
  