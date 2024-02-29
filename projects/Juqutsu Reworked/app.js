const wbgColor = getComputedStyle(document.documentElement).getPropertyValue('--wbg-color');
const wtextColor = getComputedStyle(document.documentElement).getPropertyValue('--wtext-color');
const wmainColor = getComputedStyle(document.documentElement).getPropertyValue('--wmain-color');

const dbgColor = getComputedStyle(document.documentElement).getPropertyValue('--dbg-color');
const dtextColor = getComputedStyle(document.documentElement).getPropertyValue('--dtext-color');
const dmainColor = getComputedStyle(document.documentElement).getPropertyValue('--dmain-color');

const darkModeIcon = document.getElementById('dark-mode-icon');


let isDarkMode = false;

function darkMode() {
    isDarkMode = !isDarkMode;

    if(isDarkMode) {
        document.body.style.transition = 'background-color 0.5s, color 0.5s';
        document.body.style.backgroundColor = dbgColor;
        document.body.style.color = dtextColor;
        const anchorTags = document.querySelectorAll('a');
        anchorTags.forEach(anchor => {
            anchor.style.transition = 'color 0.5s';
            anchor.style.color = dtextColor;
        });
        document.documentElement.style.setProperty('--navlist-underline-color', '--dmain-color');
        darkModeIcon.classList.replace('bx-sun', 'bx-moon');
        darkModeIcon.style.transition = 'color 0.5s';
        darkModeIcon.style.color = dtextColor;
        console.log("Darkmode")
    
    } else {
        document.body.style.transition = 'background-color 0.5s, color 0.5s';
        document.body.style.backgroundColor = wbgColor;
        document.body.style.color = wtextColor;
        const anchorTags = document.querySelectorAll('a');
        anchorTags.forEach(anchor => {
            anchor.style.transition = 'color 0.5s';
            anchor.style.color = wtextColor;
        });
        document.documentElement.style.setProperty('--navlist-underline-color', '--wmain-color');
        darkModeIcon.classList.replace('bx-moon', 'bx-sun');
        darkModeIcon.style.transition = 'color 0.5s';
        darkModeIcon.style.color = wtextColor;
        console.log("Lightmode")
    }

}