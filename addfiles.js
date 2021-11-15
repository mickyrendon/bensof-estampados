// adding pictures to form
const btnAddPic = document.getElementById('add-images');
function bntPic(event){
    let files = document.getElementById('files');
    // files.classList.remove('hidden');
    files.hidden = false;

    btnAddPic.classList.add('hidden');
    console.log('clickeado');
}

btnAddPic.addEventListener('click', bntPic, false);