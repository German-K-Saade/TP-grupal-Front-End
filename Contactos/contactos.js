
function validarFormulario() 
{   

    valor = document.getElementById('nombre').value.trim();
    
if(valor == null || valor.length == 0) 
{
    
    document.getElementById('msjnombre').innerHTML = "Ingresá tu nombre";
    elemento = document.getElementById('nombre');
    elemento.focus();
    
    return false;
}       

valor = document.getElementById('mensaje').value.trim();

if (valor == null || valor.length == 0)
{


document.getElementById("msj").innerHTML = "Debes escribir un mensaje";
elemento = document.getElementById('mensaje');
element.focus();

return false;

}
return true
}


/* ESTE ES EL MAIL PERO NO ME LO TOMA, ME SALTA UN CARTEL AUTOMATICO


 valor = document.getElementById("email").value;
        
          
        if (!(/^\w+([\.-]?\w+)*@(?:|hotmail|outlook|yahoo|live|gmail|edu)\.(?:|com|ar)+$/.test(valor)))
        {
            document.getElementById('msjmail').innerHTML = "No es una direccion de email correcta";
            elemento = document.getElementById('email');
            elemento.focus();

            return false;
        }

return true
}


var formulario = document.getElementsByName('formulario')[0],
                elementos = formulario.elements,
                boton = document.getElementById('btn');
            var validarNombre = function(e){
                if (formulario.nombre.value == 0){
                    alert("Completa el campo nombre");
                    e.preventDefault();
                  
                }
            };

            var validarMensaje= function(e){
                if (formulario.mensaje.value == 0);{

                alert("Debes escribir un mensaje");
                e.preventDefault();

                }
            };

            var validar = function(e){
                validarNombre(e);
                validarMensaje(e);

        }
*/