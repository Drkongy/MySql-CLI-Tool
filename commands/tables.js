const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const readline = require('readline');
const mysql = require('mysql');
const connection = require('../Handlers/ConnectionHandler');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'tables',
    description: 'Displays a list of available tables in the database',
    execute(message, args) {
        const conn = connection.getConnection();

        conn.query("SELECT schema_name FROM information_schema.schemata WHERE schema_name NOT IN ('information_schema', 'mysql', 'performance_schema', 'sys', 'phpmyadmin')", (err, rows) => {
            if (err) {
                console.error('Error querying database:', err);
                return;
            }
            console.log(`${themes.secondary}Available databases:${bc.end}${bc.end}`);
            rows.forEach((row) => {
                conn.query(`SELECT table_name FROM information_schema.tables WHERE table_schema = '${row.schema_name}' AND table_name NOT LIKE 'laravel%';`, (err, rows) => {
                    if (err) {
                        console.error('Error querying tables:', err);
                        return;
                    }
                    console.log(`${themes.secondary}${row.schema_name}${bc.end}`);

                    rows.forEach((table) => {
                        console.log(`${themes.light}    - ${table.table_name}${bc.end}`);
                    });
                    // total number of tables

                    console.log(`${bc.e_dim_gray}Total tables: ${bc.e_blue_violet}${rows.length}${bc.end}${bc.end}`);

                    console.log(`${bc.e_blue_violet}${'-'.repeat(20)}${bc.end}`);
                });
            });
        });
    }
};