import inquirer from 'inquirer';

function write(text) {
    process.stdout.write(text);
}


inquirer
  .prompt([
    {type:'input', name:'name', message: 'What is your name?'},
    {type:'list',   name:'gender',   message: 'What is your gender?',  choices: ['male', 'female', 'bigender', 'apache helicopter', 'other']},
    {type:'checkbox',  name:'food', message: 'What is your favorite food?', choices: ['pizza',  'burger', 'pizza', 'apache helicopter', 'other' ]},
    {type: 'number' , name:'number', message: 'What is your funny number?'},
    {type: 'rawlist', name:'smart' , message: 'How smart are you?' , choices: ['Very dumb' , 'Dumb' , 'Average' , 'Smart' , 'Very smart']} ,
    {type: 'password' , name:'Password' , message: 'Type password'},
    {type: 'expand' , name:'expand' , message:'Conflict in your life' , choices: [{name:'reconsider your life', key:'r'}, {name:'idc', key:'i'}, {name:'self-delete', key:'s'} ]},
    {type: 'editor' , name:'editor' , message:'editor'},
    {type: 'confirm' , name:'self-delete' , message: 'You sure you dont want to self delete?'},
   
    
  ])
  .then((answers) => {
    console.log(answers)
   
  })