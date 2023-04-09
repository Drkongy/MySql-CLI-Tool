const { exec } = require('child_process');

module.exports = {
    name: 'restart',
    description: 'restarts the application',
    execute(message, args) {
        exec('npm restart', (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(stdout);
        });
    }
};