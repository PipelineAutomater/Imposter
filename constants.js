const fs = require('fs');

const files = fs.readdirSync('./Categories');

const file = files[Math.floor(Math.random()*(files.length))];

export const category = file.substring(0, file.length - 4);

const contents = fs.readFileSync('./Categories/' + file, 'utf8').split(/\r?\n/).filter(line => line.trim() !== '');

export const word = contents[Math.floor(Math.random()*contents.length)];

console.log(word);

export const players = ["John", "Jack"];