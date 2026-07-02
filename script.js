const images = [

{
image:"images/action1.jpg",
caption:"Teaching students using one microscope."
},

{
image:"images/action6.jpg",
caption:"Capturing microscope images using a smartphone."
},

{
image:"images/action3.jpg",
caption:"Sharing images instantly with a pathologist."
},

{
image:"images/action4.jpg",
caption:"Using PhoneScope during presentations."
},

{
image:"images/action5.jpg",
caption:"Learning microscopy with PhoneScope."
},

{
image:"images/action2.jpg",
caption:"Teaching using PhoneScope."
},

{
image:"images/action7.jpg",
caption:"Hands-on demonstration using PhoneScope."
},

{
image:"images/action8.jpg",
caption:"Sharing slide photos with a pathologist."
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
image:"images/Promostar 3.jpg",
name:"Promostar 3"
},

{
image:"images/cx21.jpg",
name:"Olympus CX21"
},

{
image:"images/Magnus MLXiplus.jpg",
name:"Magnus MLXiplus"
},

{
image:"images/Lawrence and mayo N207.jpg",
name:"Lawrence and mayo N207"
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
"₹950 Introductory Price",
"Capture • Record • Share",
"Tested on Popular Microscopes",
"No Mobile App Required",
"Trusted by 85+ Professionals",
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
const productImages=[

{
image:"images/device1.jpg",
caption:"Front View"
},

{
image:"images/device2.jpg",
caption:"Left side View"
},

{
image:"images/device3.jpg",
caption:"Right side view"
},

{
image:"images/device4.jpg",
caption:"Back side View"
},

{
image:"images/device5.jpg",
caption:"In Use"
}

];

let productIndex=0;

function updateProduct(){

document.getElementById("productImage").src=productImages[productIndex].image;

document.getElementById("productCaption").innerText=productImages[productIndex].caption;

}

function nextProduct(){

productIndex++;

if(productIndex>=productImages.length){

productIndex=0;

}

updateProduct();

}

function previousProduct(){

productIndex--;

if(productIndex<0){

productIndex=productImages.length-1;

}

updateProduct();

}

setInterval(nextProduct,5000);

updateProduct();
const reviews=[

{

text:"PhoneScope has helped me capture crystal-clear microscope images and easily share interesting cases with colleagues for discussion. Not only can I take photos, but I can also record videos under low, medium and high power. Thank you for this wonderful device.",

name:"Dr. T. Lasya",

designation:"Consultant Pathologist | Trust Hospital, Tanuku, Andhra Pradesh"

},

{

text:"I've found PhoneScope™ to be a practical and innovative tool for quick microscopic image capture and sharing. Its ease of use and portability make it especially valuable for teaching, discussions and routine pathology practice.",

name:"Dr. Krishna Patel",

designation:"Resident Doctor | GMERS Medical College, Ahmedabad"

},

{

text:"I've been using PhoneScope™ in my laboratory and it has been very reliable. It's easy to install, sturdy and captures clear microscope images with a smartphone. Highly recommended.",

name:"Dr. Pratima Chaudhari",

designation:"Prime Pathology Lab, Surat"

},

{

text:"An excellent innovation by Dr. Ravi Lotliker. This smartphone microscope device is extremely easy to use and delivers clear, high-quality images. It is a valuable tool for diagnostic laboratories and teaching. I highly recommend it to all laboratory professionals.",

name:"Lokesh Kekan",

designation:"Centre Head | Humanity Diagnostics, Nashik"

},

{

text:"PhoneScope is an excellent product for microscope imaging. The smartphone holder fits securely, provides stable positioning and produces clear, high-quality photos and videos. It has significantly improved our documentation and reporting process. The product is easy to use and offers great value for money.",

name:"Kashmin Patel",

designation:"Senior Scientific Officer | Agilus Diagnostics, Nashik"

},
{

text:"I purchased PhoneScope™ after seeing an advertisement in a pathology WhatsApp group, initially because of its affordable pricing. What I realised after using it was that it is an indigenous, practical add-on to my microscope that can be easily handled by the technician as well. So simple and effective.",

name:"Dr. Geetha Naveen",

designation:"Bangalore"

},

{
text:"The device is extremely user-friendly and easy to operate, making routine reporting smooth and efficient. One of its biggest advantages is the flexibility to create customized, image-based reports for investigations such as Semen Analysis, FNAC and Stool Modified Ziehl–Neelsen (ZN) staining. This helps us generate highly professional reports and deliver a distinctive reporting experience.",
name:"Dr. Priyanka Gandhi",
designation:"Pragati Pathology Lab, Pune"
},

{
text:"Smartphone Microscopy device is very helpful. Experience clear, detailed magnification with a lightweight smartphone microscope attachment. See the unseen with a smart, portable and easy-to-use smartphone microscopy device.",
name:"Harshada Ramesh Jadhav",
designation:"Lab Technician, Diagnopein Diagnostic Centre, Nashik"
}

];

let reviewIndex=0;

function updateReview(){

document.getElementById("reviewText").innerText='"'+reviews[reviewIndex].text+'"';

document.getElementById("reviewName").innerText=reviews[reviewIndex].name;

document.getElementById("reviewDesignation").innerText=reviews[reviewIndex].designation;

}

function nextReview(){

reviewIndex++;

if(reviewIndex>=reviews.length){

reviewIndex=0;

}

updateReview();

}

function previousReview(){

reviewIndex--;

if(reviewIndex<0){

reviewIndex=reviews.length-1;

}

updateReview();

}

setInterval(nextReview,7000);

updateReview();

function sendWhatsApp(){

const name = document.getElementById("customerName").value.trim();

const city = document.getElementById("customerCity").value.trim();

if(name===""){

alert("Please enter your name.");

return;

}

const message = `Hello Dr Ravi,

My Name: ${name}

City: ${city || "Not Mentioned"}

I have a question about PhoneScope™ / I would like to place an order.`;

const url = "https://wa.me/918369697677?text=" + encodeURIComponent(message);

window.location.href = url;

}
const heroImages = [

"images/hero1.jpg",

"images/hero2.jpg",

"images/hero3.jpg"

];

let heroIndex = 0;

setInterval(function(){

heroIndex++;

if(heroIndex >= heroImages.length){

heroIndex = 0;

}

document.getElementById("heroImage").src = heroImages[heroIndex];

},5000);