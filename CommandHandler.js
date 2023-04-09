const fs = require('fs');
const Colours = require('./Assets/Colours');
const Theme = require('./Assets/Theme');

let bc = Colours;
let themes = Theme;

class CommandHandler {
    constructor() {
        this.commands = new Map();
    }

    loadCommands() {
        const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`./Commands/${file}`);
            this.commands.set(command.name, command);
            //  log all the commands that are loaded into the map
            console.log(`Loaded Command: ${command.name} ✅ `);
            if (!command) {
                console.log(`Failed to load command: ${file} ❌`);
            }
        }
    }

    handleCommand(message) {
        const args = message.slice().trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = this.commands.get(commandName);
        if (!command) {
            // console.log(`Command '${commandName}' not found.`);
            // format the message to use my color themes and stuff
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Command ${themes.secondary}${commandName} ${bc.e_crimson}not found!${bc.end}${bc.end}`);

            return;
        }

        try {
            command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('There was an error executing that command!');
        }
    }


}


module.exports = CommandHandler;