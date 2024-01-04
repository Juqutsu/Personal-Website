function addRow() {
    let table = document.getElementById("myTable");
    let row = document.createElement("tr");

    let c1 = document.createElement("td");
    let c2 = document.createElement("td");

    c1.innerText = "Test"
    c2.innerText = "Test2"

    row.appendChild(c1) // append fügt hinzu
    row.appendChild(c2)

    table.appendChild(row) 
}