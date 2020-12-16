const clap = document.getElementById("a");
const hihat = document.getElementById("s");
const kick = document.getElementById("d");
const openhat = document.getElementById("f");
const boom = document.getElementById("g");
const ride = document.getElementById("h");
const snare = document.getElementById("j");
const tom = document.getElementById("k");
const tink = document.getElementById("l");


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
    } else {
        clap.play();
    }
});
