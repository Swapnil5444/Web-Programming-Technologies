import chalk from 'chalk';
import validator from 'validator'; 

let msg1= "Welcome to AIT";
console.log(chalk.bold.red(msg1));

let friend1='Swapnil',friend2='Shreyas',friend3='Krish';
console.log(chalk.bold.yellow(friend1))
console.log(chalk.bold.blue(friend2))
console.log(chalk.bold.green(friend3))

let error=chalk.bold.red.underline;
let success=chalk.bold.red.underline.green;

console.log(error('you did something wrong'));
console.log(success('you done it'));


//use of validator
let mydata= "";
console.log(validator.isEmpty(mydata));
let mydata1= "Hello Friends";
console.log(validator.isEmpty(mydata1));

let myEmail='abc@gmail.com';
let myEmail2='abc@';
console.log(validator.isEmail(myEmail));
console.log(validator.isEmail(myEmail2));