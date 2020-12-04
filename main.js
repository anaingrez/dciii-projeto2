let numberOfImages = 50;
let time = 200;
let index = 1;

function changeImage() {
    document.slider.src = `fotos/f_${index}.png`;
    if (++index > numberOfImages)
        index = 1;
    setTimeout('changeImage()', time);
}
window.onload = changeImage;