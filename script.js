$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.tabs').tabs();
});


AOS.init({
duration: 2000,
});

//KORTTILISTA

document.addEventListener('DOMContentLoaded', function() {
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    setTimeout(() => {
        card.classList.add('visible');
    }, index * 370); 
});
});

//OTSIKKKKOO////////

let text = "'cause I dont Know what to say";
let index = 1; 


const typeWriter = setInterval(() => {
const element = document.querySelector("h6");


element.textContent = text[0] + text.slice(1, index);

index += 1;

if (index > text.length) {
index = 1;  
}

}, 200);


// STARScodepen//////////////////////

var stars = document.querySelectorAll("span")

var i = stars.length;

while (i--) {

var delay = (Math.random() * (-2 - 0) + 0).toFixed(1)
delay *= Math.floor(Math.random() * 2) == 1 ? 1 : -1

// Randomize duration
var duration = (Math.random() * (2 - 4) + 4).toFixed(1)

// Randomize scale
var scale = (Math.random() * (0.2 - 1) + 1).toFixed(1)

// Randomize coordinates
var x = (Math.random() * (0 - 30) + 60).toFixed(1)
x *= Math.floor(Math.random() * 2) == 1 ? 1 : -1
var y = (Math.random() * (0 - 30) + 60).toFixed(1)
y *= Math.floor(Math.random() * 2) == 1 ? 1 : -1

// Set styles
stars[i].style.animationDelay = delay + "s"
stars[i].style.animationDuration = duration + "s"
stars[i].style.transform = 'scale(' + scale + ') translate(' + x + '% ,' + y + '%)'
}

/////////////STATS///////////////
document.addEventListener('DOMContentLoaded', function() {
var elems = document.querySelectorAll('.modal');
M.Modal.init(elems, {});
});

///////////////////////HEROEEEEEEEEEEEES/////////////////////
function showContent(contentId) {

var contents = document.querySelectorAll('.content-box1');
contents.forEach(function(content) {
content.classList.remove('active');
});


var selectedContent = document.getElementById(contentId);
selectedContent.classList.add('active');
}