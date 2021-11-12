// validador de caracteres alfabeticos (pattern)
const alfa   = new RegExp('^[A-Z]+$', 'i');
const beta   = new RegExp('.+@gmail.com');
// validaciones al form
const fName     = document.getElementById('name');
const fEmail    = document.getElementById('email');
var isValid     = false;


function validation(){
    if(fName.value.length < 2 || !alfa.test(fName)){
        isValid = false;
        console.log('nombre en cero');
        alert('solo letras de la a-z minusculas o mayusculas');
        fName.value = '';
        // cleaner()
    }else{
        isValid = true;
        console.log(isValid);
    }
    console.log('testing validation');
}

// validation()
//esta tirando un error en el console/ VERIFICAR
submitBtn.addEventListener('click', validation, true);

// limpiar campos al despues de validar la info