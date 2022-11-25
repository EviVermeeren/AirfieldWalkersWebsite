document.querySelector("#email").addEventListener("keyup", function(e){
    let email = this.value;
    let at = email.indexOf("@");
    let point = email.indexOf(".");

    if(at < 1){
        document.querySelector("#feedback").innerHTML = "Please enter a valid email adress";
        document.querySelector("#submit").className = 'notallowed';
    } else {
        document.querySelector("#feedback").innerHTML = "";
    }

    if(point == -1){
        document.querySelector("#feedback").innerHTML = "Please enter a valid email adress";
        document.querySelector("#submit").className = 'notallowed';
    } 

});

document.querySelector("#level").addEventListener("keyup", function(){
    if(this.value > 5){
        document.querySelector("#levelfeedback").innerHTML = "Please enter a level between 1 and 5";
        document.querySelector("#submit").className = 'notallowed';
    }

});

document.querySelector("#level").addEventListener("keyup", function(){
    if(this.value < 5 && this.value > 1){
        document.querySelector("#levelfeedback").innerHTML = "";
    }

});

document.querySelector("#submit").addEventListener("click", function(e){
    let question = document.querySelector("#question").value;
    let name = document.querySelector("#name").value;
    let level = document.querySelector("#level").value;
    let email = document.querySelector("#email").value;

    if(question == ""){
        document.querySelector("#questionfeedback").innerHTML = "Please fill in your question."
        document.querySelector("#question").className = "wrong";
        document.querySelector("#submit").className = 'notallowed';

    } else if(name == ""){
        document.querySelector("#questionfeedback").innerHTML = "Please fill in your name."
        document.querySelector("#name").className = "wrong";
        document.querySelector("#submit").className = 'notallowed';

    } else if(level == ""){
        document.querySelector("#questionfeedback").innerHTML = "Please fill in your level."
        document.querySelector("#level").className = "wrong";
        document.querySelector("#submit").className = 'notallowed';

    }else if(email == ""){
        document.querySelector("#questionfeedback").innerHTML = "Please fill in your email adress."
        document.querySelector("#email").className = "wrong";
        document.querySelector("#submit").className = 'notallowed';

    } else if (question != "" && name != "" && level != "" && email != ""){

    let names = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let level = document.querySelector("#level").value;
    let question = document.querySelector("#question").value;

    document.querySelector("#submitForm").innerHTML = 
    
    `Thank you for your message, we will answer as soon as possible. Normally, it takes up to 24 hours to respond. <br><br>
    Your information <br><br>
    Name: ${names} <br><br>
    Email: ${email} <br><br>
    Level: ${level} <br><br>
    Question: ${question}.`;
 
    document.querySelector("#submitForm").classList.add("bedankt");

    }

    e.preventDefault();

});



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
