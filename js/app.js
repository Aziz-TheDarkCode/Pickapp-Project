let cardBefore= document.querySelectorAll(".card__product");
cardBefore.forEach(elem=>{
    elem.addEventListener("mouseenter",x=>{
        if(x.target.className == 'card card__product'){
            x.target.app
        }
    })
    elem.addEventListener("mouseleave",x=>{
        if(x.target.className == 'card card__product'){
            console.log(x.target.className);
        }
    })
})