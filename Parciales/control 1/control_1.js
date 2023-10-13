///Ejercicio 1 control


let puntuacion= 0.0
console.log(puntuacion);
while (true) 
{
    puntuacion = parseFloat(prompt("Ingrese su puntuacion: "),0.0);
    if (!isNaN||puntuacion == 0.0 || puntuacion == 0.2 || puntuacion == 0.4 || puntuacion == 0.6 || puntuacion == 0.8) 
    {
        break;
    }
}
let dinero= puntuacion*350000
alert(`Su nivel de rendimiento es: ${puntuacion}, el dinero conseguido fue de: $${dinero} CLP`);