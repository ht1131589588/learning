// import { cube } from './math.js';

// if(process.env.NODE_ENV !== 'production') {
//     console.log('Looks like we are in development mode!');
// }else{
//     console.log(process.env.NODE_ENV);
// }

async function getComponent(){
    // return import(/* webpackChunkname: "loadsh" */ 'lodash').then(_ => {
    //     var element = document.createElement('div');
    //     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    //     return element;
    // }).catch(error => 'An error occurred while loadin the commponent');

    var element = document.createElement('div');
    const _ = await import(/* webpackChunkname: "loadsh" */ 'lodash');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;

}

getComponent().then(component => {
    document.body.appendChild(component);
})
