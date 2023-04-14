const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
const directoryHandler = require('../Handlers/DirectoryHandler');
const connectionHandler = require('../Handlers/ConnectionHandler');
const readline = require('readline');
let bc = Colours;
let themes = Theme;


module.exports = {
    name: 'delete',
    description: 'deletes an sql table',
    execute(message, args, rl) {
        const connection = connectionHandler.getConnection();
        const dirHandler = directoryHandler;
        const currentDir = dirHandler.getCurrentDirectory();


        if (connection.state === 'disconnected') {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}You are not connected to a MySQL server!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}connect${bc.e_blue_violet} command to connect to a MySQL server${bc.end}${bc.end}`);
            return;
        }

        let currentDirArray = currentDir.split('/');
        if (currentDirArray.length !== 1) {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}You are not in a database!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}cd${bc.e_blue_violet} command to select a database and table${bc.end}${bc.end}`);
            return;
        }
        if (args.length !== 1) {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Invalid arguments!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Example: ${themes.secondary}delete {table_name}${bc.e_blue_violet} ${currentDirArray[1]}${bc.end}${bc.end}`);
            return;
        }

        const databaseName = currentDirArray[0];
        const tableName = currentDirArray[1];


        let newTableName = args[0];

        // select the database
        let selectDatabaseQuery = `USE ${databaseName};`;

        // create the new table
        let dropTableQuery = `DROP TABLE ${newTableName}`;

        connection.query(selectDatabaseQuery, (err) => {
            if (err) {
                console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Failed to select database!${bc.end}${bc.end}`);
                console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Error: ${err}${bc.end}${bc.end}`);
                return;
            }

            connection.query(dropTableQuery, (err, result) => {
                if (err) {
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Failed to create table!${bc.end}${bc.end}`);
                    console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please check the table name and try again${bc.end}${bc.end}`);
                    console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Error: ${err}${bc.end}${bc.end}`);
                    return;
                }

                // add the new table to the directory file
                console.log(`${bc.e_gray}(${bc.e_green}✔${bc.e_gray}) ${bc.e_green}Deleted new table: ${themes.secondary}${newTableName}${bc.end}${bc.end}`);
                console.log(`${bc.e_gray}(${bc.e_green}✔${bc.e_gray}) ${bc.e_green}Database: ${themes.secondary}${databaseName}${bc.end}${bc.end}`);
            });
        });

    }
}