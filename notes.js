console.log('Starting notes.js');

var addNote = (title,body)=>{
console.log('Adding Note',title,body)
};

var getAll = () => {
console.log('Getting all notes');
};

var readNotes = (title) => {
  console.log('Reading note', title);
};

var removeNote = (title) => {
    console.log('Removgin note', title);
};
    
module.exports = {
addNote,
getAll,
readNotes,
removeNote
};