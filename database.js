const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./chat-app.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(36) UNIQUE,
        email TEXT UNIQUE,
        password TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS messages (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            sender VARCHAR(36),
            content VARCHAR(500)
        )`);
});

module.exports = db;