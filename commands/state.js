const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
const directoryHandler = require('../Handlers/DirectoryHandler');
const connectionHandler = require('../Handlers/ConnectionHandler');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'state',
    description: 'gets the state of the current connection',
    execute(message, args) {
        const currentConnection = connectionHandler.getConnection();
        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Current connection state: ${themes.secondary}${currentConnection.state}${bc.end}${bc.end}`);
    }
}