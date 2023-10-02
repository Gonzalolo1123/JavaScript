// Obtener los elementos por su ID
var botonCalcular = document.getElementById("boton");
var inputTotal = document.getElementById("total");
var inputPorcentaje = document.getElementById("montos");
var resultadoPropina = document.getElementById("montof");
var resultadoTotalBoleta = document.getElementById("boleta");

botonCalcular.addEventListener("click", function() {
    var costoTotal = parseFloat(inputTotal.value);
    var porcentajePropina = parseFloat(inputPorcentaje.value);

    if (!isNaN(costoTotal) && !isNaN(porcentajePropina)) {
        var propinaCalculada = costoTotal * (porcentajePropina / 100);
        resultadoPropina.textContent = propinaCalculada.toFixed(0);
        var totalConPropina = costoTotal + propinaCalculada;
        resultadoTotalBoleta.textContent = totalConPropina.toFixed(0);
    } else {
        alert("Ingrese números válidos");
    }
});
