const questions = [

{
question:
"Which SDG focuses on climate change?",
answers:[
"Goal 3",
"Goal 7",
"Goal 13",
"Goal 16"
],
correct:2
},


{
question:
"How many Sustainable Development Goals exist?",
answers:[
"10",
"17",
"25",
"50"
],
correct:1
},


{
question:
"Which IB activity is most directly linked to community action?",
answers:[
"TOK",
"CAS",
"Exams",
"Homework"
],
correct:1
},


{
question:
"Which goal focuses on protecting oceans?",
answers:[
"Goal 14",
"Goal 5",
"Goal 1",
"Goal 8"
],
correct:0
}


];


let current=0;

let score=0;


const question=document.getElementById("question");

const answers=document.getElementById("answers");

const next=document.getElementById("next");



function loadQuestion(){


let q=questions[current];


question.innerHTML=q.question;


answers.innerHTML="";


q.answers.forEach((answer,index)=>{


let button=document.createElement("div");


button.className="answer";


button.innerHTML=answer;



button.onclick=()=>{


document.querySelectorAll(".answer")
.forEach(a=>a.classList.remove("selected"));


button.classList.add("selected");


button.dataset.choice=index;


};


answers.appendChild(button);


});


}



next.onclick=function(){


let selected=document.querySelector(".selected");


if(!selected){

alert("Please select an answer");

return;

}



if(
Number(selected.dataset.choice)
===questions[current].correct
){

score++;

}


current++;


if(current < questions.length){

loadQuestion();

}

else{


document.getElementById("quizBox")
.classList.add("hidden");


document.getElementById("result")
.classList.remove("hidden");



document.getElementById("score")
.innerHTML=
`You scored ${score}/${questions.length}`;



let message="";


if(score===questions.length){

message=
"Excellent! You have strong SDG awareness.";

}

else if(score>=2){

message=
"Great understanding! Keep learning and taking action.";

}

else{

message=
"Every sustainability journey starts with learning.";

}



document.getElementById("message")
.innerHTML=message;


}


};



loadQuestion();