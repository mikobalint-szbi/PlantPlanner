
import initSqlJs from 'sql.js';
import { writable } from 'svelte/store';


export const database = writable([]);

let db;

console.log("asd");


(async () => {
    // Initialize sql.js
    const SQL = await initSqlJs();

    // Fetch the SQLite database file
    const response = await fetch('static/Database/database.db');
    const buffer = await response.arrayBuffer();

    // Create an in-memory database
    db = new SQL.Database(new Uint8Array(buffer));

    // Execute SQL statements or queries as needed
    const result = db.exec('SELECT * FROM species');
    console.log(result);
})();

// Félbehagyva – Megnyitott weboldalak:
// https://www.youtube.com/watch?v=0DZ472GiVNw&ab_channel=JeffreyCodesJavascript
// https://sql.js.org/#/?id=use-from-nodejs

