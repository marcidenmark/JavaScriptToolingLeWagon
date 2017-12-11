import { capitalize } from './helpers';

function greetUser(name) {
 //es6
 console.log (`hello ${capitalize(name)}`);
 // without es6 also no =>
 console.log("hello " + capitalize(name));
}

greetUser("marci");
greetUser("cool people");
