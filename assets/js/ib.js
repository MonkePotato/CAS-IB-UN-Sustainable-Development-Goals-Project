const ideas = [

{
title:"🌱 Plastic-Free Week",
description:"Lead a one-week campaign encouraging reusable bottles, lunch containers and recycling around school.",
sdgs:"12 • 13"
},

{
title:"📚 Peer Tutoring Programme",
description:"Tutor younger students in Mathematics, Science or English to improve learning opportunities.",
sdgs:"4 • 10"
},

{
title:"🌳 Biodiversity Survey",
description:"Survey local biodiversity around your school and present recommendations to improve green spaces.",
sdgs:"13 • 15"
},

{
title:"🚲 Sustainable Transport Challenge",
description:"Encourage classmates to walk, cycle or use public transport for one week.",
sdgs:"11 • 13"
},

{
title:"💧 Water Conservation Campaign",
description:"Audit water usage around school and create posters promoting responsible water use.",
sdgs:"6 • 12"
},

{
title:"💡 School Energy Audit",
description:"Measure electricity consumption and recommend simple ways to reduce unnecessary energy use.",
sdgs:"7 • 13"
},

{
title:"🌍 Community Clean-Up",
description:"Organise a litter collection event with classmates in a nearby park or neighbourhood.",
sdgs:"11 • 15"
},

{
title:"🍎 Food Waste Awareness",
description:"Investigate food waste in your school canteen and suggest practical improvements.",
sdgs:"2 • 12"
},

{
title:"💻 Sustainability Website",
description:"Develop a website or app that teaches others about the Sustainable Development Goals.",
sdgs:"4 • 9"
},

{
title:"🎤 SDG Awareness Workshop",
description:"Host a presentation introducing younger students to the Sustainable Development Goals.",
sdgs:"4 • 17"
}

];

const title=document.getElementById("idea-title");
const description=document.getElementById("idea-description");
const sdgs=document.getElementById("idea-sdgs");
const button=document.getElementById("generate-btn");

button.addEventListener("click",()=>{

const random=ideas[Math.floor(Math.random()*ideas.length)];

title.textContent=random.title;
description.textContent=random.description;
sdgs.textContent="Relevant SDGs: "+random.sdgs;

});