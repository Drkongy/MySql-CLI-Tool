const mysql = require('mysql');
const readline = require('readline');
const CommandHandler = require('./Handlers/CommandHandler');
const connectionHandler = require('./Handlers/ConnectionHandler');
const directoryHandler = require('./Handlers/DirectoryHandler');
const Logo = require('./Assets/Logo');
const Colours = require('./Assets/Colours');
const Theme = require('./Assets/Theme');
const packages = require('./package.json');



let bc = Colours;
let themes = Theme;


// create readline interface to prompt for input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// create connection object using default values
const connection = connectionHandler.getConnection();
const dirHandler = directoryHandler;

directoryHandler.loadDirectory();





const commandHandler = new CommandHandler(rl);
commandHandler.loadCommands();
const commands = commandHandler.getCommands();
for (const [name, command] of commands) {
    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Loaded Command: ${themes.secondary}${name} ${bc.e_crimson}✅ ${bc.end}${bc.end}`);
}
console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Loaded ${themes.secondary}${commands.size} ${bc.e_crimson}commands!${bc.end}${bc.end}`);


const os = require('os');
const { log } = require('console');
const clientname = os.hostname();
const hostname = connection.config.host;
const rootUser = connection.config.user;
// get the version from the package.json file
const { version } = require('./package.json');






setTimeout(() => {
    console.clear();
    Logo.printHeader();

    // connect to server
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to database:', err);
            return;
        }
        console.log(`${bc.e_gray}[${themes.light}Client: ${themes.secondary}SQL CLI${bc.e_gray}] [${themes.light}Host: ${themes.secondary}${hostname}${bc.e_gray}] [${themes.light}Version: ${themes.secondary}${version}${bc.e_gray}]
${bc.e_gray}[${themes.light}Platform: ${themes.secondary}windows_x64${bc.e_gray}] [${themes.light}OS: ${themes.secondary} Windows 11${bc.e_gray}]
${bc.e_gray}[${themes.light}Theme: ${themes.secondary}${themes.main}■${themes.light}■${themes.secondary}■${bc.end}]
${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Welcome to Kongolian SQL Management CLI! You're Connected to ${themes.secondary}${hostname}${bc.e_blue_violet} via ${themes.secondary}${clientname}!${bc.end}${bc.end}`);
        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Type ${themes.secondary}help ${bc.e_crimson}to see a list of commands, or type ${themes.secondary}exit ${bc.e_crimson}to quit!${bc.end}${bc.end}`);



        promptUser();

        function promptUser() {
            const directory = dirHandler.directoryFormat();
            rl.question(`${directory}`, (input) => {
                // check if user wants to exit
                if (input === 'exit') {
                    rl.close();
                    connection.end((err) => {
                        if (err) {
                            console.error('Error closing connection:', err);
                            return;
                        }
                        console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Connection closed successfully!${bc.end}${bc.end}`);
                    });
                    return;

                }
                commandHandler.handleCommand(input, commandHandler, rl);
                setTimeout(() => {
                    promptUser();
                }, 100);
            });
        }
    });
}, 1500);