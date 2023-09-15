        
        let nota1  = prompt('Ingresa Nota 1: ',0);
        let nota2 = prompt('Ingrese Nota 2: ',0);
        let nota3 = prompt('Ingrese Nota 3: ',0);
        if(nota1>7 || nota2>7 || nota3>7|| nota1<1 || nota2<1 || nota3<1 || isNaN(nota1,nota2,nota3) )
        {
            alert("Cuidado ingrese porfavor numeros entre 1 y 7");
            window.location.reload();
        }
        else{
            let promedio= nota1*0.4+nota2*0.3+nota3*0.3;
            if (promedio<3.95) 
            {
                alert(`Asignatura Reprobada, Promedio final: ${promedio}`);
            }
            if (promedio>3.95 && promedio<4.94) {
                alert(`Rinde Examen, Promedio final: ${promedio}`);
    
            }if(promedio>=4.95){
                alert(`Asignatura Eximida, Promedio final: ${promedio}`);
            }
        }
