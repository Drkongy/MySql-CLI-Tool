const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
const mysql = require('mysql');
const directoryHandler = require('../Handlers/DirectoryHandler');
const connectionHandler = require('../Handlers/ConnectionHandler');
let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'ls',
    description: 'list all databases / tables in the current directory',
    execute(message, args) {
        const connection = connectionHandler.getConnection();
        const dirHandler = directoryHandler;
        let currentDir = dirHandler.getCurrentDirectory();

        if (connection.state === 'disconnected') {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}You are not connected to a MySQL server!${bc.end}${bc.end}`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Please use the ${themes.secondary}connect${bc.e_blue_violet} command to connect to a server${bc.end}${bc.end}`);
            return;
        }

        if (args.length === 0) {

            if (currentDir === '~') {
                connection.query('SHOW DATABASES', (err, result) => {
                    if (err) {
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to list databases!${bc.end}${bc.end}`);
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Error: ${err}${bc.end}${bc.end}`);
                        return;
                    }
                    currentDir

                    console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Databases:${bc.end}${bc.end}`);
                    result.forEach((database) => {
                        console.log(`   ${bc.e_blue_violet}-${database.Database}${bc.end}${bc.end}`);
                    });



                });
                return;
            }

            let currentDirArray = currentDir.split('/');

            if (currentDirArray.length === 1) {
                connection.query(`SELECT table_name, table_schema FROM information_schema.tables WHERE table_schema = '${currentDirArray[0]}' AND table_name NOT LIKE 'laravel%';`, (err, rows) => {
                    // connection.query(`SHOW TABLES FROM ${database}`, (err, result) => {
                    if (err) {
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to list tables!${bc.end}${bc.end}`);
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Error: ${err}${bc.end}${bc.end}`);
                        return;
                    }
                    console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}${currentDirArray[0]} Tables:${bc.end}${bc.end}`);
                    rows.forEach((row) => {
                        console.log(`   ${bc.e_blue_violet}-${row.table_name}${bc.end}${bc.end}`);
                    });


                });
            }

            if (currentDirArray.length === 2) {
                // get the columns of the table
                connection.query(`SELECT column_name FROM information_schema.columns WHERE table_schema = '${currentDirArray[0]}' AND table_name = '${currentDirArray[1]}';`, (err, rows) => {
                    if (err) {
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to list columns!${bc.end}${bc.end}`);
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Error: ${err}${bc.end}${bc.end}`);
                        return;
                    }
                    console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}${currentDirArray[1]} Columns:${bc.end}${bc.end}`);
                    rows.forEach((row) => {
                        console.log(`   ${bc.e_blue_violet}- ${row.column_name}${bc.end}${bc.end}`);
                    });
                });
            }

        }

        if (args.length === 1) {
            // check if the first arg matches a database name, if it doesnt return an error
            // if it does, return the tables in the database

            let database = args[0];

            connection.query(`SELECT table_name, table_schema FROM information_schema.tables WHERE table_schema = '${database}' AND table_name NOT LIKE 'laravel%';`, (err, rows) => {
                if (err) {
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to list tables!${bc.end}${bc.end}`);
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Error: ${err}${bc.end}${bc.end}`);
                    return;
                }

                let databaseExists = false;

                rows.forEach((row) => {
                    if (row.table_schema === database) {
                        databaseExists = true;
                    }
                });

                if (!databaseExists) {
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}The database ${database} does not exist!${bc.end}${bc.end}`);
                    return;
                }

                console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}${database} Tables:${bc.end}${bc.end}`);
                rows.forEach((row) => {
                    console.log(`   ${bc.e_blue_violet}-${row.table_name}${bc.end}${bc.end}`);
                });
            });



        }




        if (args.length === 2) {

            // check if the first args match a table name, if it doesnt return an error
            // if it does, check if the second arg matches a column name, if it doesnt return an error
            // if it does, return the data in the column

            let database = args[0];
            let table = args[1];

            connection.query(`SELECT table_name, table_schema FROM information_schema.tables WHERE table_schema = '${database}' AND table_name NOT LIKE 'laravel%';`, (err, rows) => {
                if (err) {
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to list tables!${bc.end}${bc.end}`);
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Error: ${err}${bc.end}${bc.end}`);
                    return;
                }

                let tableExists = false;

                rows.forEach((row) => {
                    if (row.table_name === table) {
                        tableExists = true;
                    }
                });

                if (!tableExists) {
                    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}The table ${table} does not exist in the database ${database}!${bc.end}${bc.end}`);
                    return;
                }

                connection.query(`SELECT column_name FROM information_schema.columns WHERE table_schema = '${database}' AND table_name = '${table}';`, (err, rows) => {
                    if (err) {
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}An error occurred while trying to list columns!${bc.end}${bc.end}`);
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Error: ${err}${bc.end}${bc.end}`);
                        return;
                    }

                    let columns = [];

                    rows.forEach((row) => {
                        columns.push(row.column_name);
                    });

                    console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}${table} Columns:${bc.end}${bc.end}`);
                    columns.forEach((column) => {
                        console.log(`   ${bc.e_blue_violet}- ${column}${bc.end}${bc.end}`);
                    });
                });
            });





        }

    }
}