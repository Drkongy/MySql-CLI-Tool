const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');

let bc = Colours;
let themes = Theme;

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

function connect(host, user, password) {
    // create a new connection object using the given parameters
    const newConnection = mysql.createConnection({
        host: host,
        user: user,
        password: password
    });

    // close the existing connection if it is open
    if (connection.state !== 'disconnected') {
        connection.end(() => {
            // update the connection object with the new values
            Object.assign(connection, newConnection);

            // open a new connection
            connection.connect((err) => {
                if (err) {
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Failed to connect to MySQL server: ${err}${bc.end}${bc.end}`);
                    return;
                }
                console.log(`${bc.e_gray}( ${bc.e_lime_green}🗸${bc.e_gray}) ${bc.e_green}Connected to MySQL server: ${themes.secondary}${host}${bc.end}${bc.end}`);

                connection.state = 'connected';
                connection._protocol._ended = false;
            });
        });
    } else {
        // update the connection object with the new values
        Object.assign(connection, newConnection);

        // open a new connection
        connection.connect((err) => {
            if (err) {
                console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Failed to connect to MySQL server: ${err}${bc.end}${bc.end}`);
                return;
            }
            console.log(`${bc.e_gray}(${bc.e_lime_green} 🗸${bc.e_gray}) ${bc.e_green}Connected to MySQL server: ${themes.secondary}${host}${bc.end}${bc.end}`);

            // reset the state of the connection object
            connection.state = 'connected';
            connection._protocol._ended = false;
        });
    }
}









function getConnection() {
    return connection;
}

module.exports = {
    connect,
    getConnection
};