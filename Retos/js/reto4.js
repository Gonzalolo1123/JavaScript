var botonCalcular = document.getElementById("boton");
var inputNombre = document.getElementById("nombrein");
var inputPeso = document.getElementById("pesoin");
var inputAltura = document.getElementById("alturain");
var inputEdad = document.getElementById("edadin");
var inputACT= document.getElementById("actfisicain");
var title = document.getElementById("title");
var LabelIMC = document.getElementById("IMCF");
var LabelCLA = document.getElementById("CLAF");
var LabelGED = document.getElementById("GEDF");
var LabelENF = document.getElementById("ENF");

botonCalcular.addEventListener("click", function () {
    var nombre = inputNombre.value;
    var peso = parseFloat(inputPeso.value);
    var altura = parseFloat(inputAltura.value.replace(",", "."));
    var edad = parseFloat(inputEdad.value);
    var actividad= parseFloat(inputACT.value)

    var calculoCLA= peso*actividad;

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) 
    {
        alert("Ingresa una altura y un peso válidos.");
    } 
    else if (altura >= 3 || peso >= 600) 
    {
        alert("Ingresa una altura y un peso válidos.");
    } 
    else 
    {
        var calculoIMC = peso / (altura * altura);
        title.textContent = `Resultado para ${nombre}`;
        LabelIMC.textContent = calculoIMC.toFixed(2);

        if (calculoIMC < 18.5) {
            LabelCLA.textContent = "Bajo peso";
            LabelENF.textContent= "Necesita atención especializada";
        } else if (calculoIMC >= 18.5 && calculoIMC <= 24.9) {
            LabelCLA.textContent = "Normal";
            LabelENF.textContent= "Estado Nutricional adecuado";
        } else {
            LabelCLA.textContent = "Sobrepeso";
            LabelENF.textContent= "Necesita atención especializada"
        }
    }
    LabelGED.textContent=`${calculoCLA} kcal`
});
