var fs = require('fs');

// Synchronous Execution -> First File reading Completed then moves to console statement
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);
// Hello World


// Asynchronous Execution -> File reading is happening asynchronously and moves to console statement directly
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8', (err, data) => {
    console.log(data);
});

console.log('Done'); 
// Hello World ! -> Synchronous
// Done
// Hello World ! -> Asynchronous