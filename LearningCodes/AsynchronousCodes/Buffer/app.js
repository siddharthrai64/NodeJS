var buf = new Buffer.from('Hello', 'utf-8');
console.log(buf); //<Buffer 48 65 6c 6c 6f>
console.log(buf.toString()); //Hello
console.log(buf.toJSON()); // { type: 'Buffer', data: [ 72, 101, 108, 108, 111 ] }
console.log(buf[2]); // 108

buf.write('wo');
console.log(buf.toString()); // wollo -> wo overrides He from hello

