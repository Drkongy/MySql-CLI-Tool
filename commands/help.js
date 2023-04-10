const CommandHandler = require('../Handlers/CommandHandler');
const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');


let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'help',
    description: 'Displays a list of available commands with their descriptions',
    execute(message, args) {
        // console.log('Available commands:');
        // light theme on above
        console.log(`${themes.secondary}Available commands:${bc.end}${bc.end}`);
        const commandHandler = new CommandHandler();
        commandHandler.loadCommands();
        const commands = commandHandler.getCommands();
        for (const [name, command] of commands) {
            console.log(`${themes.secondary}${name}: ${bc.e_gray}${command.description}${bc.end}${bc.end}`);

        }
    }
};