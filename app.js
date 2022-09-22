const sqlite3 = require('sqlite3').verbose();
let sql;

// connect to database
const db = new sqlite3.Database('./test.db',sqlite3.OPEN_READWRITE, (err) => {
    if(err) {
        return console.error(err.message);
    }
});

// Create Table
// sql = `CREATE TABLE wifiPassword(ID INTEGER PRIMARY KEY, wifiName,company,password)`;
// db.run(sql);

// Drop table
// db.run(`DROP TABLE demo`)

// Inserting Values to table

// sql = `INSERT INTO wifiPassword(wifiName,company,password) VALUES (?,?,?)`;
// db.run(sql, 
//     ["stormFiber 5G", "Storm Fiber", "jbstn75983"], 
//     (err) => {
//     if (err) return console.error(err.message);
// });

// query the data
sql = `SELECT * FROM wifiPassword`;

db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {
        console.log(row);
    });
});

// Delete Data
// sql = `DELETE FROM wifiPassword where id = ?`;
// db.run(sql, [2], (err) => {
//     if (err) return console.error(err.message);
// });

// Update Data
// sql = `UPDATE wifiPassword SET password = ? where id = ?`;
// db.run(sql, ["8184b3ec",1], (err) => {
//     if (err) return console.error(err.message);
// });