const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const connectionHandler = require('../Handlers/ConnectionHandler');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'databases',
    description: 'Displays a list of available databases',
    execute(message, args) {
        // connect to the database
        const conn = connectionHandler.getConnection();

        conn.query("SELECT schema_name FROM information_schema.schemata WHERE schema_name NOT IN ('information_schema', 'mysql', 'performance_schema', 'sys', 'phpmyadmin')", (err, rows) => {
            if (err) {
                console.error(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Error querying database: ${err}${bc.end}${bc.end}`);
                return;
            }
            console.log(`${themes.secondary}Available databases:${bc.end}${bc.end}`);
            rows.forEach((row) => {
                console.log(`${themes.light}- ${themes.secondary}${row.schema_name}${bc.end}${bc.end}`);
            });
            console.log(`${bc.e_dim_gray}Total databases: ${bc.e_blue_violet}${rows.length}${bc.end}${bc.end}`);
        });
    }
};