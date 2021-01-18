const people = ['ursula', 'barbara', 'bruce', 'mario'];
const ages = [20, 25, 30, 38];

// This is how you export
module.exports = {
	people,
	ages,
};

// importing the Operative System module object built into node
const os = require('os')
console.log(os.platform(), os.homedir(), 'os platform and home directory path');
