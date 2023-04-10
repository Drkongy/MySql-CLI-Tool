const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
const directoryHandler = require('../Handlers/DirectoryHandler');
const connectionHandler = require('../Handlers/ConnectionHandler');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'disconnect',
    description: 'Disconnects from the current MySQL server',
    execute(message, args) {
        const currentConnection = connectionHandler.getConnection();
        currentConnection.end(function(err) {
            if (err) {
                console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Error closing connection: ${err}${bc.end}${bc.end}`);
                return;
            }
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Connection closed successfully!${bc.end}${bc.end}`);
        });



    }




}