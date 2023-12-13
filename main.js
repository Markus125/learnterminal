import chalk from 'chalk';
import boxen from 'boxen' ;

function write(text) {
    process.stdout.write(text);
}


console.log(chalk.bgBlue.green ('Hello'));
console.log(chalk.green.underline ('Hello'));
console.log(chalk.inverse ('Hello'));
console.log(chalk.italic ('Hello'));
console.log(chalk.bgRed.strikethrough ('Hello'));
console.log(boxen(chalk.bgBlue ('Hello'), {padding: 2}));
