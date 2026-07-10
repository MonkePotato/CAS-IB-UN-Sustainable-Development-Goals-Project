const resourceCards = document.querySelectorAll(".resource-card");

resourceCards.forEach(card => {

    card.addEventListener("click", function(e){

        // Don't collapse if clicking the actual hyperlink
        if(e.target.tagName.toLowerCase() === "a") return;

        this.classList.toggle("active");

    });

});