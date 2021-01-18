//Node.js has a Global object
  // there is no window object (no document)
console.log(global);

setTimeout(() => {
  console.log('in the timeout');
  clearInterval(int)
}, 3000)

const int = setInterval(() => {
  console.log('in the interval');
}, 1000)

console.log(__dirname, 'directory absolute path');
console.log(__filename, 'file absolute path');