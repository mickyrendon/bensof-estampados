// var array    = [];
// var arraySrc = [];

// for(i=0; i < carouselModalContainer.length; i++){
//     array.push(carouselModalContainer[i]);
//     arraySrc.push(carouselModalContainer[i].firstElementChild.src);
// }
// modal al clickear en las imagenes del carrusel
const carouselModalContainer = document.getElementsByClassName('carousel-modal-container');
// const url = carouselModalContainer[0].lastElementChild.src;
// const url = carouselModalContainer[0].children.attributes.src.value;
// carouselModalContainer.index
const modalHtml = () => {
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
    document.body.classList.add('no-scroll');
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
    // carouselContainer.style.backgroundImage = url;
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
    lightBoxContainer.innerHTML = carouselInner;
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
        document.body.classList.remove('no-scroll');
    }
    
    //    srcFor();
    // e.target.style.backgroundImage.url = ''
}
const carouselInner = () => {
    console.log('modal carousel');
    let html = `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="/assets/services-img/bordado-a-mano.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
        <img src="..." class="d-block w-100" alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>`;

    return html;
}

const lightbox = () => {
    console.log('activada la funcion ligthbox');
    // let arrayLightBox = arraySrc;
    return modalHtml();
    
}
// recorriendo los elementos del objeto carousel/ permite clickear en cualquier img y asi mostrar el modal
for(let i = 0; i < carouselModalContainer.length; i++){
    carouselModalContainer[i].addEventListener('click', lightbox, true);
    console.log('clickeando la img del carousel');
}


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