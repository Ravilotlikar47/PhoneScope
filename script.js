const images = [

{
image:"images/action1.jpg",
caption:"Teaching students using one microscope."
},

{
image:"images/action2.jpg",
caption:"Capturing microscope images using a smartphone."
},

{
image:"images/action3.jpg",
caption:"Sharing images instantly with a pathologist."
},

{
image:"images/action4.jpg",
caption:"Using PhoneScope during presentations."
}

];

let current=0;

setInterval(function(){

current++;

if(current>=images.length){

current=0;

}

document.getElementById("actionImage").src=images[current].image;

document.getElementById("actionCaption").innerText=images[current].caption;

},8000);

const microscopes=[

{
image:"images/cx23.jpg",
name:"Olympus CX23"
},

{
image:"images/cx21.jpg",
name:"Olympus CX21"
},

{
image:"images/magnus.jpg",
name:"Magnus MLXi"
},

{
image:"images/nikon.jpg",
name:"Nikon Eclipse"
}

];

let microscopeIndex=0;

function updateMicroscope(){

document.getElementById("microscopeImage").src=microscopes[microscopeIndex].image;

document.getElementById("microscopeName").innerText=microscopes[microscopeIndex].name;

}

function nextMicroscope(){

microscopeIndex++;

if(microscopeIndex>=microscopes.length){

microscopeIndex=0;

}

updateMicroscope();

}

function previousMicroscope(){

microscopeIndex--;

if(microscopeIndex<0){

microscopeIndex=microscopes.length-1;

}

updateMicroscope();

}

setInterval(nextMicroscope,6000);
updateMicroscope();

const badgeMessages=[

"Designed by a Pathologist",

"Affordable Smartphone Microscope Adapter",

"Capture • Record • Share",

"Personally Tested on Popular Microscopes",

"No Mobile App Required",

"Made for Pathologists, Technicians & Students",

"WhatsApp Support Available"

];

let badgeIndex=0;

setInterval(function(){

badgeIndex++;

if(badgeIndex>=badgeMessages.length){

badgeIndex=0;

}

document.getElementById("badgeText").innerText=badgeMessages[badgeIndex];

},7000);