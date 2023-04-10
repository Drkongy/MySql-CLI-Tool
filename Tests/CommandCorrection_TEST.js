const Fuse = require('fuse.js');
const CommandHandler = require('./CommandHandler');


// Define the commands

// load all the commands from CommandHandler.js
const commandHandler = new CommandHandler();
commandHandler.loadCommands();
const commands = commandHandler.getCommands();



const commandsList = [];

for (const [name, command] of commands) {
    commandsList.push({ name: command.name });
}

console.log(commandsList);


// Create the Fuse instance
const fuse = new Fuse(commandsList, {
    keys: ['name']
});







// Search for a command
const searchTerm = 'claer';
const searchResults = fuse.search(searchTerm);

if (searchResults.length > 0) {
    const closestMatch = searchResults[0].item;
    console.log(`Did you mean '${closestMatch.name}'?`);
} else {
    console.log(`Command '${searchTerm}' not found.`);
}