const path = require('path');
const fs = require('fs'); // File System
const solc = require('solc');  // Solidity Compiler


const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');


module.exports = solc.compile(source, 1).contracts[':Inbox']; // source file and number of contracts we want to compile
