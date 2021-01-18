// Importing The File System module
const fs = require('fs');

// reading files - asynchronous
  // takes 2 arguments
    // 1. the relative path to the file
    // 2. the function to fire when complete
fs.readFile('./docs/blog1.txt', (err, data) => {
  if(err){
    console.log(err, 'readFile error');
  }
  console.log(data.toString(), 'data');
});


// writing files - asynchronous
  // takes 3 arguments
    // 1. the relative path to the file
    // 2. the text we want to write to the file
    // 3. the function to fire when complete
fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
  console.log('file was written');
})

// directories - asynchronous
  // takes 2 arguments
    // 1. specify what directory and where
    // 2. the callback to fire when complete
    
  // check and only trigger the callback if the folder does not exist
    // else if the folder exists, delete it
if (!fs.existsSync('./assets')){
  fs.mkdir('./assets', (err) => {
    if(err){
      console.log(err, 'mkdir error');
    }
    console.log('folder created');
  })
} else {
  fs.rmdir('./assets', (err) => {
    if(err){
      console.log(err, 'rmdir error');
    }
    console.log('folder deleted');
  })
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')){
  fs.unlink('./docs/deleteme.txt', (err) => {
    if(err){
      console.log(err, 'unlink error');
    }
    console.log('file deleted');
  })
}