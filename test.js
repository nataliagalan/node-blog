// const user = {
//   name: 'Michael',
//   email: 'm@gmail.com'
//   progress: [
//     {courseId: 123, progress: 'complete'},
//     {courseId: 456, progress: 'incomplete'},
//     {courseId: 789, progress: 'complete'}
//   ]
// }

const user = {
  name: 'Michael',
  email: 'm@gmail.com',
  progress: {
    '123': {progress: 'complete'},
    '456': {progress: 'incomplete'},
    '798': {progress: 'complete'},
  }
}

// console.log(user.progress['456']);

const keys = Object.keys(user.progress)
console.log(keys, 'keys');
keys.forEach(key => console.log(user.progress[key], 'user.progress[key]'))