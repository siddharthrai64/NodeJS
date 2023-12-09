// Your Javascript Code Goes Here

//This is the emiiter function coming from emitter .js file

// var Emitter = require('./emitter'); 

// THis emitter coming from the NodeJS event function works in the same way

var eventConfig = require('./config')
var Emitter = require('events'); 

var emtr = new Emitter;
console.log(eventConfig.GREET)
emtr.on(eventConfig.GREET, () => console.log('This is firsrt on method'));
emtr.on(eventConfig.GREET, () => console.log('This is second on method'));

console.log('Hey, this will print before the on event');
emtr.emit(eventConfig.GREET);

