function start() {
        fetch('http://localhost:5500/data')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Get reference to table body
                const tableBody = document.getElementById('table-body');
    
                // Clear existing table rows
                tableBody.innerHTML = '';

                
    
                // Iterate over the data and create table rows
                data.forEach(row => {
                    const tr = document.createElement('tr');
    
                    // Create table data cells and populate with data
                    const idCell = document.createElement('td');
                    idCell.textContent = row.id;
                    tr.appendChild(idCell);
    
                    const abkuerzungCell = document.createElement('td');
                    abkuerzungCell.textContent = row.abkuerzung;
                    tr.appendChild(abkuerzungCell);
    
                    const ausgeschriebenCell = document.createElement('td');
                    ausgeschriebenCell.textContent = row.ausgeschrieben;
                    tr.appendChild(ausgeschriebenCell);
    
                    // Append the table row to the table body
                    tableBody.appendChild(tr);
                });
            })
            .catch(error => console.error('Error fetching data:', error.message)); // Log error message
}

window.onload = function() {
    start();
};