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
    connection.config.host = host;
    connection.config.user = user;
    connection.config.password = password;
}

function getConnection() {
    return connection;
}

module.exports = {
    connect,
    getConnection,
    connection
};