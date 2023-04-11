const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
const directoryHandler = require('../Handlers/DirectoryHandler');
const connectionHandler = require('../Handlers/ConnectionHandler');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'connect',
    description: 'Connects to a MySQL server and displays the databases',
    execute(message, args) {
        const connection = connectionHandler.getConnection();
        const dirHandler = directoryHandler;
        const currentDir = dirHandler.getCurrentDirectory();

        dirHandler.clearCurrentDirectory();
        dirHandler.setCurrentDirectory('~');


        let host = 'localhost';
        let user = 'root';
        let password = '';

        if (args.length === 3) {
            host = args[0];
            user = args[1];
            password = args[2];
        } else if (args.length === 2) {
            host = args[0];
            user = args[1];
        } else if (args.length === 1) {
            host = args[0];
        }

        // if the args more than 4, then display an error
        if (args.length > 3) {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Too many arguments!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Example: ${themes.secondary}connect localhost root {password}${bc.end}${bc.end}`);
            return;
        }




        if (connection.state === 'disconnected') {
            console.error(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Connecting to MySQL server...${bc.end}${bc.end}`);
            connectionHandler.connect(host, user, password);
        } else {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}You are already connected to a MySQL server!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}disconnect${bc.e_blue_violet} command to disconnect from the server${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Use the ${themes.secondary}info${bc.e_blue_violet} command to display the current connection${bc.end}${bc.end}`);
        }
    }
}