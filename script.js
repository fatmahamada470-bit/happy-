const PASSWORD = "fatom";

function hideAllScreens() {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
}

function showSection(id) {
    hideAllScreens();
    document.getElementById(id).classList.add("active");
}

function checkPassword() {

    const input = document.getElementById("passwordInput").value;

    if(input === PASSWORD){

        showSection("words-screen");

        startWordsAnimation();

    } else {

        alert("Wrong Password");

    }

}

function startWordsAnimation(){

    document
    .getElementById("words-navigation")
    .classList
    .add("hidden");

   const words = [
    "Happy",
    "Birthday",
    "Aymony ❤️"
];

    const display = document.getElementById("word-display");

    let index = 0;

    display.textContent = words[0];

    const interval = setInterval(() => {

        index++;

        if(index < words.length){

            display.textContent = words[index];

        } else {

            clearInterval(interval);

display.textContent = "";

setTimeout(() => {

    document
    .getElementById("words-navigation")
    .classList
    .remove("hidden");

}, 700);

        }

    }, 1000);

}

function startPhotosSection(){

    showSection("photos-screen");

   const photos = document.querySelectorAll(".photo-card");
    const navigation = document.getElementById("photo-navigation");

    navigation.classList.add("hidden");

    photos.forEach(photo=>{
        photo.classList.remove("active","previous");
    });

    let index = 0;

    function nextPhoto(){

        if(index > 0){
            photos[index-1].classList.remove("active");
            photos[index-1].classList.add("previous");
        }

        photos[index].classList.add("active");

        index++;

        if(index < photos.length){
            setTimeout(nextPhoto,6000);
        }else{
            setTimeout(()=>{
                navigation.classList.remove("hidden");
            },5000);
        }

    }

    nextPhoto();

}

const video = document.getElementById("birthday-video");

if(video){

    video.addEventListener("ended", () => {

        document
        .getElementById("video-navigation")
        .classList
        .remove("hidden");

    });

}

function startHeartGallery(){

    showSection("heart-screen");

    const gallery = document.getElementById("heart-gallery");

    if(gallery.dataset.loaded){
        return;
    }

    gallery.dataset.loaded = true;

   const positions = [];

const total = 39;
const centerX = 350;
const centerY = 320;
const scale = 18;

for (let i = 0; i < total; i++) {

    const t = (Math.PI * 2 * i) / total;

    const x = 16 * Math.pow(Math.sin(t), 3);

    const y =
        13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t);

    positions.push([
        centerX + x * scale,
        centerY - y * scale
    ]);

}

    for(let i = 4; i <= 42; i++){

        const div = document.createElement("div");

        div.className = "heart-photo";

        div.style.left = positions[i-4][0] + "px";
        div.style.top = positions[i-4][1] + "px";

        div.innerHTML =
        `<img src="images/photo${i}.jpg">`;

        gallery.appendChild(div);

    }

    const photos = document.querySelectorAll(".heart-photo");

    photos.forEach((photo , index) => {

        setTimeout(() => {

            photo.classList.add("show");

        }, index * 500);

    });
setTimeout(() => {

    document
        .getElementById("heart-navigation")
        .classList.remove("hidden");

}, photos.length * 500 + 500);
setTimeout(() => {

    document
        .getElementById("love-text")
        .classList.add("show");

}, photos.length * 500);

}
// ===== STARS =====

const starsContainer = document.getElementById("stars");

for(let i = 0; i < 120; i++){

    const star = document.createElement("div");

    star.style.position = "absolute";
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.background = "#FFF8EE";

    star.style.borderRadius = "50%";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.opacity = Math.random();

    starsContainer.appendChild(star);

}

// ===== FLOATING HEARTS =====

const heartsContainer = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.style.position = "absolute";

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.bottom = "-50px";

    heart.style.color = "#800020"; // Deep Burgundy

    heart.style.fontSize =
        (15 + Math.random() * 45) + "px";

    heart.style.opacity = "0.8";

    heart.style.transition = "transform 6s linear";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.style.transform =
            `translateY(-120vh)`;

    }, 100);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 50);
function backToWords(){

    showSection("words-screen");

    startWordsAnimation();

}
function startVideoIntro(){

    showSection("video-intro-screen");

    setTimeout(()=>{

        showSection("video-screen");

    },6000);

}
function goToFinalPage(){
    hideAllScreens();
    document.getElementById("final-screen").style.display = "flex";
}