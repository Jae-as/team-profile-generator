//Required packages
const fs = require('fs');
const inquirer = require('inquirer');
// import fetch from "node-fetch";

//required files
const htmlUpdate = require('./htmlUpdate') 
const Manager = require('./lib/manager')
const Intern = require('./lib/intern')
const Engineer = require('./lib/engineer')

//Empty team array
const team = [];

//Build team manager initial prompts
const startQuestions = () => {
inquirer.prompt([
    {
        type: 'list',
        message: 'We are starting a new product team. Are you the manager?',
        name: 'validate-start',
        choices : [
            'Yes', 
            'No'
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
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
         if(valid) {
            return true; 
            } return 'Please provide a valid email.';}
    },{

        type: 'input',
        message: 'What is your 4 character office number?',
        name: 'office',
        validate: function(answer) {
            if (answer.length <3) {
                return console.log('Please provide an office number longer than 3 characters')
            } else {
                return true;}
            }
    }
])

.then (updateManagerInfo => {
    const {name, id, email, office} = updateManagerInfo;
    const manager = new Manager (name, id, email, office)

    team.push(manager);
    console.log(manager);
    buildTeam();
})}

//Add additional employees to team
const buildTeam = () => {

    console.log (`Please add the additional members of your team`);

    return inquirer.prompt([

        {
            type: 'list',
            message: 'Which team member role are you adding?',
            name: 'teamrole',
            choices : [
                'Engineer', 
                'Intern',
                'No new additions' 
            ],
            validate: function(answer) {
                if (answer === 'No new additions') {
                    return complete
                } else {
                    return true;}
                }
        },{
            type: 'input',
            message: 'What is his/her/their first and last name?',
            name: 'name',
            validate: function(answer) {
                if (answer.length <10) {
                    return console.log('Please provide a description longer than 10 characters')
                } else {
                    return true;}
                }
         },{
            type: 'input',
            message: 'What is his/her/their 4 character employee ID?',
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
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if(valid) {
                    return true; 
                    } return 'Please provide a valid email.';}
         },{
            when: (input) => input.role === 'Engineer',
            type:  'input',
            message: 'Please provide this engineer GitHub profile handle.',
            name: 'github',
            validate: (answer) => {
                if(answer.length <3) {
                    return true;
                }   return 'Please provide a valid Github profile handle.';
            }

        },{
            when: (input) => input.role === 'Intern',
            type: 'input',
            message: 'Please provide which univeristy this intern attends.',
            name: 'university',
            validate: (answer) => {
                if(answer.length <3) {
                    return true;
                }   return 'Please provide a valid Github profile handle.';
            }
        },{
            type: 'list',
            name: 'complete',
            message: 'Have you added all your team members?',
            choices:[
                'Yes',
                'No'
            ],
            validate: function(answer) {
                if (answer === 'No') {
                    return teamrole
                } else {
                    return updateHTMLFile();}
                }

        }
    
    ])

.then (updateTeamInfo => {
    const {teamrole, name, id, email, github, university, complete} = updateTeamInfo;

    if (teamrole === 'Engineer')
    {
        employee = new Engineer (name, id, email, teamrole, github);
        console.log(employee);
    } else (teamrole === 'Intern')
    {
        employee = new Intern (name, id, email, teamrole, university);
        console.log(employee);
    }
    team.push(employee);

    if (complete) {
        return buildTeam(team);
    } else {
        console.log(team);
        fs.writeFile(team);
    }
})

.catch ( (err) => {
    console.log(err);
}
)};


const updateHTMLFile = data => {

    fs.writeFile('index.html', htmlUpdate(data), err => {
        if (err) {
            console.log(err);
            return
        } else {
            console.log('You have successfully created your new team! The live webpage should display the team information you provided.')
        }

    })

};

startQuestions();