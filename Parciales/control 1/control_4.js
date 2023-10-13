//Ejercicio 4

function calculadoraIVA(cantSinIVA,IVA) 
{
    while(true)
    {
        var cantSinIVA = parseFloat(prompt("Ingrese su total sin IVA: "));
        if(!isNaN || cantSinIVA>0)
        {
            break;
        }
    }
    
    var IVA = prompt("Ingrese el porcentaje de IVA sin el %: ",0);
    if(IVA==0)
    {
        IVA=19;
    }

    var cantconIVA= cantSinIVA+cantSinIVA*(IVA/100);
    return alert(`Su total con IVA incluido es: ${cantconIVA}`)
}

calculadoraIVA();