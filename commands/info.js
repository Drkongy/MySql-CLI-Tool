const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'info',
    description: 'shows info about the current connection',
    execute(message, args) {




        connection.query('SELECT * FROM information_schema.SCHEMATA', (err, results) => {
            if (err) {
                console.error('Error connecting to database:', err);
                return;
            }
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Connected to ${themes.secondary}${hostname}${bc.e_crimson} as ${themes.secondary}${rootUser}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Using password: ${themes.secondary}${connection.config.password}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Databases: ${themes.secondary}${results.length}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Client: ${themes.secondary}${clientname}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Version: ${themes.secondary}${version}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Protocol: ${themes.secondary}${protocol}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Server: ${themes.secondary}${server}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Server version: ${themes.secondary}${serverVersion}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Server OS: ${themes.secondary}${serverOs}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Connection ID: ${themes.secondary}${connectionId}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Current database: ${themes.secondary}${currentDb}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}SSL: ${themes.secondary}${ssl}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}SSL version: ${themes.secondary}${sslVersion}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}SSL cipher: ${themes.secondary}${sslCipher}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}SSL CA: ${themes.secondary}${sslCa}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}SSL CA path: ${themes.secondary}${sslCaPath}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}SSL cert: ${themes.secondary}${sslCert}${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}SSL key: ${themes.secondary}${sslKey}${bc.end}${bc.end}`);

        });






    }
};