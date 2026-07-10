const toggle =
document.querySelector(".menu-toggle");


const nav =
document.querySelector(".nav-links");



if(toggle){

toggle.onclick=function(){

nav.classList.toggle("active");

}

}





const themeButton =
document.getElementById("theme-toggle");



if(themeButton){


themeButton.onclick=function(){


document.body.classList.toggle("light");


localStorage.setItem(
"theme",
document.body.classList.contains("light")
);


}


}





if(
localStorage.getItem("theme")
==="true"
){

document.body.classList.add("light");

}





window.addEventListener(
"scroll",
()=>{


const nav =
document.querySelector("nav");


if(window.scrollY>50){

nav.classList.add("scrolled");

}

else{

nav.classList.remove("scrolled");

}


});

// Scroll reveal animation


const revealElements =
document.querySelectorAll(
".card, .image-card, .action-card, .subject-grid div"
);



window.addEventListener(
"scroll",
()=>{


revealElements.forEach(element=>{


const position =
element.getBoundingClientRect().top;


if(position < window.innerHeight - 100){

element.style.opacity="1";

element.style.transform="translateY(0)";

}


});


});

// Mobile navigation


const menuToggle =
document.querySelector(".menu-toggle");


const navLinks =
document.querySelector(".nav-links");



if(menuToggle){


menuToggle.onclick = ()=>{


navLinks.classList.toggle("active");


};


}

