//Ejercicio 3

//alert("Antes de ingresar tu NickName asegurate que este cumpla con los criterios");

while(true){
    var nick=prompt("Ingrese su nickname: ");
    var long= nick.split("")
    let A= nick.split(" ");
    if(A.length== 1 && long.length>0)
    {
        break;
    }
}
if(long.length>5 && /\d/.test(long[long.length-1]) && /[A-Z]/.test(long[0]) || /[a-z]/.test(long[0])   )
{
    alert("El nombre de usuario es válido");
}
else
{
    alert("El nombre de usuario no cumple con los requisitos");
}