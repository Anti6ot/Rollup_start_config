import "./styles/index.css"
import logo from '../assets/js.png';

const h1 = document.createElement('h1')
h1.textContent = 'I love JavaScript'

const jsImgHTML = document.createElement('img')
jsImgHTML.className = 'js-Img'
jsImgHTML.src = logo

document.body.append(h1, jsImgHTML)
console.log(logo);

console.log('Hello World!!!!@')