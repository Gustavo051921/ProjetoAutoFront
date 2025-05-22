const slide = document.getElementById("slider");
const images = slide.querySelectorAll("img");
const totalImages = images.length;
let i = 0;

function updateSlide() {
    slide.style.transform = `translateX(-${i * 100}%)`;
}

document.getElementById("next").addEventListener("click", () => {
    i = (i + 1) % totalImages;
    updateSlide();
});

document.getElementById("prev").addEventListener("click", () => {
    i = (i - 1 + totalImages) % totalImages;
    updateSlide();
});

// Auto avançar a cada 2 segundos
setInterval(() => {
    if (i == totalImages -1) {
        i = 0;
    } else {
        i++;
    }     
    updateSlide();
}, 3000);


