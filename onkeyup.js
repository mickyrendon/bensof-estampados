// spacebar code for inputs like 'name' and 'email'
function onKeyUp(event){
    const codigo    = event.which || event.keyCode;
    const spaceBar  = codigo == 32; 
    const fs = fEmail.value.replace(/ /g, "") || fName.value.replace(/ /g, "");
    
    if(spaceBar){
        alert('prohibido ingresar espacios');
        event.target.value = fs;
        console.log('funcion onkeyup fs');
    }
}
fName.addEventListener('keyup', onKeyUp, true);
fEmail.addEventListener('keyup', onKeyUp, true);