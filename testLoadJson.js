const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);
    console.log('JSON loaded successfully:', jsonData);
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr.message);
  }
});
