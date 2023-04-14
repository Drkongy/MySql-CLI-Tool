const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
const directoryHandler = require('../Handlers/DirectoryHandler');
const connectionHandler = require('../Handlers/ConnectionHandler');
const readline = require('readline');
let bc = Colours;
let themes = Theme;


module.exports = {
    name: 'insert',
    description: 'Insert a row into a table',
    execute(message, args, rl) {
        const connection = connectionHandler.getConnection();
        const dirHandler = directoryHandler;
        const currentDir = dirHandler.getCurrentDirectory();


        if (connection.state === 'disconnected') {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}You are not connected to a MySQL server!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}connect${bc.e_blue_violet} command to connect to a MySQL server${bc.end}${bc.end}`);
            return;
        }

        let currentDirArray = currentDir.split('/');
        if (currentDirArray.length !== 2) {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}You are not in a table!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}cd${bc.e_blue_violet} command to select a database and table${bc.end}${bc.end}`);
            return;
        }
        if (args.length !== 1) {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Invalid arguments!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Example: ${themes.secondary}insert${bc.e_blue_violet} ${currentDirArray[1]}${bc.end}${bc.end}`);
            return;
        }

        const databaseName = currentDirArray[0];
        const tableName = currentDirArray[1];

        const rl2 = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let currentIndex = 0;
        let columns = [];
        let sql = `INSERT INTO ${databaseName}.${tableName} VALUES(`;

        let getUserInput = function() {
            if (currentIndex === columns.length) {
                sql += ')';
                connection.query(sql, (err, result) => {
                    if (err) {
                        console.error(err);
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to insert the data!${bc.end}${bc.end}`);
                        return;
                    }
                    console.log(`${bc.e_gray}(${bc.e_green}✔${bc.e_gray}) ${bc.e_green}Data inserted successfully!${bc.end}${bc.end}`);
                    rl2.close();
                    rl.close();
                    // create new rl
                    rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout
                    });

                    rl.prompt();
                    // return the rl to the main file
                    return rl;


                });
                return;
            }

            const column = columns[currentIndex];

            // dlay the prompt so that the user can see the output



            setTimeout(() => {
                rl2.prompt();
            }, 100);
            rl2.question(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Enter the value for ${themes.secondary}${column}${bc.e_blue_violet}: ${bc.end}`, (answer) => {
                if (answer.trim() === '') {
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Value cannot be empty!${bc.end}${bc.end}`);
                    getUserInput();
                    return;
                }
                sql += `'${answer}'`;
                if (currentIndex < columns.length - 1) {
                    sql += ', ';
                }
                currentIndex++;
                getUserInput();
            });

        };



        connection.query(`DESCRIBE ${databaseName}.${tableName}`, (err, result) => {
            if (err) {
                console.error(err);
                console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to get the table structure!${bc.end}${bc.end}`);
                return;
            }

            let sql = `INSERT INTO ${databaseName}.${tableName}(`;
            result.forEach((column, index) => {
                columns.push(column.Field);
                sql += `${column.Field}`;
                if (index < result.length - 1) {
                    sql += ', ';
                } else {
                    sql += ')';
                }
            });
            sql += ' VALUES(';
            currentIndex = 0;
            getUserInput();
        });



    }
}