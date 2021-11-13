// adding pictures to form
const btnAddPic = document.getElementById('add-images');
function bntPic(event){
    let files = document.getElementById('files');
    // files.classList.remove('hidden');
    files.hidden = false;

    event.target.hidden = true;
    // event.target.classList.add('hidden');
    console.log('clickeado');
}

btnAddPic.addEventListener('click', bntPic, false);