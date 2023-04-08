module.exports = {
    name: 'clear',
    description: 'Clears the console',
    execute(message, args) {
        console.clear();
        console.log('Console cleared');
        return;

    }
};