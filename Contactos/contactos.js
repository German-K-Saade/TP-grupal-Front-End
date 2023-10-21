function validarFormulario()
{   
    var nombre = document.getElementById('nombre').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();
    var email = document.getElementById('email').value.trim();
    var telefono = document.getElementById('telefono').value.trim();

    if(nombre == null || nombre.length == 0) 
{
    
    document.getElementById('msjnombre').innerHTML = "Ingrese su nombre";
    elemento = document.getElementById('nombre');
   
    return false;
}   


else if(!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|edu)\.(?:|com|ar)+$/.test(email))){
    document.getElementById('msjemail').innerHTML = "No es una dirección de email correcta";
    elemento = document.getElementById('email');
    
    return false

}

else if (telefono > 10 || telefono == null){
document.getElementById('msjtel').innerHTML = "No es un número de teléfono correcto";
    elemento = document.getElementById('telefono');
return false
}

else if(mensaje == null || mensaje.length == 0)
{

document.getElementById('msj').innerHTML = "Debes escribir un mensaje";
elemento = document.getElementById('mensaje');

return false;

}
return true

}
