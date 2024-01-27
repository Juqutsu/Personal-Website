const genBtn = document.getElementById("genBtn");
const pw = document.getElementById("pw");
const copyBtn = document.getElementById("copyBtn");
const rstBtn = document.getElementById("rstBtn");
const size = document.getElementById("size");

const copyTxt = copyBtn.innerHTML;
const getTxt = genBtn.innerHTML;


genBtn.addEventListener('click', () => {
    genPw();
});

copyBtn.addEventListener('click', () => {
    copyText();
});

rstBtn.addEventListener('click', () => {
    resetText();
});

function genPw() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = document.getElementById("size").value;
    var password = "";  

    if (size.value != "") {
        for (var i = 0; i < passwordLength; i++) {
            var rndmNum = Math.floor(Math.random() * chars.length);
            password += chars.substring(rndmNum, rndmNum +1);
        }
        pw.value = password
    } else {
        genBtn.innerHTML = "No Length Set!"
    }

    setTimeout(function () {
        genBtn.innerHTML = getTxt;
    }, 2000);
}

function resetText() {
    pw.value = "";
    size.value = "";
}

function copyText() {
    if (pw.value != "") {
         copyBtn.innerHTML = "Text copied!";
         pw.select();
         pw.setSelectionRange(0, 999);
         navigator.clipboard.writeText(pw.value);
    } else {
        copyBtn.innerHTML = "Nothing to copy!";
    }
    setTimeout(function () {
        copyBtn.innerHTML = copyTxt;
    }, 2000);
    
}