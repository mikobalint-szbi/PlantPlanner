

const fs = require('fs');
const filePath = '../../static/Database/database.json';
// @ts-ignore
export let database;


fetch('../../static/Database/database.json').then(x => {

});


// @ts-ignore
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  try {
    // Parse the JSON data
    database = JSON.parse(data);

    // Now you can work with the parsed JSON data
    console.log('Parsed JSON data:', database);

  } catch (parseError) {
    console.error('Error parsing JSON:', parseError);
  }
});




