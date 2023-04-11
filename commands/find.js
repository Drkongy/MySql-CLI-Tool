const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
const directoryHandler = require('../Handlers/DirectoryHandler');
const connectionHandler = require('../Handlers/ConnectionHandler');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'find',
    description: 'Finds a specific value in a table and prints the row',
    execute(message, args) {

        const connection = connectionHandler.getConnection();
        const dirHandler = directoryHandler;
        const currentDir = dirHandler.getCurrentDirectory();

        if (connection.state === 'disconnected') {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}You are not connected to a MySQL server!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}connect${bc.e_blue_violet} command to connect to a MySQL server${bc.end}${bc.end}`);
            return;
        }

        let currentDirArray = currentDir.split('/');
        if (currentDirArray.length !== 2) {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}You are not in a table!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}cd${bc.e_blue_violet} command to select a database and table${bc.end}${bc.end}`);
            return;
        }
        if (args.length !== 2) {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Invalid arguments!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Example: ${themes.secondary}find {column} {value} ${bc.end}${bc.end}`);
            return;
        }

        const databaseName = currentDirArray[0];
        const tableName = currentDirArray[1];
        const searchColumn = args[0];
        const searchValue = args[1];

        // make a connection and query the table in the database, and find a specific value in the table from all over the table
        connection.query(`SELECT * FROM ${databaseName}.${tableName} WHERE ${searchColumn} = '${searchValue}'`, (err, result) => {
            if (err) {
                let topLine = `${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to display the data!${bc.end}${bc.end}`;
                console.error(err);
                return;
            }
            if (result.length === 0) {
                console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}No results found!${bc.end}${bc.end}`);
                return;
            }


            // Loop through each row and highlight the matching text.
            for (let i = 0; i < result.length; i++) {
                const row = result[i];
                for (const key in row) {
                    if (row.hasOwnProperty(key)) {
                        const value = row[key];
                        if (value === searchValue) {
                            row[key] = `${bc.e_crimson}${value}${bc.end}`;
                        }
                    }
                }
            }
            console.table(result);
        });
    }
};