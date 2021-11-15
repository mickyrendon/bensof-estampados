// validador de caracteres alfabeticos (pattern)
const alfa   = new RegExp('^[A-Z]+$', 'i');
const beta   = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
// validaciones al form
const fName     = document.getElementById('name');
const fEmail    = document.getElementById('email');
var isValid     = false;


function validation(){
    if(fName.value.length < 2){
        isValid = false;
        alert('Solo nombres con más de dos caracteres');
        fName.value = '';
    }else{
        if(!alfa.test(fName.value)){
            isValid = false;
            // console.log(alfa.test(fName.value));
            alert('Solo letras de la a-z minusculas o mayusculas');
            fName.value = '';
        }else{
            if(!beta.test(fEmail.value)){
                isValid = false;
                alert('ingrese un formato valido de email "@, .com"');
                fEmail.value = ''
            }else{
                isValid = true;
                console.log(isValid);
            }
        }
    }
    console.log('testing validation');
}

submitBtn.addEventListener('click', validation, true);


// info util que extraje de stackOverflow.es
/* 
Existen ciertas restricciones para emails pero puedo comentar que regularmente deben basarse en estas reglas:

        Mayúsculas y minúsculas del alfabeto ingles.
        Números de 0 al 9
        puede contener punto pero no al inicio o repetirse.
        puede usar los caracteres: !#$%&'*+-/=?^_`{|}~

Existen restricciones con ciertos tipos de email por ejemplo si contienen:

        Alfabeto griego.
        Caracteres cirílicos.
        Caracteres japoneses.
        Alfabeto latín con diacríticos.

ejemplos no aceptados como direcciones validas de email:

червь.ca®rton@picnic.com

josé.patroñinio@hotdog.com
 */