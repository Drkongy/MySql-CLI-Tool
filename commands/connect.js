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



        // const connection = mysql.createConnection({
        //     host: args[0] || dirHandler.getCurrentHost(),
        //     user: args[1] || dirHandler.getCurrentUser(),
        //     password: args[2] || dirHandler.getCurrentPassword(),
        // });

        connection.connect((err) => {
            if (err) {
                console.error(`Error connecting to MySQL server: ${err.stack}`);
                return;
            }
            console.log(`${themes.primary}Connected to MySQL server as id ${connection.threadId}${themes.end}`);
        });




        const dirHandler = directoryHandler;
        if (args.length === 0) {
            connection.end();
            dirHandler.setCurrentHost('localhost');
            dirHandler.setCurrentUser('root');
            dirHandler.setCurrentPassword('');
            console.error("test");
            connection.connect();
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Usage: ${themes.secondary}connect <host> <user> <password>${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Using default values: ${themes.secondary}localhost, root, ''${bc.end}${bc.end}`);
        } else if (args.length === 1) {
            dirHandler.setCurrentHost(args[0]);
            dirHandler.setCurrentUser('root');
            dirHandler.setCurrentPassword('');
            connection.connect(args[0], 'root', '');
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Host set to ${themes.secondary}${args[0]}${bc.end}${bc.end}`);
        } else if (args.length === 2) {
            dirHandler.setCurrentHost(args[0]);
            dirHandler.setCurrentUser(args[1]);
            dirHandler.setCurrentPassword('');
            connection.connect(args[0], args[1], '');
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Host set to ${themes.secondary}${args[0]}${bc.e_crimson} and User set to ${themes.secondary}${args[1]} ${bc.end}${bc.end}`);
            // log password set to empty string
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Password set to ${themes.secondary}''${bc.end}${bc.end}`);
        } else if (args.length === 3) {
            dirHandler.setCurrentHost(args[0]);
            dirHandler.setCurrentUser(args[1]);
            dirHandler.setCurrentPassword(args[2]);
            connection.connect(args[0], args[1], args[2]);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Host set to ${themes.secondary}${args[0]}${bc.e_crimson}, User set to ${themes.secondary}${args[1]} ${bc.e_crimson}and Password set to ${themes.secondary}${args[2]}${bc.end}${bc.end}`);
        } else {
            console.log(args);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Too many arguments!${bc.end}${bc.end}`);
        }
        connection.connect((err) => {
            if (err) {
                console.error(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Failed to connect to MySQL server: ${err}${bc.end}${bc.end}`);
                return;
            }
            console.log(`${themes.secondary}Connected to MySQL server as ${themes.light}${connection.threadId}${bc.end}${bc.end}`);
            // get a list of databases
            connection.query('SHOW DATABASES', (err, results) => {
                if (err) {
                    console.error(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Failed to get databases: ${err}${bc.end}${bc.end}`);
                    return;
                }
                // display the databases
                console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Databases:${bc.end}${bc.end}`);
                results.forEach(result => {
                    console.log(`${themes.light}${result.Database}${bc.end}`);
                });
            });
        });
    }
};