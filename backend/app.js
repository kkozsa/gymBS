const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

//app.use(express.json());

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Frontend directory
app.use(express.static(__dirname + '/../frontend'));

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'sqluser',                                        // Change it to your MySQL credentials
    password: '123456789',                                  // Change it to your MySQL credentials
    database: 'gymbs'
});


app.post('/register', (req, res) => {
    const {username, email, password} = req.body;
    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err, result) => {
        if (err) {
            console.error('Error inserting data into database:', err);
            return res.status(500).send(err);
        }
        console.log('User registered successfully:', result);
        res.status(200).send('User registered successfully');
    });
})


app.use((req, res) => {
    res.status(404);
    res.send('<h1>Error 404: Resource not found</h1>')
})

app.listen(5555, ()=> {
    console.log("Listening on port 5555.")
});
