const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'databases',
    description: 'Displays a list of available databases',
    execute(message, args) {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: ''
        });
        connection.query("SELECT schema_name FROM information_schema.schemata WHERE schema_name NOT IN ('information_schema', 'mysql', 'performance_schema', 'sys', 'phpmyadmin')", (err, rows) => {
            if (err) {
                console.error('Error querying database:', err);
                return;
            }
            console.log(`${themes.secondary}Available databases:${bc.end}${bc.end}`);
            rows.forEach((row) => {
                console.log(`${themes.light}- ${themes.secondary}${row.schema_name}${bc.end}${bc.end}`);
            });
            // total number of databases
            console.log(`${bc.e_dim_gray}Total databases: ${bc.e_blue_violet}${rows.length}${bc.end}${bc.end}`);
            connection.end();
        });

    }
};