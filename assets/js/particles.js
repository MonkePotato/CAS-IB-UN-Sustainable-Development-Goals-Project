const background =
document.querySelector(".background");


for(let i=0;i<80;i++){


let particle =
document.createElement("span");


particle.className="particle";


particle.style.left =
Math.random()*100+"%";


particle.style.top =
Math.random()*100+"%";


particle.style.animationDelay =
Math.random()*5+"s";


background.appendChild(particle);


}