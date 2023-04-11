const Colours = require('../Assets/Colours');
const Theme = require('../Assets/Theme');

let bc = Colours;
let themes = Theme;


// a variable to store the current directory
let currentDirectory = '';
let currentUser = '';
let currentHost = '';
let currentPassword = '';

function loadDirectory() {
    // if there is no current directory, set it to the default
    if (currentDirectory === '') {
        currentDirectory = '~';
    }
    // if there is no current user, set it to the default
    if (currentUser === '') {
        currentUser = 'root';
    }
    // if there is no current host, set it to the default
    if (currentHost === '') {
        currentHost = 'localhost';

    }
    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Loaded directories: ${themes.secondary}${currentDirectory} ${bc.e_crimson}✅ ${bc.end}${bc.end}`);
    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Loaded users: ${themes.secondary}${currentUser} ${bc.e_crimson}✅ ${bc.end}${bc.end}`);
    console.log(`${bc.e_gray}(${bc.e_red}!${bc.e_gray}) ${bc.e_crimson}Loaded hosts: ${themes.secondary}${currentHost} ${bc.e_crimson}✅ ${bc.end}${bc.end}`);
}

function getCurrentDirectory() {
    return currentDirectory;
}

function getCurrentUser() {
    return currentUser;
}

function getCurrentHost() {
    return currentHost;
}

function getCurrentPassword() {
    return currentPassword;
}

function setCurrentDirectory(dir) {
    currentDirectory = dir;
}

function setCurrentUser(user) {
    currentUser = user;
}

function setCurrentHost(host) {
    currentHost = host;
}

function setCurrentPassword(password) {
    currentPassword = password;
}

function clearCurrentDirectory() {
    currentDirectory = '';
}

function directoryFormat() {
    if (currentDirectory === '') {
        currentDirectory = '~';
    }


    if (currentUser === '') {
        currentUser = 'root';
    }

    if (currentHost === '') {
        currentHost = 'localhost';
    }
    let formattedDirectory = currentDirectory;
    if (currentDirectory.includes('/')) {
        formattedDirectory = currentDirectory.replace(/\//g, `${bc.e_green} -> ${themes.secondary}`);

    }
    return `${themes.light}${currentUser}${themes.secondary}@${themes.light}${currentHost}${themes.main} ${themes.secondary}${formattedDirectory}${bc.end}${bc.end} $ `;
}

module.exports = {
    getCurrentDirectory,
    setCurrentDirectory,
    getCurrentUser,
    setCurrentUser,
    getCurrentHost,
    setCurrentHost,
    getCurrentPassword,
    setCurrentPassword,
    loadDirectory,
    clearCurrentDirectory,
    directoryFormat
};