function calcularArea() {
           
    var raio = parseFloat(document.getElementById("raio").value);

    if (isNaN(raio) || raio <= 0) {
        alert("Por favor, insira um valor válido para o raio.");
        return;
    }

    var area = Math.PI * Math.pow(raio, 2);

 
    document.getElementById("resultado").innerText = "A área do círculo é: " + area.toFixed(2);
}