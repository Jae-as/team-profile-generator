const lib = require('./lib');
const fs = require('fs');
const inquirer = require('inquirer');
// const { default: Choices } = require('inquirer/lib/objects/choices');

const team = [];

// Questions

let startquestion = [
    {
        type: 'input',
        message: 'We are starting a new product team. Are you the manager?',
        name: 'validate-start',
        choices : [
            'Yes', 
            'No', 
        ],
        validate: function(answer) {
            if (answer === 'No') {
                return console.log('You must be a manager to create a new team!')
            } else {
                return true;}
            }

    },{
        type: 'input',
        message: 'What is your first and last name?',
        name: 'name',
        validate: function(answer) {
            if (answer.length <10) {
                return console.log('Please provide a description longer than 10 characters')
            } else {
                return true;}
            }
    },{
        type: 'input',
        message: 'What is your 4 character employee ID?',
        name: 'id',
        validate: function(answer) {
            if (answer.length <3) {
                return console.log('Please provide an ID longer than 3 characters')
            } else {
                return true;}
            }
    },{
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: function(answer) {
            if (answer.length <10) {
                return console.log('Please provide an ID longer than 10 characters')
            } else {
                return true;}
            }
    }
];


//Write to ReadMe.md file
inquirer.prompt(startquestion).then(function(response) {
    console.log(response);

    const content = fileGenerator(response);
    console.log(content);
    fs.writeFile('./README.md', content, function(err){
        if (err) throw err
        console.log('success');
    });

});