const redoblantePlay = document.getElementById("soundRedoblante");
const hitHatPlay = document.getElementById("soundHitHat");
const crashPlay = document.getElementById("soundCrash");
const bomboPlay = document.getElementById("soundBombo");
const tom4Play = document.getElementById("soundTom4");
const tom3Play = document.getElementById("soundTom3");
const tom2Play = document.getElementById("soundTom2");
const tom1Play = document.getElementById("soundTom1");

function playSound(drumSound) {
    if (drumSound === "pad1") {
        // reproducir audio especifico de tom1
        tom1Play.play();
    } else if (drumSound === "pad2") {
        tom2Play.play();
    } else if (drumSound === "pad3") {
        tom3Play.play();
    } else if (drumSound === "pad4") {
        tom4Play.play();
    } else if (drumSound === "padbombo") {
        bomboPlay.play();
    } else if (drumSound === "padCrash") {
        crashPlay.play();
    } else if (drumSound === "padHitHat") {
        hitHatPlay.play();
    } else if (drumSound === "padRedoblante") {
        redoblantePlay.play();
    }
}