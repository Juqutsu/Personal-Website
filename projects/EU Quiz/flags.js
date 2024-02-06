const input = document.getElementById("countryInput");
let points = document.getElementById("points");
let current_pts = 0;
let all_countries = ["Albania","Andorra","UK","czechia","vatican","Austria","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg","Malta","Moldova","Monaco","Montenegro","Netherlands","North Macedonia","Norway","Poland","Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"]
let ctemp = all_countries

function check() {
    if(current_pts < 46){
        for (let i = all_countries.length - 1; i >= 0; i--) {
            if (input.value.replace(/\s+/g, "").toLowerCase() === ctemp[i].replace(/\s+/g, "").toLowerCase()) {
                addItem(ctemp[i]);
                ctemp.splice(i, 1);
                current_pts++;
                points.innerHTML = (current_pts + " / 47");
                input.value = "";
                break; 
            }
        }
    }
    else{
        reset()
        addItem("YOU WIN!")
    }
}

function reset(){
    ctemp = ["Albania","Andorra","UK","czechia","vatican","Austria","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo","Latvia","Liechtenstein","Lithuania","Luxembourg","Malta","Moldova","Monaco","Montenegro","Netherlands","North Macedonia","Norway","Poland","Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia","Spain","Sweden","Switzerland","Turkey","Ukraine","United Kingdom","Vatican City"]
    current_pts = 0
    points.innerHTML = (current_pts + " / 47");
    deleteAllItems()
}

function addItem(a) {
    const myList = document.getElementById("myUl");
    const newItem = document.createElement("li");
    newItem.textContent = a;
  
    myList.insertBefore(newItem, myList.firstChild);
  }

  function deleteAllItems() {
    const myList = document.getElementById("myUl");

    while (myList.firstChild) {
      myList.removeChild(myList.firstChild);
    }
  }