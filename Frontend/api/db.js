import mysql from "mysql2"

export const db = mysql.createConnection({
    host: "quentinspi.ddns.net",
    user: "root",
    password: "password",
    database: "informatik"
})