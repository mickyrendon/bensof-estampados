const fName     = document.getElementById('name');
const fEmail    = document.getElementById('email');
const fTextArea = document.getElementById('textarea');
// menu mobile
const menuBtn = document.querySelector('.menu');
    //   menuBtn.style.background = '#ffff'
// const menuLista = document.querySelector('.ul-list');
//       menuLista.style.display = 'none';
const menuLista = document.querySelector('.z-index-menu');
      menuLista.style.display = 'none';
const close = document.querySelector('.close');
    //   close.style.backgroundImage = 'url(/assets/close.png)'
      close.style.display = 'none'

// evento
menuBtn.addEventListener('click', dropdown, true);

function dropdown(e){
    let status = menuLista.style.display;
    console.log('clickeando menu mobile');

    if(status == 'none'){
    
        console.log('menu desplegado');
        // efecto sandwich e.target
        // e.target.style.background = 'red';
        menuLista.style.display = 'block';
        close.style.display = 'block'

    }
// este codigo se puede utilizar en el menu desktop
    /* else{ 
        
        console.log('menu plegado');
        e.target.style.background = '#ffff';
        menuLista.style.display = 'none';
        close.style.display = 'none';

    }; */

};
const servicesBtn  = document.querySelector('.services-anchor');
const productsBtn  = document.querySelector('.products-anchor');
const usBtn        = document.querySelector('.us-anchor');
const questionsBtn = document.querySelector('.questions-anchor');
const contactBtn   = document.querySelector('.contact-anchor');

// ligthbox
// const lightbox = document.querySelector('.z-index');
//       lightbox.style.display = 'none';


const closing = () => {
    let status = menuLista.style.display;
    // || ligtboxStatus == 'block'

    if(status == 'block' ){

        console.log('menu plegado');
        // e.target.style.background = '#ffff';
        menuLista.style.display = 'none';
        // lightbox.style.display = 'none';
        close.style.display = 'none';
    }
 
    return `lista modo: ${status}`;
}

close.addEventListener('click', closing, true);
servicesBtn.addEventListener('click', closing, true);
productsBtn.addEventListener('click', closing, true);
usBtn.addEventListener('click', closing, true);
questionsBtn.addEventListener('click', closing, true);
contactBtn.addEventListener('click', closing, true);


// modal al clickear en las imagenes del carrusel
const carouselModalContainer = document.getElementsByClassName('carousel-modal-container');
var array    = [];
var arraySrc = [];

for(i=0; i < carouselModalContainer.length; i++){
    array.push(carouselModalContainer[i]);
    arraySrc.push(carouselModalContainer[i].firstElementChild.src);
}

const lightbox = () => {
    console.log('funcionando la funcion ligthbox');
    // let arrayLightBox = arraySrc;

    // Creando las etiquetas del lightbox
    const lightBoxContainer = document.createElement('div', 'class');
    const closeBtn          = document.createElement('button', 'class');
    const iconClose         = document.createElement('i', 'class');
    const carouselContainer = document.createElement('div', 'class');
    const leftArrow         = document.createElement('button', 'class');
    const spanLeft          = document.createElement('span', 'class');
    const spanLNext         = document.createElement('span', 'class');
    const rightArrow        = document.createElement('button', 'class');
    const spanRight         = document.createElement('span', 'class');
    const spanRNext         = document.createElement('span', 'class');
    
    // agregando clases a los elementos
    lightBoxContainer.classList.add('z-index-menu');
    lightBoxContainer.style.display = 'flex';
    lightBoxContainer.style.top = '0px';

    closeBtn.classList.add('close');
    iconClose.classList.add('bi','bi-x-lg', 'close-icon');   

    carouselContainer.classList.add('carousel-container');
    carouselContainer.style.margin = 'auto';
    carouselContainer.style.width = '90vw';
    carouselContainer.style.height = '600px';
    carouselContainer.style.display = 'flex';
    carouselContainer.style.justifyContent = 'space-between';
    carouselContainer.style.backgroundSize = '100%';
    carouselContainer.style.backgroundRepeat = 'no-repeat';
    carouselContainer.style.backgroundPosition = 'center';
    // carouselContainer.style.backgroundImage = "url('this.src')";
// poner la url de la imagen que cliqueamos
    // carouselContainer.style.backgroundImage = url('');
    carouselContainer.style.border = '1px solid red';
    // buscarle la vuelta uSAR PROMESAS
        // carouselContainer.style.backgroundImage = "url('arrayLightBox[i]')";





    leftArrow.classList.add('carousel-control-next');       
    leftArrow.style.position = 'relative';       
    spanLeft.classList.add('carousel-control-prev-icon');
    spanLNext.classList.add('visually-hidden');
    
    rightArrow.classList.add('carousel-control-next');       
    rightArrow.style.position = 'relative';       
    spanRight.classList.add('carousel-control-next-icon');      
    spanRNext.classList.add('visually-hidden');      
    


// posible selector multiple para los elementos de la misma clase
    // const arrowBtns = document.getElementsByClassName('carousel-control-next');
    //       arrowBtns.style.position = 'relative';
    // agregando los elementos a un nodo/ identacion para una mejor comprension del nodo
    document.body.appendChild(lightBoxContainer);
        lightBoxContainer.appendChild(closeBtn);
            closeBtn.appendChild(iconClose);
        lightBoxContainer.appendChild(carouselContainer);
            carouselContainer.appendChild(leftArrow);
                leftArrow.appendChild(spanLeft);
                leftArrow.appendChild(spanLNext);
            carouselContainer.appendChild(rightArrow);
                rightArrow.appendChild(spanRight);
                rightArrow.appendChild(spanRNext);


// funcionalidad del boton cerrar
    closeBtn.addEventListener('click', closed, true);

    function closed(){
        lightBoxContainer.style.display = 'none';
    }
     
    //    srcFor();
    // e.target.style.backgroundImage.url = ''
}

