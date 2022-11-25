let btnGo = document.querySelector(".btn");
let timerStarted = false;
let timer = 10;

btnGo.addEventListener("click", function(e) {
    e.preventDefault();
    let clicked = true; 

    if(clicked == true){
        
        document.querySelector("#download").innerHTML = `Download has started`;
               
    }

    let x = setInterval(function() {
        
        timer --;
        
        document.querySelector("#time").innerHTML = `Time remaining: ${timer}`;
        
        if(timer == "0"){
            clearInterval(x);
            timer = 10;
            document.querySelector("#download").innerHTML = "Download completed";
            document.querySelector("#time").innerHTML = " "
            
        }
 
    }, 1000);
    
});

document.querySelector("#playnowwolkje").addEventListener("click", function(){
    let clicked = true; 

    if(clicked == true){
        
        document.querySelector("#download").innerHTML = `Download has started`;
               
    }

    let x = setInterval(function() {
        
        timer --;
        
        document.querySelector("#time").innerHTML = `Time remaining: ${timer}`;
        
        if(timer == "0"){
            clearInterval(x);
            timer = 10;
            document.querySelector("#download").innerHTML = "Download completed";
            document.querySelector("#time").innerHTML = " ";
        }
 
    }, 1000);

});

let knopje = document.querySelector(".btn");
knopje.addEventListener("mouseover", function() {
    knopje.className = 'custom2';
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
