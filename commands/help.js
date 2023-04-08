module.exports = {
    name: 'help',
    description: 'Displays a list of available commands',
    execute(message, args) {
        console.log('help command executed');
        return;
    }
};