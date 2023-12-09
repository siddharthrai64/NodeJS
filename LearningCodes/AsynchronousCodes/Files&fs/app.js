var fs = require('fs');
var greet = fs.readFileSync(__dirname, './greet', 'utf8');
console.log(greet);