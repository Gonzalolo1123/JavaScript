//Ejercicio 2
var frase= prompt("Ingrese una palabra: ");
var letra= prompt("Ingrese la letra que desea buscar: ");

let A= frase.split("");
let cont=0;
for (let i = 0; i <A.length ; i++) 
{
    if(A[i]==letra)
    {
        cont++
    }
}

alert(`La Frase es: "${frase}" y la cantidad de veces que aparece la letra "${letra}" es: ${cont}>`);
