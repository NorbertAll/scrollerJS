document.addEventListener('DOMContentLoaded', function(){
    const rootElement=document.querySelector('#root');
    const sections=document.querySelectorAll('section');
    let currentSectionIndex=0;
    document.addEventListener('mousewheel', function(event){
        const direction =event.wheelDelta < 0 ? 1 : -1;
        
        if(direction===1){
            let isLastSection=currentSectionIndex===sections.length-1;
            if(isLastSection) return;

        }else if(direction===-1){
            const firsSection=currentSectionIndex===0;
            if(firsSection) return;
        }
        currentSectionIndex=currentSectionIndex+direction;
        sections[currentSectionIndex].scrollIntoView({
            beahavior: 'smooth',
            block: "start",
        })
    })
})