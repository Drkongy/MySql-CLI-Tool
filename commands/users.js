const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
const connectionHandler = require('../Handlers/ConnectionHandler');

let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'users',
    description: 'shows all users and their permissions',
    execute(message, args) {
        const connection = connectionHandler.getConnection();

        if (connection.state === 'disconnected') {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}You are not connected to a MySQL server!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}connect${bc.e_blue_violet} command to connect to a MySQL server${bc.end}${bc.end}`);
            return;
        }

        connection.query(`SELECT * FROM mysql.user`, (err, result) => {
            if (err) {
                console.error(err);
                console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to show the users!${bc.end}${bc.end}`);
                return;
            }

            let formattedResult = [];
            result.forEach((user) => {
                let privilegeCount = Object.values(user).filter(Boolean).length;
                let formattedUser = {
                    'User': user.User,
                    'Host': user.Host,
                    'Password': user.Password ? 'Yes' : 'No',
                    'Privilege count': privilegeCount,
                };
                formattedResult.push(formattedUser);
            });
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Showing all users and their permissions${bc.end}${bc.end}`);
            console.table(formattedResult);

        });
    }
};