const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Kunj@2411',
    database: 'banner_db'
});

// API to get banner data
app.get('/api/banner', (req, res) => {
    const query = 'SELECT * FROM banner WHERE id = 1';
    db.query(query, (err, result) => {
        if (err) throw err;
        res.send(result[0]);
    });
});

// API to update banner data
app.post('/api/banner', (req, res) => {
    const { description, timer, link, isVisible } = req.body;
    const query = 'UPDATE banner SET description = ?, timer = ?, link = ?, isVisible = ? WHERE id = 1';
    db.query(query, [description, timer, link, isVisible], (err, result) => {
        if (err) throw err;
        res.send('Banner updated successfully');
    });
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
