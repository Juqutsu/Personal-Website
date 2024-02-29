const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'words'
});

connection.connect((err) => {
  if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

app.get('/data', (req, res) => {
    connection.query('SELECT * FROM words', (error, results, fields) => {
        if (error) {
            console.error("Error retrieving data:", error);
            res.status(500).send("Error retrieving data from database");
            return;
        }
        res.json(results);
    });
});

app.listen(5500, () => {
  console.log("Server is running on port 5500");
});