function printName(){
    console.log('Andi');
    console.log("Aniku");
    console.log("Olsa");
}

printName();


function printName(){
    console.log('Andi');
    setTimeout(function() {console.log("Aniku")}, 3000);
    console.log("Olsa");
}

printName();

var colors = ["blue", "red", "green", "purple"];

function changeBgcolor(){
    document.querySelector("body").style.background  = colors[Math.floor(Math.random()*colors.length)];
}


var names = ["Shpat", "Eden", "Sugjuki", "kuatro"]

function changeName(){
    document.querySelector("p").innerHTML = names[Math.round(Math.random() * (names.length-1))]
    console.log([Math.round(Math.random * (names.length-1))]);v
}

setInterval(changeBgcolor, 500);
setInterval(changeName, 500);
 
