const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
const directoryHandler = require('../Handlers/DirectoryHandler');
const connectionHandler = require('../Handlers/ConnectionHandler');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'cd',
    description: 'goes to the home directory',
    execute(message, args) {
        const connection = connectionHandler.getConnection();
        const dirHandler = directoryHandler;

        dirHandler.clearCurrentDirectory();
        dirHandler.setCurrentDirectory('~');

        if (connection.state === 'disconnected') {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}You are not connected to a MySQL server!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}connect${bc.e_blue_violet} command to connect to a server${bc.end}${bc.end}`);
            return;
        }

        if (args.length === 0) {
            dirHandler.clearCurrentDirectory();
            dirHandler.setCurrentDirectory('~');
            console.log(`${bc.e_gray}(${bc.e_green}+${bc.e_gray}) ${bc.e_green}You are now in the home directory${bc.end}${bc.end}`);
            return;
        }

        if (args.length > 2) {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Too many arguments!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Example: ${themes.secondary}cd {database} {table}${bc.end}${bc.end}`);
            return;
        }

        if (args.length === 1) {
            let dir = args[0];
            // first check if the directory exists
            connection.query(`SHOW DATABASES LIKE '${dir}'`, (err, result) => {
                if (err) {
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to change directories!${bc.end}${bc.end}`);
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Error: ${err}${bc.end}${bc.end}`);
                    return;
                }

                if (result.length === 0) {
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}The directory ${themes.secondary}${dir}${bc.e_crimson} does not exist!${bc.end}${bc.end}`);
                    return;
                }

                // if the directory exists, change the current directory
                dirHandler.clearCurrentDirectory();
                dirHandler.setCurrentDirectory(dir);
                console.log(`${bc.e_gray}(${bc.e_green}+${bc.e_gray}) ${bc.e_green}You are now in the ${themes.secondary}${dir}${bc.e_green} directory${bc.end}${bc.end}`);
            });

        }

        if (args.length === 2) {
            let dir = args[0];
            let table = args[1];
            // first check if the directory exists
            connection.query(`SHOW DATABASES LIKE '${dir}'`, (err, result) => {
                if (err) {
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to change directories!${bc.end}${bc.end}`);
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Error: ${err}${bc.end}${bc.end}`);
                    return;
                }

                if (result.length === 0) {
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}The directory ${themes.secondary}${dir}${bc.e_crimson} does not exist!${bc.end}${bc.end}`);
                    return;
                }

                // if the directory exists, check if the table exists
                connection.query(`SHOW TABLES FROM ${dir} LIKE '${table}'`, (err, result) => {
                    if (err) {
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to change directories!${bc.end}${bc.end}`);
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Error: ${err}${bc.end}${bc.end}`);
                        return;
                    }

                    if (result.length === 0) {
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}The table ${themes.secondary}${table}${bc.e_crimson} does not exist!${bc.end}${bc.end}`);
                        return;
                    }

                    // if the table exists, change the current directory
                    dirHandler.clearCurrentDirectory();
                    dirHandler.setCurrentDirectory(dir + '/' + table);
                    console.log(`${bc.e_gray}(${bc.e_green}+${bc.e_gray}) ${bc.e_green}You are now in the ${themes.secondary}${dir}${bc.e_green} directory${bc.end}${bc.end}`);
                    console.log(`${bc.e_gray}(${bc.e_green}+${bc.e_gray}) ${bc.e_green}You are now in the ${themes.secondary}${table}${bc.e_green} table${bc.end}${bc.end}`);
                });
            });
        }



    }

};