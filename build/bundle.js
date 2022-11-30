'use strict';

require('index.css');
var imageJS = require('assets/pic.jpg');

console.log('Hello World :)');
const jsImage = document.createElement('img');
jsImage.className = 'jsImg';
jsImage.src = imageJS;
document.body.append(jsImage);
