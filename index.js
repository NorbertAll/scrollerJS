document.addEventListener('DOMContentLoaded', function(){
    const rootElement=document.querySelector('#root');
    const sections=document.querySelectorAll('section');
    let currentSectionIndex=0;
    let isThrottled=false;
    document.addEventListener('mousewheel', function(event){
        if(isThrottled) return;
        isThrottled=true;

        setTimeout(function(){
            isThrottled=false;
        }, 1000);

        const direction =event.wheelDelta < 0 ? 1 : -1;
        sroll(direction)
        
    })
    function sroll(direction){
        if(direction===1){
            let isLastSection=currentSectionIndex===sections.length-1;
            if(isLastSection) return;

        }else if(direction===-1){
            const firsSection=currentSectionIndex===0;
            if(firsSection) return;
        }
        currentSectionIndex=currentSectionIndex+direction;
        scrollToCurrentSection();
    }
    function scrollToCurrentSection(){
       sections[currentSectionIndex].scrollIntoView({
            beahavior: 'smooth',
            block: "start",
        }) 
    }
})