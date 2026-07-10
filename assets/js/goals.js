const goals=[

{
id:1,
title:"No Poverty",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-01.jpg",
text:"End poverty in all its forms everywhere. IB students can contribute through volunteering, fundraising, and understanding inequality."
},

{
id:2,
title:"Zero Hunger",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-02.jpg",
text:"End hunger and promote sustainable agriculture. Students can reduce food waste and support food security projects."
},

{
id:3,
title:"Good Health and Well-being",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-03.jpg",
text:"Promote healthy lives. IB students can advocate for mental health awareness and healthy lifestyles."
},

{
id:4,
title:"Quality Education",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-04.jpg",
text:"Ensure inclusive education. Students can tutor peers and support educational equality."
},

{
id:5,
title:"Gender Equality",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-05.jpg",
text:"Achieve equality for all genders through awareness and advocacy."
},


{
id:6,
title:"Clean Water and Sanitation",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-06.jpg",
text:"Protect water resources and improve sanitation."
},

{
id:7,
title:"Affordable and Clean Energy",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-07.jpg",
text:"Increase access to renewable energy."
},


{
id:8,
title:"Decent Work and Economic Growth",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-08.jpg",
text:"Support fair employment and sustainable economies."
},


{
id:9,
title:"Industry Innovation and Infrastructure",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-09.jpg",
text:"Encourage innovation and sustainable technology."
},


{
id:10,
title:"Reduced Inequalities",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-10.jpg",
text:"Reduce inequality within societies."
},


{
id:11,
title:"Sustainable Cities",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-11.jpg",
text:"Create inclusive and sustainable communities."
},


{
id:12,
title:"Responsible Consumption",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg",
text:"Promote sustainable production and consumption."
},


{
id:13,
title:"Climate Action",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg",
text:"Take urgent action against climate change."
},


{
id:14,
title:"Life Below Water",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-14.jpg",
text:"Protect oceans and marine ecosystems."
},


{
id:15,
title:"Life on Land",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-15.jpg",
text:"Protect biodiversity and ecosystems."
},


{
id:16,
title:"Peace Justice and Strong Institutions",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-16.jpg",
text:"Build peaceful and inclusive societies."
},


{
id:17,
title:"Partnerships for the Goals",
icon:"https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-17.jpg",
text:"Strengthen global cooperation."
}

];



const container=document.getElementById("goalContainer");


function displayGoals(data){


container.innerHTML="";


data.forEach(goal=>{


container.innerHTML+=`

<div class="sdg-card"
onclick="openGoal(${goal.id})">

<img src="${goal.icon}">

<h3>
${goal.id}. ${goal.title}
</h3>

</div>

`;

});


}


displayGoals(goals);



document
.getElementById("search")
.addEventListener("keyup",function(){


let value=this.value.toLowerCase();


let filtered=goals.filter(goal=>

goal.title.toLowerCase().includes(value)

);


displayGoals(filtered);


});





function openGoal(id){


let goal=goals.find(g=>g.id===id);


document.getElementById("modalIcon").src=goal.icon;

document.getElementById("modalTitle").innerHTML=
goal.title;


document.getElementById("modalText").innerHTML=
goal.text;


document.getElementById("goalModal").style.display="flex";


}



document
.getElementById("close")
.onclick=function(){

document.getElementById("goalModal").style.display="none";

};
