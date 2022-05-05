let index = 0;
const divSquares = document.querySelector(".container");
for (index = 1; index <= 100; index++) {
    let element;
    if (index % 3 == 0 && index % 5 == 0) {
        element = `<div class="fizzBuzz d-flex justify-content-center align-items-center box m-3">Fizzbuzz</div>`;
    } else if (index % 3 == 0) {
        element = `<div class="fizz d-flex justify-content-center align-items-center box m-3">Fizz</div>`;
    } else if (index % 5 == 0) {
        element = `<div class="buzz d-flex justify-content-center align-items-center box m-3">buzz</div>`;
    } else {
        element = `<div class="d-flex justify-content-center align-items-center normalBg box m-3">${index}</div>`;
    }
    divSquares.innerHTML += element;
}