const fs = require('fs')

const readableStream = fs.createReadStream('./sample.txt', {encoding: 'utf-8', bufferSize: 10});
// doesn`t work
// readableStream.on('data', chunk => {
//     count++;
//     console.log("count:", count);
//     console.log("chunk:", chunk);
//   }
// );

const writableStream = fs.createWriteStream('out.txt', 'utf8');
// readableStream.pipe(writableStream);
readableStream.pipe(process.stdout);


// Transform Streams
// const gzip = zlib.createGzip();
// const src = fs.createReadStream('src.txt');
// const dest = fs.createWriteStream('src.txt.gz');
// src.pipe(gzip).pipe(dest);
