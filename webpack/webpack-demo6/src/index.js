import _ from 'lodash';
// import Print from './print';

function component(){
    // var element = document.createElement('div');

    // var button = document.createElement('button');
    // var br = document.createElement('br');

    // button.innerHTML = 'Click me and look at the console!'
    // // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.appendChild(br);
    // element.appendChild(button);

    // button.onclick = e =>{
    //     /**
    //      * 懒加载
    //      */
    //     import(/* webpackChunkName: "print" */ './print').then(module=>{
    //         var print = module.default;
    //         print();
    //     })
    // }

    var element = document.createElement('div');
    
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    //element.onclick = Print.bind(null, 'Hello webpack');

    return element;
}

document.body.appendChild(component());