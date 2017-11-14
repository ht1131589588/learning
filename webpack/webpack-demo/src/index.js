import _ from 'lodash';
import './style.css';
import icon from'./test.jpg';
import Data from './data.xml';

function component(){
    var element = document.createElement('div');
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello','webpack'],' ');
    var img =new Image();
    img.src = icon;
    element.appendChild(img);

    console.log(Data);
    // element.classList.add('hello');
    return element;
}

document.body.appendChild(component());