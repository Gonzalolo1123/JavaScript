document.getElementById("button").addEventListener("click", function() {
    var longuitud = parseInt(document.getElementById("InContra").value);
    var checkMay = document.getElementById("checkMay").checked;
    var checkMin = document.getElementById("checkMin").checked;
    var checkNum = document.getElementById("checkNum").checked;
    var checkCarEs = document.getElementById("checkCarEs").checked;
    var Label = document.getElementById("Label");

    var carSelec = "";
    if (longuitud<8) 
    {
        longuitud= 8;
    }
    if (longuitud>20) longuitud= 20;
    if (checkMay) carSelec += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (checkMin) carSelec += "abcdefghijklmnopqrstuvwxyz";
    if (checkNum) carSelec += "0123456789";
    if (checkCarEs) carSelec += "!@#$%^&*()_+[]{}|;:,.<>?";

    if (carSelec === "") {
        alert("Debe seleccionar al menos uno");
    } else {
        Label.textContent = Generador(longuitud, carSelec);
    }
});

function Generador(longuitud, carSelec) {
    var Label = "";
    for (var i = 0; i < longuitud; i++) {
        var randomIndex = Math.floor(Math.random() * carSelec.length);
        Label += carSelec.charAt(randomIndex);
    }
    return "Contraseña Generada: "+Label;
}