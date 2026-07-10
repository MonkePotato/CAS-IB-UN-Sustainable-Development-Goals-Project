const cards = document.querySelectorAll(".reference-card");

cards.forEach(card => {

    card.addEventListener("click", function(e){

        // Allow hyperlinks to work normally
        if(e.target.tagName.toLowerCase() === "a") return;

        this.classList.toggle("active");

    });

});