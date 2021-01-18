// Streams & Buffers

const fs = require('fs');
// The first argument for both readStream and writeStream is the path to where we want to read data from / write data to.
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt')

// on() below is an event listener for a data event
  // the data event is every time we receive a buffer or chunk of data from the stream,
  // the callback we write is fired
// readStream.on('data', (chunk) => {
// 	console.log('====== NEW CHUNK ====');
//   console.log(chunk);
//   writeStream.write('\nNEW CHUNK\N')
//   writeStream.write(chunk)
// });

// piping
  // Does the same thing as above
  // take the readStream and pipe each chunk into the writeStream step by step
readStream.pipe(writeStream);
