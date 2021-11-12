function onKeyUpName(event){
    const codigo    = event.which || event.keyCode;
    const spaceBar  = codigo == 32; 
    const fnameReplace = fName.value.replace(/ /g, "");

    if(fName.value.length < 2 && spaceBar){
        alert('prohibido ingresar espacios');
        fName.value = fnameReplace;
        console.log('funcion onkeyup fname');
    }
}
function onKeyUpEmail(event){
    const codigo    = event.which || event.keyCode;
    const spaceBar  = codigo == 32; 
    const fEmailReplace = fEmail.value.replace(/ /g, "");

    if(spaceBar){
        alert('prohibido ingresar espacios');
        fEmail.value = fEmailReplace;
        console.log('funcion onkeyup femail');
    }
}
fName.addEventListener('keyup', onKeyUpName, true);
fEmail.addEventListener('keyup', onKeyUpEmail, true);



  // capturar las teclas presionadas
// function onKeyDown(event) {
//     // captura el nombre de cada tecla
//     const key = event.key;
//     //captura el codigo de cada tecla
//     var codigo = event.which || event.keyCode;
//     let spaceBar = codigo == 32;
//     let isValid = false;

//     const validationSpaceBar = ()=>{
//         if(spaceBar){
//             alert('prohibido ingresar espacios en blanco');
//             // no funciona a la primera vez, corregir
//             cleaner(); 
//         }
//     }

//     //la definicion del key (Enter) es camelcase
//     if(key == 'Enter'){
//         return console.log('tecla Enter presionada');
//     }
    
//     //mejorar esta validacion por un isValid como en el repo del login
//     // console.log('campos de textos con mas de 2 valores');
//     if(fName.value.length > 2 && fEmail.value.length > 1){
//         isValid = false;
//         console.log('validacion es falsa');
//     }else{
//         isValid = true;
//         validationSpaceBar()
//         console.log(isValid);
//     }

//     // }   
//     // if(fName.value.length < 2 || fEmail.value.length > 0){
//     //     validationSpaceBar()
//     // }
   

//     return console.log(`'Presionada: ' ${key}`);
// };