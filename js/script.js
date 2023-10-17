let sliderNavbar = document.querySelector(".slider__navbar");
let video = document.querySelector("#video");

sliderNavbar.addEventListener('click', (e) => {
let url = e.target.parentElement.dataset.img;
    video.src = url;
})