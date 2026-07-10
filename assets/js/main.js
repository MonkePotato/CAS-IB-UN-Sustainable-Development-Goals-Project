const menuToggle=document.querySelector(".menu-toggle");

const navLinks=document.querySelector(".nav-links");

if(menuToggle&&navLinks){

menuToggle.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

}

const themeButton=document.getElementById("theme-toggle");

if(localStorage.getItem("theme")==="true"){

document.body.classList.add("light");

}

if(themeButton){

themeButton.addEventListener("click",()=>{

document.body.classList.toggle("light");

localStorage.setItem(

"theme",

document.body.classList.contains("light")

);

});

}

const navbar=document.querySelector("nav");

window.addEventListener("scroll",()=>{

if(!navbar)return;

if(window.scrollY>50){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}

});

const revealElements=document.querySelectorAll(

".card, .image-card, .action-card, .subject-grid div, .sdg-card, .resource-card, .reference-card, .reflection-card, .journey-card, .content"

);

function revealOnScroll(){

revealElements.forEach(element=>{

const position=element.getBoundingClientRect().top;

if(position<window.innerHeight-100){

element.style.opacity="1";

element.style.transform="translateY(0)";

}

});

}

window.addEventListener("scroll",revealOnScroll);

window.addEventListener("load",revealOnScroll);
