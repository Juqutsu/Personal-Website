const clr = document.querySelectorAll("div.color");

function generateColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    clr.forEach(function(div) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        div.style.backgroundColor = "#" + randomColor;
        div.innerHTML =  "#" + randomColor;
    });
   
}

generateColor();