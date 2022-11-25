let next = document.querySelector("#next");
let myImage = document.querySelector("#schetsen img");
let counter = 0;

next.addEventListener("click", function() {
    counter ++;
    myImage.setAttribute("src", `images/mockup${counter}.jpg`);
    if(counter >= 4){
        counter = -1;
    }
});

let nextpic = document.querySelector("#nextpic");
let images = document.querySelector("#adobe img");
let counters = 0;

nextpic.addEventListener("click", function() {
    counters ++;
    images.setAttribute("src", `images/versie${counters}.png`);
    if(counters >= 3){
        counters = -1;
    }
});

let nextpicture = document.querySelector("#nextpicture");
let imagess = document.querySelector("#javascriptfoto img");
let counterss = 0;
let respons = document.querySelector("#javascriptuitleg");
let uitleg = [
    "Hieronder zie je een timer die imiteert dat het spel aan het downloaden is gedurende 10 seconden. Na afloop komt er op het scherm te staan dat de download voltooid is.",
    "Dit is een formulier die automatisch nakijkt of het een emailadres is dat je invoert. Hij controleert dit door te checken of je een @ en een . gebruikt.",
    "Wanneer je bij het voorgaande formulier op verstuur klikt, kom je op deze pagina terecht. Hier zie je dat je bericht verstuurd is en wat je precies gevraagd hebt.",
    "Bij de extra pagina zijn er enkele buttons die er voor zorgen dat je een slideshow krijgt tussen de verschillede foto's, telkens als je klikt krijg je de volgende te zien."
];

nextpicture.addEventListener("click", function() {
    counterss ++;
    imagess.setAttribute("src", `images/jsf${counterss}.png`);
    respons.innerHTML = uitleg[counterss];

    if(counterss >= 3){
        counterss = 0;
    }
});

let knop = document.querySelector("#next");
knop.addEventListener("mouseover", function() {
    knop.className = 'custom';
})

let knop2 = document.querySelector("#nextpic");
knop2.addEventListener("mouseover", function() {
    knop2.className = 'custom';
})

let knop3 = document.querySelector("#nextpicture");
knop3.addEventListener("mouseover", function() {
    knop3.className = 'custom';
})

let witwolkje = document.querySelector("#witwolkje");
let supportwolkje = document.querySelector("#supportwolkje");
let extrawolkje = document.querySelector("#extrawolkje");
let playnowwolkje = document.querySelector("#playnowwolkje");

let witwolkjefoto = document.querySelector("#witwolkjefoto");
let supportwolkjefoto = document.querySelector("#supportwolkjefoto");
let extrawolkjefoto = document.querySelector("#extrawolkjefoto");
let playnowwolkjefoto = document.querySelector("#playnowwolkjefoto");

witwolkje.addEventListener("mouseover", function() {
    witwolkjefoto.setAttribute("src", `/images/aboutgrijs.png`);
    witwolkjefoto.className = 'custom';
})

witwolkje.addEventListener("mouseout", function() {
    witwolkjefoto.setAttribute("src", `/images/witwolkje.png`);
    
})

supportwolkje.addEventListener("mouseover", function() {
    supportwolkjefoto.setAttribute("src", `/images/supportgrijs.png`);
    supportwolkjefoto.className = 'custom';
})

supportwolkje.addEventListener("mouseout", function() {
    supportwolkjefoto.setAttribute("src", `/images/supportwolkje.png`);

})

extrawolkje.addEventListener("mouseover", function() {
    extrawolkjefoto.setAttribute("src", `/images/extragrijs.png`);
    extrawolkjefoto.className = 'custom';
})

extrawolkje.addEventListener("mouseout", function() {
    extrawolkjefoto.setAttribute("src", `/images/extrawolkje.png`);

})

playnowwolkje.addEventListener("mouseover", function() {
    playnowwolkjefoto.setAttribute("src", `/images/playnowgrijs.png`);
    playnowwolkjefoto.className = 'custom';
})

playnowwolkje.addEventListener("mouseout", function() {
    playnowwolkjefoto.setAttribute("src", `/images/playnowwolkje.png`);

})