// ver mas ver menos x
const seeMoreBtn = document.querySelector('.see-more');
      seeMoreBtn.style.backgroundImage = 'url(/assets/arrowDown.png)';        seeMoreBtn.style.backgroundRepeat = 'no-repeat';

const seeMoreSections = document.querySelector('.see-more-section');
      seeMoreSections.style.width = '100%';
      seeMoreSections.style.display = 'none';

seeMoreBtn.addEventListener('click', down, true);

// agregar efectos agradables al plegar y desplegar.... ease-in etc
function down(e){
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
}

// menu mobile
const menuBtn = document.querySelector('.menu');
      menuBtn.style.background = '#ffff'
const menuLista = document.querySelector('.ul-list');
      menuLista.style.display = 'none';

// evento
menuBtn.addEventListener('click', dropdown, true);

function dropdown(e){
    let status = menuLista.style.display;
    console.log('clickeando menu mobile');

    if(status == 'none'){
    
        console.log('menu desplegado');
        e.target.style.background = 'red';
        menuLista.style.display = 'block';

    }else{
        
        console.log('menu plegado');
        e.target.style.background = '#ffff';
        menuLista.style.display = 'none';

    };

};