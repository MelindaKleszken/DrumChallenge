const clap = document.getElementById("a");
const hihat = document.getElementById("s");
const kick = document.getElementById("d");
const openhat = document.getElementById("f");
const boom = document.getElementById("g");
const ride = document.getElementById("h");
const snare = document.getElementById("j");
const tom = document.getElementById("k");
const tink = document.getElementById("l");
const button = document.querySelectorAll(".button");
console.log(button);



//play sounds with keyboard
document.addEventListener("keydown", (i) => { 
    if (i.key === "a") {
        clap.play();
    } else if (i.key === "s") {
        hihat.play();
    } else if (i.key === "d") {
        kick.play();
    } else if (i.key === "f") {
        openhat.play();
    } else if (i.key === "g") {
        boom.play();
    } else if (i.key === "h") {
        ride.play();
    } else if (i.key === "j") {
        snare.play();
    } else if (i.key === "k") {
        tom.play();
    } else if (i.key === "l") {
        tink.play();
    } 
});


//play sounds by clicking keys ----this part still need a check
for (let i = 0; i < button.length; i++) {
    document.addEventListener("click", function () {
    
    let letter = this[i].id;
    
    //console.log(i);
    console.log(letter);
    
    });
}
/*function playSound() {
    var sound = button.getElementById("audio");
    sound.play();
}*/



/*
function myFunction() {
    let button = document.querySelectorAll(".button")[0].id;
    console.log(button);
    let letter = "";
    
    for (let i = 0; i < button.attributes.length; i++) {
      letter = letter + button.attributes[i].name + " = " + button.attributes[i].value + "<br>";
    }
    this.innerHTML = letter;
  }*/
