const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    database: 'test'
});

connection.connect((err) => {
  if (err) {
      console.error('Error connecting to MySQL database: ' + err.stack);
      return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId);
});

// Define a route to handle GET requests
app.get('/data', (req, res) => {
  // Query the database to retrieve data
  connection.query('SELECT * FROM crazy', (error, results, fields) => {
      if (error) {
          console.error("Error retrieving data:", error);
          res.status(500).send("Error retrieving data from database");
          return;
      }
      res.json(results);
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});