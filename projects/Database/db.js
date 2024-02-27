const mysql = require('mysql');

// Create connection configuration
const connection = mysql.createConnection({
    host: 'localhost', // Replace with your database host
    user: 'u942892833_admin', // Replace with your database username
    password: '6z]wboO[T', // Replace with your database password
    database: 'u942892833_Short' // Replace with your database name
});

// Establish connection
connection.connect((error) => {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
    console.log('Connected to the database');
    
    connection.query('SELECT * FROM words', (error, results, fields) => {
        if (error) {
            console.log('Error retrieving data:', error);
            return;
        }

        // Log the retrieved data
        console.log('Retrieved data:', results);

        // Process the retrieved data as needed
        // For example, you can iterate over the results and log each row
        results.forEach(row => {
            console.log(row); // Log each row
        });

    });


    // Perform database operations here
    
    // Close the connection when done
    connection.end((error) => {
        if (error) {
            console.error('Error closing the connection:', error);
            return;
        }
        console.log('Connection closed');
    });
});
