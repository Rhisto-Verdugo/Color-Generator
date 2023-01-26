const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("color-btn");
const title = document.getElementById("title");
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[generateRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent =  hexColor;
    color.style.color = hexColor;
    btn.style.color = hexColor;
    title.style.color = hexColor;
})

function generateRandomNumber () {
   return Math.floor(Math.random() * hex.length);
}