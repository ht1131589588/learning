console.log('The print.js module has loaded! See the network tab in dev tools...');

export default function print(text){
    if(text){
        console.log(text);
    }
    console.log('Button Clicked: Here \'s "some text!"')
}