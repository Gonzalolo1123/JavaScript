// Obtener los elementos por su ID
var botonCalcular = document.getElementById("boton");
var inputTotalBoleta = document.getElementById("totalBoleta");
var selectPorcentajePropina = document.getElementById("montos");
var etiquetaPropina = document.getElementById("montof");
var etiquetaTotalPagar = document.getElementById("boleta");

botonCalcular.addEventListener("click", function() {
    var costoTotal = parseFloat(inputTotalBoleta.value);
    var porcentajePropina = parseFloat(selectPorcentajePropina.value);

    if (!isNaN(costoTotal) && !isNaN(porcentajePropina)) {
        var propinaCalculada = costoTotal * (porcentajePropina / 100);
        etiquetaPropina.textContent = propinaCalculada;
        var totalConPropina = costoTotal + propinaCalculada;
        etiquetaTotalPagar.textContent = totalConPropina;
    } else {
        alert("Ingrese números válidos");
    }
});