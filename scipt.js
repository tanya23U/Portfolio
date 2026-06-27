// Name Typing

const nameText = "Tanya Upadhyay";
let nameIndex = 0;

function typeName(){

if(nameIndex < nameText.length){

document.getElementById("nameTyping").innerHTML +=
nameText.charAt(nameIndex);

nameIndex++;

setTimeout(typeName,150);

}

}

typeName();


// Role Typing

const roles = [
"Full Stack Developer",
"Java Developer",
"Problem Solver",
"Open To Internship Opportunities"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement =
document.getElementById("typing");

function typeEffect(){

if(charIndex < roles[roleIndex].length){

typingElement.textContent +=
roles[roleIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}
else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(charIndex > 0){

typingElement.textContent =
roles[roleIndex].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,50);

}
else{

roleIndex++;

if(roleIndex >= roles.length){
roleIndex = 0;
}

setTimeout(typeEffect,300);

}

}

typeEffect();


// Scroll To Top

document.getElementById("topBtn")
.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});