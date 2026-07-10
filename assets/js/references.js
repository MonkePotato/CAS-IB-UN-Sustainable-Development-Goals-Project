const cards = document.querySelectorAll(".reference-card");

cards.forEach(card => {

    card.addEventListener("click", function(e){

        if(e.target.tagName.toLowerCase() === "a") return;

        this.classList.toggle("active");

    });

});
