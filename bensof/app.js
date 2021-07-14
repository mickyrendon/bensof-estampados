


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
const lightbox = document.querySelector('.z-index');
    //   lightbox.style.display = 'none';


const closing = () => {
    let status = menuLista.style.display;
    // let ligtboxStatus = menuLista.style.display
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
// const carouselModalContainer = document.querySelector('.carousel-modal-container');
//       carouselModalContainer.style.display = 'none'; 












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