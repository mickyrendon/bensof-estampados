// index2 animations
const arraySubtitle = function(){
    const img4Array = document.querySelectorAll('.subtitle');
    img4Array.forEach(i => {
        i.classList.add('opacity');
        const vHeight = window.innerHeight/1.1;
        const distance = i.getBoundingClientRect().top;
    
        if(distance <= vHeight){
            i.classList.add('animate__animated', 'animate__fadeInLeft');
        }else{
            i.classList.remove('animate__animated', 'animate__fadeInLeft');
        }
        return i;
    })
}  
// const arrayNetworks = function(){
//     const networks = document.querySelectorAll('.');
//     networks.forEach(i => {
//         i.classList.add('opacity');
//         const vHeight = window.innerHeight/1.1;
//         const distance = i.getBoundingClientRect().top;
    
//         if(distance <= vHeight){
//             i.classList.add('animate__animated', 'animate__fadeInLeft');
//         }else{
//             i.classList.remove('animate__animated', 'animate__fadeInLeft');
//         }
//         return i;
//     })
// }  