import {list} from './users.js'

const username='Béla';
console.log(list[0].name);

//Primitive types
const active = true; // bool
const age = 33; // number
const message = 'HALLO'; // string
const nothing = null; // object
let start; // undefined

console.log(typeof active);
console.log(typeof age);
console.log(typeof message);
console.log(typeof nothing);
console.log(typeof start);

Number.prototype.hello = function() {
    console.log(this);
    console.log('Hello from number');
}
age.hello();

// Collections
const numbers = [1,2,3,4,5,6,7];
const settings = [1, true, [44,55], "what's going on"];
console.log(settings[2][1]); //0-ás indexelés
console.log(settings.length);

// Object
console.log( list[0].age );
const key = 'name';
console.log(list[0][key]);