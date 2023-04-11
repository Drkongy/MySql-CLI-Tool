const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
const directoryHandler = require('../Handlers/DirectoryHandler');
const connectionHandler = require('../Handlers/ConnectionHandler');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'ls',
    description: 'list all databases / tables in the current directory',
    execute(message, args) {
        const connection = connectionHandler.getConnection();
        const dirHandler = directoryHandler;
        let currentDir = dirHandler.getCurrentDirectory();

        if (connection.state === 'disconnected') {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}You are not connected to a MySQL server!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}connect${bc.e_blue_violet} command to connect to a server${bc.end}${bc.end}`);
            return;
        }

        if (args.length === 0) {

            if (currentDir === '~') {
                connection.query('SHOW DATABASES', (err, result) => {
                    if (err) {
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to list databases!${bc.end}${bc.end}`);
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Error: ${err}${bc.end}${bc.end}`);
                        return;
                    }
                    currentDir

                    console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Databases:${bc.end}${bc.end}`);
                    result.forEach((database) => {
                        console.log(`   ${bc.e_blue_violet}-${database.Database}${bc.end}${bc.end}`);
                    });



                });
                return;
            }

            let currentDirArray = currentDir.split('/');

            if (currentDirArray.length === 1) {
                connection.query(`SELECT table_name, table_schema FROM information_schema.tables WHERE table_schema = '${currentDirArray[0]}' AND table_name NOT LIKE 'laravel%';`, (err, rows) => {
                    // connection.query(`SHOW TABLES FROM ${database}`, (err, result) => {
                    if (err) {
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to list tables!${bc.end}${bc.end}`);
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Error: ${err}${bc.end}${bc.end}`);
                        return;
                    }
                    console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}${currentDirArray[0]} Tables:${bc.end}${bc.end}`);
                    rows.forEach((row) => {
                        console.log(`   ${bc.e_blue_violet}-${row.table_name}${bc.end}${bc.end}`);
                    });


                });
            }

            if (currentDirArray.length === 2) {
                // get the columns of the table
                connection.query(`SELECT column_name FROM information_schema.columns WHERE table_schema = '${currentDirArray[0]}' AND table_name = '${currentDirArray[1]}';`, (err, rows) => {
                    if (err) {
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to list columns!${bc.end}${bc.end}`);
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Error: ${err}${bc.end}${bc.end}`);
                        return;
                    }
                    console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}${currentDirArray[1]} Columns:${bc.end}${bc.end}`);
                    rows.forEach((row) => {
                        console.log(`   ${bc.e_blue_violet}- ${row.column_name}${bc.end}${bc.end}`);
                    });
                });



            }

        }
    }
}