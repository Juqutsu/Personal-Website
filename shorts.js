/*
1.  Zufällige Abkürzung aus abk anzeigen
2.  Input mit gleichstelligen Ausg vergleichen (no case sensetive or space)
3.  Entweder Richtig oder Falsch anzeigen
(4.) Elemente hinzufügen
(5.) 
*/
const Abk = ['DDR','RAM','MBR','PXE','URL','KVM','DNS','SSID','PoE','USV','TAS','APIPA','DBMS'];
const Ausg = ['Double Data Rate', 'Random Access Memory','Master Boot Record',
'Preboot Execution Environment','Uniform Resource Locator','Keyborad Video Mouse', 
'Domain Name System','Service Set Identifier','Power over Ethernet',
'Unterbrechungsfreie Stromversorgung','Tool assisted speedrun','Automatic Private IP Adressing',
'Datenbank Management System'];
const abkobj = document.getElementById('abk');
const ausgobj = document.getElementById('ausg');
const tfobj = document.getElementById('tf');
let x = 0
let a = 0

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function reroll() {
    tfobj.innerHTML = '?'
    ausgobj.value = ''
    while(a == x){
        a = getRandomNumber(0,(Abk.length-1));
    }
    x = a;
    abkobj.value = Abk[x]
}

function check() {
    if (ausgobj.value.toLowerCase() == Ausg[x].toLowerCase()){
        console.log('TRUE')
        tfobj.innerHTML = 'Richtig'
        tfobj.style.color = 'green'
    }
    else {
        console.log('FALSE')
        tfobj.innerHTML = 'Falsch'
        tfobj.style.color = 'red'
    }
}

function dk (){
    ausgobj.value = Ausg[x]
}
