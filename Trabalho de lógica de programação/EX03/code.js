function exibirDados() {
    var code = document.getElementById("code").value;
    var age = document.getElementById("age").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
  
    if (code.length !== 5) {
      alert("O código deve conter 5 dígitos.");
      return;
    }
  
    if (age < 1 || age > 100) {
      alert("A idade deve estar entre 1 e 100 anos.");
      return;
    }
  
    if (height <= 0) {
      alert("A altura deve ser um valor positivo em centímetros.");
      return;
    }
  
    if (weight <= 0) {
      alert("O peso deve ser um valor positivo em kilogramas.");
      return;
    }
  
    var resultado = "O CÓDIGO: " + code + "<br>" +
                    "A IDADE: " + age + "<br>" +
                    "A ALTURA: " + height + " cm<br>" +
                    "O PESO: " + weight + " kg";
  
    document.getElementById("resultado").innerHTML = resultado;
}