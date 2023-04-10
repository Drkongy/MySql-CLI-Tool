const fs = require('fs');
const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');
// const Theme = require('../Commands/');

const Fuse = require('fuse.js');


let bc = Colours;
let themes = Theme;

class CommandHandler {
    constructor() {
        this.commands = new Map();
    }

    loadCommands() {
        const commandFiles = fs.readdirSync(`${__dirname}/../Commands`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`../Commands/${file}`);
            this.commands.set(command.name, command);
            if (!command) {
                console.log(`Failed to load command: ${file} ❌`);
            }
        }
    }

    getCommands() {
        return this.commands;
    }

    handleCommand(message) {
        const args = message.slice().trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const command = this.commands.get(commandName);
        // if the command is null or empty just return
        if (commandName === null || commandName === undefined || commandName === '') {
            return;
        }

        if (!command) {
            this.findCommand(commandName);
            return;
        }

        try {
            command.execute(message, args);
        } catch (error) {
            console.error(error);
            message.reply('There was an error executing that command!');
        }
    }

    findCommand(searchTerm) {
        const commandsList = [];

        for (const [name, command] of this.commands) {
            commandsList.push({ name: command.name });
        }

        // Create the Fuse instance
        const fuse = new Fuse(commandsList, {
            keys: ['name']
        });

        const searchResults = fuse.search(searchTerm);

        if (searchResults.length > 0) {
            const closestMatch = searchResults[0].item;
            // console.log(`Did you mean '${closestMatch.name}'?`);
            console.log(`${bc.e_gray}(${bc.e_blue_violet}?${bc.e_gray}) ${bc.e_blue_violet}Did you mean ${themes.secondary}${closestMatch.name}${bc.e_blue_violet}?${bc.end}${bc.end}`);
        } else {
            console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Command ${themes.secondary}${searchTerm} ${bc.e_crimson}not found!${bc.end}${bc.end}`);

        }
    }
}



module.exports = CommandHandler;