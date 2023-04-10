const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
const connectionHandler = require('../Handlers/ConnectionHandler');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'info',
    description: 'shows info about the current connection',
    execute(message, args) {
        const connection = connectionHandler.getConnection();
        const hostname = connection.config.host;
        const rootUser = connection.config.user;
        const protocol = connection.config.protocol;
        const server = connection.config.server;
        const clientname = connection.config.clientname;
        const version = connection.config.version;
        const port = connection.config.port;
        const os = require('os');






        console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${themes.secondary}Client info:${bc.end}${bc.end}`);
        console.log(`   - ${bc.e_blue_violet}Client OS hostname: ${themes.secondary}${os.hostname()}${bc.end}${bc.end}`);
        console.log(`   - ${bc.e_blue_violet}Client OS: ${themes.secondary}${os.platform()}${bc.end}${bc.end}`);
        console.log(`   - ${bc.e_blue_violet}Client OS version: ${themes.secondary}${os.release()}${bc.end}${bc.end}`);
        console.log(`   - ${bc.e_blue_violet}Client OS architecture: ${themes.secondary}${os.arch()}${bc.end}${bc.end}`);
        console.log(`   - ${bc.e_blue_violet}Client OS uptime: ${themes.secondary}${os.uptime()} ${bc.e_blue_violet}seconds${bc.end}${bc.end}`);
        console.log(`   - ${bc.e_blue_violet}Client OS total memory: ${themes.secondary}${os.totalmem()}${bc.end}${bc.end}`);
        console.log(`   - ${bc.e_blue_violet}Client OS free memory: ${themes.secondary}${os.freemem()}${bc.end}${bc.end}`);
        console.log(`   - ${bc.e_blue_violet}Client OS CPU count: ${themes.secondary}${os.cpus().length}${bc.end}${bc.end}`);
        console.log(`   - ${bc.e_blue_violet}Client OS CPU model: ${themes.secondary}${os.cpus()[0].model}${bc.end}${bc.end}`);
        console.log(`   - ${bc.e_blue_violet}Client port: ${themes.secondary}${port}${bc.end}${bc.end}`);












        console.log(``);


        console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${themes.secondary}Server info:${bc.end}${bc.end}`);
        const versionQuery = `SELECT VERSION() AS version;`;
        const databaseCountQuery = `SELECT COUNT(*) AS count FROM information_schema.schemata;`;
        const connectionInfoQuery = `SELECT * FROM information_schema.processlist WHERE ID = CONNECTION_ID();`;


        connection.query(versionQuery, (err, versionResults) => {
            if (err) throw err;

            connection.query(connectionInfoQuery, (err, connectionInfoResults) => {
                if (err) throw err;
                console.log(`   - ${bc.e_blue_violet}Connected to ${themes.secondary}${hostname}${bc.e_blue_violet} as ${themes.secondary}${rootUser}${bc.end}${bc.end}`);
                console.log(`   - ${bc.e_blue_violet}MySQL version: ${themes.secondary}${versionResults[0].version}${bc.end}${bc.end}`);
                console.log(`   - ${bc.e_blue_violet}Connection ID: ${themes.secondary}${connectionInfoResults[0].ID}${bc.end}${bc.end}`);
                console.log(`   - ${bc.e_blue_violet}Current query: ${themes.secondary}${connectionInfoResults[0].CURRENT_QUERY}${bc.end}${bc.end}`);
                console.log(`   - ${bc.e_blue_violet}Protocol: ${themes.secondary}${protocol}${bc.end}${bc.end}`);
                console.log(`   - ${bc.e_blue_violet}Server: ${themes.secondary}${server}${bc.end}${bc.end}`);
                console.log(`   - ${bc.e_blue_violet}Client name: ${themes.secondary}${clientname}${bc.end}${bc.end}`);
                console.log(`   - ${bc.e_blue_violet}Version: ${themes.secondary}${version}${bc.end}${bc.end}`);

                connection.query(databaseCountQuery, (err, databaseCountResults) => {
                    if (err) throw err;
                    console.log(`   - ${bc.e_blue_violet}Total databases: ${themes.secondary}${databaseCountResults[0].count}${bc.end}${bc.end}`);
                });
            });


        });
    }

}