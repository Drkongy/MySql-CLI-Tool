const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'connect',
    description: 'Connects to a MySQL server and displays the databases',
    execute(message, args) {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: ''
        });


        console.log(args);

        // if there are no arguments, use the default values
        if (args.length === 0) {
            // show how to use connect command
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Usage: ${themes.secondary}connect <host> <user> <password>${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Using default values: ${themes.secondary}localhost, root, ''${bc.end}${bc.end}`);
        } else if (args.length === 1) {
            connection.config.host = args[0];
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Host set to ${themes.secondary}${args[0]}${bc.end}${bc.end}`);
        } else if (args.length === 2) {
            connection.config.host = args[0];
            connection.config.user = args[1];
            connection.config.password = '';
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Host set to ${themes.secondary}${args[0]}${bc.e_crimson} and User set to ${themes.secondary}${args[1]} ${bc.end}${bc.end}`);
            // log password set to empty string
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Password set to ${themes.secondary}''${bc.end}${bc.end}`);

        } else if (args.length === 3) {
            connection.config.host = args[0];
            connection.config.user = args[1];
            connection.config.password = args[2];
        } else {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Too many arguments!${bc.end}${bc.end}`);
        }


    }
};