// revisar
// carouselModalContainer.addEventListener('click', ligthbox, true);
const loop = () => {
    let arrayLoop = array;
    // let carouselContainer = document.getElementsByClassName('carousel-container');
    for(i=0; i < arrayLoop.length; i++){
        console.log(this.src);
    }
//    if()  
    return `retornando cada elemento del array ${arrayLoop}`;
}
loop();




// capturar las teclas presionadas
function onKeyDown(event) {
    // captura el nombre de cada tecla
    const key = event.key;
    //captura el codigo de cada tecla
    var codigo = event.which || event.keyCode;

    //la definicion del key (Enter) es camelcase
    if(key == 'Enter'){
        return console.log('tecla Enter presionada');
    }
    
    //capturando el valor de 'spacebar'.
    if(codigo == 32){
        alert('prohibido ingresar espacios en blanco');
        // no funciona a la primera vez, corregir
        cleaner(); 
    }

    return console.log(`'Presionada: ' ${key}`);
};

//funcion limpiadora
function cleaner(){
    // inpu
}

// validaciones al form


function validation(){
    let isValid        = false;
    const fNameVal     = document.getElementById('name').value;
    const fEmailVal    = document.getElementById('email').value;
    const fTextAreaVAl = document.getElementById('textarea').value;
    const submitBtnVal = document.getElementById('submitBtn');

    if(fNameVal.length == 0){
        isValid = false;
        console.log('nombre en cero');
        alert('ingrese un valor')
    }else{
        isValid = true;
    }
}

submitBtn.addEventListener('click', validation, true);

// CORREGIR LA MANERA DE ACCEDER AL FORMULARIO
// let formulario = document.form['id del form];

// if(arraySrc.length < 5){//PROMESAS
// if(lightbox){
//     // promise()
//     console.log('retornando promise en el if');
// }else{
//     console.log('else del if en promise');
// }
// meter esto en una funcion para que se ejecute cuando sea necesario
// function promise(){


    
    // for(i=0; i < arraySrc.length; i++){
    //     console.log('en el for del if');
        
    //     document.querySelector('.carousel-container').style.backgroundImage = "url('arraySrc[i]')";
    // };   
// }
// imagenes del array // usar una funcion callback
// function srcFor(){
    
//     if(loop){
        
//         let arrayLightBox = arraySrc;
//         for(i=0; i < arrayLightBox.length; i++){
//             console.log('en el for del if');

//             carouselContainer[i].style.backgroundImage = "url('arrayLightBox[i]')";
//         }   
//         console.log(`mostrando el ${arrayLightBox[0]}`);

//     }   
//     // return arrayLightBox;
// }



// if(lightbox){
    // document.querySelector('.close').addEventListener('click', closing, true);
// }
// var testElements = document.getElementsByClassName('test');


 /* 
  <div class="z-index" id="img1">
      <button class="close">
      </button>
      <div class="image" >
          <img src="https://i.pinimg.com/originals/c3/d9/30/c3d9308f2e81b7114aab72455a2a2ede.jpg"  class="d-block w-100" alt="..."><!-- " --
      </div>
  </div> 
  */






// CODIGO EXTRA.... PARA GUARDAR EN OTRAS CARPETAS

// BOTON DESPLEGABLE " VER MAS"

// ver mas ver menos x
/* const seeMoreBtn = document.querySelector('.see-more');
      seeMoreBtn.style.backgroundImage = 'url(/assets/arrowDown.png)';        seeMoreBtn.style.backgroundRepeat = 'no-repeat'; */
/* 
      const seeMoreSections = document.querySelector('.see-more-section');
      seeMoreSections.style.width = '100%';
      seeMoreSections.style.display = 'none'; */

// seeMoreBtn.addEventListener('click', down, true);

// agregar efectos agradables al plegar y desplegar.... ease-in etc
/* function down(e){
    let status = seeMoreSections.style.display;
    console.log('clickeando boton ver más');

    if (status == 'none'){
        
        console.log('seccion desplegada');
        e.target.style.backgroundImage = 'url(/assets/arrowUp.png)';
        seeMoreSections.style.display = 'block';

    }else{
        
        console.log('seccion plegada');
        e.target.style.backgroundImage = 'url(/assets/arrowDown.png)';
        seeMoreSections.style.display = 'none';

    };
} */