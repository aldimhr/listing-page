// slider
let inputLeft = document.getElementById('input-left');
let inputRight = document.getElementById('input-right');

let thumbLeft = document.querySelector(".slider .thumb.left");
let thumbRight = document.querySelector(".slider .thumb.right");
let range = document.querySelector(".slider .range");

function setLeftValue() {
    let _this = inputLeft,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 10)

    let percent = ((_this.value - min) / (max - min)) * 100;

    thumbLeft.style.left = percent + "%";
    range.style.left = percent + "%";

}

setLeftValue()

function setRightValue() {
    let _this = inputRight,
        min = parseInt(_this.min),
        max = parseInt(_this.max);

    _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 10)

    let percent = ((_this.value - min) / (max - min)) * 100;

    thumbRight.style.right = (100 - percent) + "%";
    range.style.right = (100 - percent) + "%";

}
setRightValue()

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

// end slider