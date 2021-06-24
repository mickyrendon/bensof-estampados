const seeMoreBtn = document.querySelector('.see-more');
const element1   = document.querySelector('.secciones');

// ver mas ver menos 
function down(e){

}

// menu mobiless/hacer que suba
const menuBtn = document.querySelector('.menu');
const menuLista = document.querySelector('.ul-list');
      menuLista.style.display = 'none';


let pushDown = menuBtn.addEventListener('click', dropdown, true);
let pushUp   = menuBtn.addEventListener('click', dropup, true);  

function dropdown(e){
    e.target.style.background = 'red';
    menuLista.style.display = 'block'
    console.log('target');
    menuBtn.removeEventListener('click', dropdown, false);

}
function dropup(e){
    e.target.style.background = 'blue';
    menuLista.style.display = 'none'
    console.log('target up');
    menuBtn.removeEventListener('click', dropup, false);

}

// if(!checked){
//     e.target.style.background = 'blue';
//     menuLista.style.display = 'none';
//     console.log('if de target');
// }else{
//      checked
// }
