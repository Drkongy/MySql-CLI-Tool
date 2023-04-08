const fs = require('fs');

class CommandHandler {
    constructor() {
        this.commands = new Map();
    }

    loadCommands() {
        const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`./commands/${file}`);
            this.commands.set(command.name, command);
            //  log all the commands that are loaded into the map
            console.log(`Loaded command: ${command.name}`);
        }
    }

    handleCommand(message) {
        const args = message.slice().trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = this.commands.get(commandName);
        if (!command) {
            console.log(`Command '${commandName}' not found.`);
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