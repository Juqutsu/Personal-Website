const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
    host: '127.0.0.1:3006',
    user: 'u942892833_admin',
    password: '6z]wboO[T',
    database: 'u942892833_Short'
});

// Route handler for fetching data
app.get("/data", (req, res) => {
    connection.query('SELECT * FROM words', (error, results, fields) => {
        if (error) {
            console.log('Error retrieving data:', error);
            res.status(500).json({ error: "Failed to retrieve data from database" });
            return;
        }
        res.json(results);
    });
});

app.listen(3006, () => {
    console.log("Server is running on port 3006");
});
