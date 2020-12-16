
const clap = document.getElementById("a");
const hihat = document.getElementById("s");

document.addEventListener("keydown", (i) => { 
    if (i.key === "a") {
        clap.play();
    } else if (i.key === "s") {
        hihat.play();
    } else {
        hihat.play();
    }
});
