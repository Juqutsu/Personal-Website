// app.js
document.getElementById("fetchDataBtn").addEventListener("click", function() {
    fetch("/data") // Send a request to fetch data from the server
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch data from MySQL");
            }
            return response.json();
        })
        .then(data => {
            // Display the fetched data
            const dataList = document.getElementById("dataList");
            dataList.innerHTML = ""; // Clear previous data
            data.forEach(item => {
                const li = document.createElement("li");
                li.textContent = `${item.columnName1}: ${item.columnName2}`; // Adjust column names accordingly
                dataList.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
});