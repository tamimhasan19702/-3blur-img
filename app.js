const img = document.querySelector('.img');
const text = document.querySelector('.text');

let load = 0;

let loadTime = setInterval(blur,30);

function blur(){
    load++

     if(load > 99){
         clearInterval(loadTime);
     }


    text.innerText =  `${load}%`
    text.style.opacity = scale(load, 0 , 100, 1 , 0)
    img.style.filter = `blur(${scale(load,0,100,50,0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}