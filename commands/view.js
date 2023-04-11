const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
const directoryHandler = require('../Handlers/DirectoryHandler');
const connectionHandler = require('../Handlers/ConnectionHandler');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'view',
    description: 'View the contents of a table and columns',
    execute(message, args) {

        const connection = connectionHandler.getConnection();
        const dirHandler = directoryHandler;
        const currentDir = dirHandler.getCurrentDirectory();

        if (connection.state === 'disconnected') {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}You are not connected to a MySQL server!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}connect${bc.e_blue_violet} command to connect to a MySQL server${bc.end}${bc.end}`);
            return;
        }

        // split the current directory into an array
        let currentDirArray = currentDir.split('/');


        // make sure that the current directory has a database and a table already connected
        if (currentDirArray.length !== 2) {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}You are not in a table!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}cd${bc.e_blue_violet} command to select a database and table${bc.end}${bc.end}`);
            return;
        }


        // if the args more than 4, then display an error
        if (args.length > 1) {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Too many arguments!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Example: ${themes.secondary}view ${bc.e_blue_violet}or ${themes.secondary}view {column_name} ${bc.end}${bc.end}`);
            return;
        }

        // if args is 0 then display all columns and the data in the table
        if (args.length === 0) {
            const databaseName = currentDirArray[0];
            const tableName = currentDirArray[1];
            connection.query(`SELECT * FROM ${databaseName}.${tableName}`, (err, results, fields) => {

                if (err) {
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to display the data!${bc.end}${bc.end}`);
                    console.error(err);
                    console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}info${bc.e_blue_violet} command to display the current connection${bc.end}${bc.end}`);
                    console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}connect${bc.e_blue_violet} command to connect to a MySQL server${bc.end}${bc.end}`);
                    return;
                }
                console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Displaying data...${bc.end}${bc.end}`);
                console.table(results);
            });
        }


        // get the argument and check if they exist in the table, if not give error
        if (args.length === 1) {
            const databaseName = currentDirArray[0];
            const tableName = currentDirArray[1];
            const columnName = args[0];

            connection.query(`SELECT ${columnName} FROM ${databaseName}.${tableName}`, (err, results, fields) => {
                if (err) {
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to display the data!${bc.end}${bc.end}`);
                    console.error(err);
                    console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}info${bc.e_blue_violet} command to display the current connection${bc.end}${bc.end}`);
                    console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}connect${bc.e_blue_violet} command to connect to a MySQL server${bc.end}${bc.end}`);
                    return;
                }

                if (results.length === 0) {
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Column "${columnName}" does not exist!${bc.end}${bc.end}`);
                    return;
                }

                console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Displaying data for "${columnName}"...${bc.end}${bc.end}`);
                console.table(results);
            });
        }





    }

};