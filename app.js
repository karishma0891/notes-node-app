console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];
console.log('Command', command);
console.log('Process',process.argv);
console.log('Yargs',argv);


if (command === 'add') {
    notes.addNote(argv.title,argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.readNotes(argv.title);
} else if (command === 'remove') {
 notes.removeNote(argv.title);
} else {
    console.log('Command Not recorgnised');
}