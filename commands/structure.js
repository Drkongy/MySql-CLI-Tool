const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
const directoryHandler = require('../Handlers/DirectoryHandler');
const connectionHandler = require('../Handlers/ConnectionHandler');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'structure',
    description: 'get the structure of a table',
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
        if (currentDirArray.length === 0) {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}You are not in a database!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}cd${bc.e_blue_violet} command to select a database${bc.end}${bc.end}`);
            return;
        }

        if (currentDirArray.length === 1 && !args[0]) {
            console.log(`${bc.e_gray}(${bc.e_red}!!${bc.e_gray}) ${bc.e_crimson}Usage: ${bc.e_crimson}structure <table>${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}cd${bc.e_blue_violet} command to select a table${bc.end}${bc.end}`);
            return;
        }


        if (currentDirArray.length === 1 && currentDirArray[0] === '~') {
            console.log(`${bc.e_gray}(${bc.e_red}!!!${bc.e_gray}) ${bc.e_crimson}You are currently in the root directory.${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}cd${bc.e_blue_violet} command to select a database${bc.end}${bc.end}`);
            return;
        }



        // if the array is = to 1, and the args has not specified what table's structure to get, then give them a usage error


        const dbName = currentDirArray[0];
        const tableName = args[0] || currentDirArray[1];

        connection.query(`DESCRIBE ${dbName}.${tableName}`, (err, result) => {
            if (err) {
                console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to display the table structure!${bc.end}${bc.end}`);
                return
            }

            console.table(result);
        });
    }
};