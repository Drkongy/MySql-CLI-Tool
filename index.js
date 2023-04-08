const mysql = require('mysql');
const readline = require('readline');
// const { handleCommand } = require('./CommandHandler');
const CommandHandler = require('./CommandHandler');


// create readline interface to prompt for input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// create connection object using default values
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

const commandHandler = new CommandHandler();
commandHandler.loadCommands();



// connect to server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }

    console.log('Connected to database server');

    // prompt user for input
    promptUser();


    // function to prompt user for input
    function promptUser() {
        rl.question('Enter a command (or type "exit" to quit): ', (input) => {
            // check if user wants to exit
            if (input === 'exit') {
                rl.close();
                // close connection
                connection.end((err) => {
                    if (err) {
                        console.error('Error closing connection:', err);
                        return;
                    }
                    console.log('Connection closed');
                });
                return;

            }

            // handle command
            commandHandler.handleCommand(input);

            // loop
            setTimeout(() => {
                console.log('\n');
                promptUser();
            }, 100);
        });
    }
});