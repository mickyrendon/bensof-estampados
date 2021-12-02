// index1 and index2 footer animations
const index1Animation = function(){
    const img0 = document.querySelector('.h3-animate');
    const img1 = document.querySelector('.us-text-content');
    const img2 = document.querySelector('.form');
    const img3 = document.querySelector('.logo-txt-container-footer');
    const img4 = document.querySelector('.networks-container');
    const array = [img0, img1, img2, img3, img4]; 

    array.forEach((i, value)=>{
        if(i !== null){
            i.classList.add('opacity');
            const vHeight = window.innerHeight/1;
            const distance = i.getBoundingClientRect().top;

            // console.log(vHeight);
            // console.log(distance);

            if(distance <= vHeight && value === 0){
                i.classList.add('animate__animated', 'animate__fadeInDown');
            }else{
                i.classList.remove('animate__animated', 'animate__fadeInDown');

                if(distance <= vHeight && value === 1){
                    i.classList.add('animate__animated', 'animate__fadeInUp');
                }else{
                    i.classList.remove('animate__animated', 'animate__fadeInUp');

                    if(distance <= vHeight && value === 2){
                        i.classList.add('animate__animated', 'animate__pulse');
                        i.classList.remove('opacity');
                    }else{
                        i.classList.remove('animate__animated', 'animate__pulse');

                        if(distance <= vHeight && value === 3){
                            i.classList.add('animate__animated', 'animate__fadeInRight');
                        }else{
                            i.classList.remove('animate__animated', 'animate__fadeInRight');

                            if(distance <= vHeight && value === 4){
                                i.classList.add('animate__animated', 'animate__fadeIn');
                            }else{
                                i.classList.remove('animate__animated', 'animate__fadeIn');
                            } 
                        }    
                    }
                }
            }
        
            return i;
        }    
    });

}
