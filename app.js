
const clap = document.getElementById("a");
const hihat = document.getElementById("s");
const kick = document.getElementById("d");
const openhat = document.getElementById("f");
const boom = document.getElementById("g");
const ride = document.getElementById("h");
const snare = document.getElementById("j");
const tom = document.getElementById("k");
const tink = document.getElementById("l");


//function playAudio() { 
//    clap.play(); 
//}

document.addEventListener("keydown", (i) => { 
    if (i.key === "a") {
        clap.play();
    } else if (i.key === "s") {
        hihat.play();
    } else if (i.key === "d") {
        kick.play();
    } else if (i.key === "f") {
        kick.play();
    }else if (i.key === "g") {
        kick.play();
    }else if (i.key === "h") {
        kick.play();
    }else if (i.key === "j") {
        kick.play();
    }else if (i.key === "k") {
        kick.play();
    }else if (i.key === "l") {
        kick.play();
    }else {
        hihat.play();
    }
});
