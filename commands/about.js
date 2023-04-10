const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');

let bc = Colours;
let themes = Theme;

module.exports = {
    name: 'about',
    description: 'Shows information about the application',
    execute(message, args) {
        // get the name and description and add some general information about the application
        const { name, description, version, author, license } = require('../package.json');
        console.log(`${themes.secondary}Name: ${bc.e_gray}${name}${bc.end}${bc.end}`);
        console.log(`${themes.secondary}Description: ${bc.e_gray}${description}${bc.end}${bc.end}`);
        console.log(`${themes.secondary}Author: ${bc.e_gray}${author}${bc.end}${bc.end}`);
        console.log(`${themes.secondary}Version: ${bc.e_gray}${version}${bc.end}${bc.end}`);
        console.log(`${themes.secondary}License: ${bc.e_gray}${license}${bc.end}${bc.end}`);
        return;
    }
};