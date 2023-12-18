import chalk, { backgroundColorNames } from 'chalk';
import boxen from 'boxen' ;

function write(text) {
    process.stdout.write(text);
}


console.log(boxen('Hello', {padding: 2.3, borderColor:'cyan', margin: 5,float:'left', dimBorder:'5', borderStyle:'double' }));
console.log(boxen('Hello', {padding: 6, borderColor:'greenBright', margin: 3,float:'center' }));
console.log(boxen('Hello', {padding: .4, margin: 9, backgroundColor:'blueBright' ,dimBorder: 2 , borderColor: 'magenta', borderStyle: 'classic'}));
console.log(boxen('Hello', {padding: 2, margin: 8, borderColor: 'cyan', borderStyle: 'round'}));
console.log(boxen('Hello', {padding: 1, margin: 4, backgroundColor:'red' ,float:'right', borderStyle: 'double'}));
console.log(boxen(chalk.bgBlue ('Hello'), {padding: 2}));
