const resourceCards = document.querySelectorAll(".resource-card");

resourceCards.forEach(card => {

    card.addEventListener("click", function(e){

        if(e.target.tagName.toLowerCase() === "a") return;

        this.classList.toggle("active");

    });

});
