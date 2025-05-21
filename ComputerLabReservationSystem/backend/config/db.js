const mysql = require("mysql");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

console.log("✅ Checking ENV variables...");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASS:", process.env.DB_PASS ? "(hidden)" : "(empty)");
console.log("DB_NAME:", process.env.DB_NAME);

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error("❌ Database connection failed: " + err.message);
        return;
    }
    console.log("✅ MySQL Connected...");
});

module.exports = db;