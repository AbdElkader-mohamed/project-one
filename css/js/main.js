
let arr =  [...document.querySelector(".ul").children];
arr.forEach(cil => {
    
    cil.addEventListener("click", function() {
        
        cil.parentElement.classList.remove("open");
        
    })
})

document.querySelector(".nav .icon").onclick = function (){
    
    document.querySelector(".ul").classList.add("open") ;
    
}

