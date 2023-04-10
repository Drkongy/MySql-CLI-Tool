const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');

let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'state-rules',
    description: 'Shows all possible states and their meanings for the MySQL connection',
    execute(message, args) {
        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Possible states for MySQL connection:${bc.end}${bc.end}`);
        console.log(`${themes.secondary}  -  ` + `disconnected: ${themes.light}The connection is not established.${bc.end}`);
        console.log(`${themes.secondary}  -  ` + `authenticated: ${themes.light}The connection has been established and authentication was successful.${bc.end}`);
        console.log(`${themes.secondary}  -  ` + `handshaking: ${themes.light}The connection is being established.${bc.end}`);
        console.log(`${themes.secondary}  -  ` + `protocol_handshake: ${themes.light}The initial handshake with the server is in progress.${bc.end}`);
        console.log(`${themes.secondary}  -  ` + `user_handshake: ${themes.light}Authentication handshake with the server is in progress.${bc.end}`);
        console.log(`${themes.secondary}  -  ` + `user_verification: ${themes.light}The connection is being verified.${bc.end}`);
        console.log(`${themes.secondary}  -  ` + `destroyed: ${themes.light}The connection has been destroyed.${bc.end}`);
    }
};