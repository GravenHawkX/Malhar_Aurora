let htmlBody = document.querySelector("body");


let car1 = document.getElementsByClassName("carousel-container-1")[0];
let car2 = document.getElementsByClassName("carousel-container-2")[0];
let car3 = document.getElementsByClassName("carousel-container-3")[0];
let car4 = document.getElementsByClassName("carousel-container-4")[0];
let car5 = document.getElementsByClassName("carousel-container-5")[0];
let car6 = document.getElementsByClassName("carousel-container-6")[0];

let etc = document.getElementsByClassName("etc")[0];
let ipa = document.getElementsByClassName("ipa")[0];
let wpa = document.getElementsByClassName("wpa")[0];
let fa = document.getElementsByClassName("fa")[0];
let la = document.getElementsByClassName("la")[0];
let crossover = document.getElementsByClassName("crossover")[0];

etc.addEventListener("click",  carousel_1);
ipa.addEventListener("click", carousel_2);
fa.addEventListener("click", carousel_3);
la.addEventListener("click", carousel_4);
crossover.addEventListener("click", carousel_5);
wpa.addEventListener("click", carousel_6);

function carousel_2(){
    if(car2.classList.contains("hidden")) {
        car2.classList.remove("hidden");
        car1.classList.add("hidden")
        car3.classList.add("hidden")
        car4.classList.add("hidden")
        car5.classList.add("hidden")
        car6.classList.add("hidden")
    }

}
function carousel_1(){
    if(car1.classList.contains("hidden")) {
        car1.classList.remove("hidden");
        car2.classList.add("hidden")
        car3.classList.add("hidden")
        car4.classList.add("hidden")
        car5.classList.add("hidden")
        car6.classList.add("hidden")
    }

}

function carousel_3(){
    if(car3.classList.contains("hidden")) {
        car3.classList.remove("hidden");
        car1.classList.add("hidden")
        car2.classList.add("hidden")
        car4.classList.add("hidden")
        car5.classList.add("hidden")
        car6.classList.add("hidden")
    }

}
function carousel_4(){
    if(car4.classList.contains("hidden")) {
        car4.classList.remove("hidden");
        car1.classList.add("hidden")
        car3.classList.add("hidden")
        car2.classList.add("hidden")
        car5.classList.add("hidden")
        car6.classList.add("hidden")
    }

}
function carousel_5(){
    if(car5.classList.contains("hidden")) {
        car5.classList.remove("hidden");
        car1.classList.add("hidden")
        car3.classList.add("hidden")
        car4.classList.add("hidden")
        car2.classList.add("hidden")
        car6.classList.add("hidden")
    }

}
function carousel_6(){
    if(car6.classList.contains("hidden")) {
        car6.classList.remove("hidden");
        car1.classList.add("hidden")
        car3.classList.add("hidden")
        car4.classList.add("hidden")
        car2.classList.add("hidden")
        car5.classList.add("hidden")
    }

}