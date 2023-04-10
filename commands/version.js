const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');

let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'version',
    description: 'Shows the version of the application',
    execute(message, args) {
        const { version } = require('../package.json');
        console.log(`${themes.secondary}Version: ${bc.e_gray}${version}${bc.end}${bc.end}`);
        return;

    }
};