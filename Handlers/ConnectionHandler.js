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
    // close the existing connection if it is open
    if (connection.state !== 'disconnected') {
        connection.end();
    }

    connection.config.host = host;
    connection.config.user = user;
    connection.config.password = password;

    // open a new connection
    connection.connect((err) => {
        if (err) {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Failed to connect to MySQL server: ${err}${bc.end}${bc.end}`);
            return;
        }
        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Connected to MySQL server: ${themes.secondary}${host}${bc.end}${bc.end}`);
    });
}


function getConnection() {
    return connection;
}

module.exports = {
    connect,
    getConnection
};