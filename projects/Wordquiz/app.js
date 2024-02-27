/*
1.  Zufällige Abkürzung aus abk anzeigen
2.  Input mit gleichstelligen Ausg vergleichen (no case sensetive or space)
3.  Entweder Richtig oder Falsch anzeigen
(4.) Elemente hinzufügen
(5.) 
*/
const Abk = ['DDR','RAM','MBR','PXE','URL','KVM','DNS','SSID','PoE','USV','TAS','APIPA','DBMS'];
const Ausg = ['Double Data Rate', 'Random Access Memory','Master Boot Record',
'Preboot Execution Environment','Uniform Resource Locator','Keyboard Video Mouse', 
'Domain Name System','Service Set Identifier','Power over Ethernet',
'Unterbrechungsfreie Stromversorgung','Tool assisted speedrun','Automatic Private IP Adressing',
'Datenbank Management System'];
const abkobj = document.getElementById('abk');
const ausgobj = document.getElementById('ausg');
const tfobj = document.getElementById('tf');
let coinsP = document.getElementById("points");
let coins = 0
let x = 0
let a = 0


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function reroll() {
    tfobj.innerHTML = '?'
    ausgobj.value = ''
    if(a === x && Abk.length >= 1) {
        a = getRandomNumber(0,(Abk.length-1));
    } else {
        tfobj.innerHTML = "Alle Wörter durch!"
        abkobj.value = "Alle Wörter durch!"
        setTimeout(function() {
            reset();
        }, 4000);
    }

    x = a;
    abkobj.value = Abk[x]
}

function check() {
    if (ausgobj.value.trim().toLowerCase() === Ausg[x].toLowerCase()) {
        tfobj.innerHTML = 'Richtig';
        tfobj.style.color = 'green';
        Abk.splice(x, 1);
        Ausg.splice(x, 1);
        coins++;
        coinsP.innerHTML = "Points: " + coins;
        reroll();
    } else {
        tfobj.innerHTML = 'Falsch';
        tfobj.style.color = 'red';
    }
}

function dk (){
    if(Abk.length >= 1) {
        ausgobj.value = Ausg[x]
    } else {
        ausgobj.value = "";
    }
    
    setTimeout(function() {
        Abk.splice(x, 1);
        Ausg.splice(x, 1);
        reroll();
    }, 1000);
}

window.onload = function() {
    reset();
};

function reset() {
    abkobj.value = 'DDR';
    ausgobj.value = '';
    tfobj.innerHTML = '?';
    tfobj.style.color = '';
    x = 0;
    a = 0;
    coins = 0;
    Abk.length = 0;
    Ausg.length = 0;
    Abk.push('DDR','RAM','MBR','PXE','URL','KVM','DNS','SSID','PoE','USV','TAS','APIPA','DBMS');
    Ausg.push('Double Data Rate', 'Random Access Memory','Master Boot Record',
              'Preboot Execution Environment','Uniform Resource Locator','Keyboard Video Mouse', 
              'Domain Name System','Service Set Identifier','Power over Ethernet',
              'Unterbrechungsfreie Stromversorgung','Tool assisted speedrun','Automatic Private IP Adressing',
              'Datenbank Management System');
}
