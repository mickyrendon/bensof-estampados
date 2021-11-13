// validador de caracteres alfabeticos (pattern)
const alfa   = new RegExp('^[A-Z]+$', 'i');
const beta   = new RegExp('.+@gmail.com');
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
            isValid = true;
            console.log(isValid);
        }
    }
    console.log('testing validation');
}

submitBtn.addEventListener('click', validation, true);