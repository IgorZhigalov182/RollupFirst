import "./index.css";
// const imageJS = require('imageJS');
import imageJS from './assets/pic.jpg';

console.log('Hello World :)');

const jsImage = document.createElement('img');
jsImage.className = 'jsImg';
jsImage.src = imageJS;

document.body.append(jsImage);
// 