const wbgColor = getComputedStyle(document.documentElement).getPropertyValue('--wbg-color');
const wtextColor = getComputedStyle(document.documentElement).getPropertyValue('--wtext-color');
const wmainColor = getComputedStyle(document.documentElement).getPropertyValue('--wmain-color');

const dbgColor = getComputedStyle(document.documentElement).getPropertyValue('--dbg-color');
const dtextColor = getComputedStyle(document.documentElement).getPropertyValue('--dtext-color');
const dmainColor = getComputedStyle(document.documentElement).getPropertyValue('--dmain-color');

const darkModeIcon = document.getElementById('dark-mode-icon');


const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let btn1 = document.querySelector('.btn');
let socialbtn = document.querySelectorAll('.social a');
let h3Tag = document.querySelector('.home-text h3');
let span = document.querySelector('.home-text span')


menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navlist.classList.remove('active');
};

let isDarkMode = false;

function darkMode() {
    isDarkMode = !isDarkMode;
    

    // Setup transition
    document.body.style.transition = 'background-color 0.5s, color 0.5s';
    const anchorTags = document.querySelectorAll('a');
    const paragraphTags = document.querySelectorAll('p');
    anchorTags.forEach(anchor => {
        anchor.style.transition = 'color 0.5s, background-color 0.5s';
    });
    paragraphTags.forEach(paragraph => {
        paragraph.style.transition = 'color 0.5s, background-color 0.5s';
    });


    darkModeIcon.style.transition = 'color 0.5s';

        if (isDarkMode) {
            document.body.style.backgroundColor = dbgColor;
            document.body.style.color = dtextColor;
            anchorTags.forEach(anchor => {
                anchor.style.color = dtextColor;
                anchor.style.backgroundColor = dbgColor;
            });

            paragraphTags.forEach(paragraph => {
                paragraph.style.color = dtextColor;
            });
            document.documentElement.style.setProperty('--navlist-underline-color', '--dmain-color');
            darkModeIcon.classList.replace('bx-sun', 'bx-moon');
            darkModeIcon.style.color = dtextColor;
            h3Tag.style.color = dtextColor;
            h3Tag.style.transition = 'color 0.5s, background-color 0.5s';
            btn1.style.backgroundColor = wbgColor;
            btn1.style.color = dbgColor;
            span.style.color = dtextColor;
            menu.style.color = dtextColor;
            span.style.transition = 'color 0.5s, background-color 0.5s';
            socialbtn.forEach(social => {
                social.style.backgroundColor = wbgColor;
                social.style.color = dbgColor;
            });

            console.log("Darkmode")
        } else {
            document.body.style.backgroundColor = wbgColor;
            document.body.style.color = wtextColor;
            anchorTags.forEach(anchor => {
                anchor.style.color = wtextColor;
                anchor.style.backgroundColor = wbgColor;
            });
            paragraphTags.forEach(paragraph => {
                paragraph.style.color = wtextColor;
            });
            document.documentElement.style.setProperty('--navlist-underline-color', '--wmain-color');
            darkModeIcon.classList.replace('bx-moon', 'bx-sun');
            darkModeIcon.style.color = wtextColor;
            menu.style.color = wtextColor;
            h3Tag.style.color = wtextColor;
            h3Tag.style.transition = 'color 0.5s, background-color 0.5s';
            btn1.style.backgroundColor = dbgColor;
            btn1.style.color = wbgColor;
            span.style.color = wtextColor;
            menu.style.color = wtextColor;
            span.style.transition = 'color 0.5s, background-color 0.5s';
            socialbtn.forEach(social => {
                social.style.backgroundColor = dbgColor;
                social.style.color = wbgColor;
            });

            console.log("Lightmode")
        }
}

const textToType = "Lukas";

const typingSpeed = 700;

const typingElement = document.getElementById("ltext");

function typeText(index) {
    if (index < textToType.length) {
        typingElement.textContent += textToType.charAt(index);
        setTimeout(function() {
            typeText(index + 1);
        }, typingSpeed);
    } else {
        // Text has been fully typed, clear the text content and restart typing
        setTimeout(function() {
            typingElement.textContent = "";
            typeText(0);
        }, typingSpeed * 2); // Wait for some time before restarting typing
    }
}

// Start typing animation
typeText(0);