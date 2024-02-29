const abkobj = document.getElementById('abk');
const ausgobj = document.getElementById('ausg');
const tfobj = document.getElementById('tf');
let coinsP = document.getElementById("points");
let coins = 0;

let abkData = [];
let currentIndex = 0; 

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getData() {
    return fetch('http://localhost:5500/data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            abkData = data;
            return data; 
        })
        .catch(error => {
            console.error('Error fetching data:', error.message);
            throw error;
        });
}

function reroll() {
    // Check if abkData is empty
    
    if (abkData.length === 0) {
        console.error('abkData is empty');
        tfobj.innerHTML = "Es gibt nun keine Wörter mehr, Sie haben " + coins + "/40 Punkten erzielt!";
        abkobj.value = 'Reload in 5s';
        setTimeout(function() {
            location.reload();
        }, 5000);
        return;
    }

    currentIndex = getRandomNumber(0, abkData.length - 1);

    const randomAbbreviation = abkData[currentIndex].abkuerzung;

    abkobj.value = randomAbbreviation;
}

function check() {
    const userInput = ausgobj.value.trim().toLowerCase();
    const correctExpression = abkData[currentIndex].ausgeschrieben.toLowerCase();

    if (userInput === correctExpression) {
        // Richtig
        coins++;
        coinsP.innerHTML = "Points: " + coins;
        ausgobj.value = ""
        abkData.splice(currentIndex, 1);
        if (abkData.length === 0) {
            console.error('abkData is empty');
            tfobj.innerHTML = "Es gibt nun keine Wörter mehr, Sie haben " + coins + "/40 Punkten erzielt!";
            abkobj.value = 'Reload in 5s';
            setTimeout(function() {
                location.reload();
            }, 5000);
            return;
        }
        reroll();
    }
}

function start() {
    getData()
        .then(() => {
            reroll();
        })
        .catch(error => console.error('Error fetching data:', error.message));
}

function dontKnow() {
    if(abkData.length >= 1) {
        ausgobj.value = abkData[currentIndex].ausgeschrieben;
    } else {
        ausgobj.value = "No more words!";
    }
    
    setTimeout(function() {
        abkData.splice(currentIndex, 1);
        ausgobj.value = ''
        reroll();
    }, 3000);

}

window.onload = function() {
    start();
};
