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
        message: 'What is your 5 character employee ID?',
        name: 'id',
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
        message: 'What is your 3 character office number?',
        name: 'office',
    }
])

.then (updateManagerInfo => {
    const {name, id, email, office} = updateManagerInfo;
    const manager = new Manager (name, id, email, office)

    team.push(manager);
    console.log(manager);
    buildTeam();
})
}

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
        },
    ]) .then (response => {
        // const {teamrole, name, id, email, github, university, complete} = updateTeamInfo;
    
        if (response.teamrole === 'Engineer')
        {
            getEngineerInfo();
            // employee = new Engineer (name, id, email, teamrole, github);
            // console.log(employee);
        } else if (response.teamrole === 'Intern')
        {
            getInternInfo();
            // employee = new Intern (name, id, email, teamrole, university);
            // console.log(employee);
        } else {
            buildNewTeam();
        }
     })
}
   function getEngineerInfo(){
   inquirer.prompt(
    [{
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
            message: 'What is his/her/their 5 character employee ID?',
            name: 'id',
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
            type:  'input',
            message: 'Please provide this engineer GitHub profile handle.',
            name: 'github',
            validate: (answer) => {
                if(answer.length >3) {
                    return true;
                }   return 'Please provide a valid Github profile handle.';
            }

        }])
    
        .then(response => {
            const {name, id, email, github} = response;
            let employee = new Engineer (name, id, email, github);
            console.log(employee);
            team.push(employee);
            buildTeam();
        })
    }
    
function getInternInfo(){
inquirer.prompt(
    [{
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
        message: 'What is his/her/their 5 character employee ID?',
        name: 'id',
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
            message: 'Please provide which univeristy this intern attends.',
            name: 'university',
            validate: (answer) => {
                if(answer.length >3) {
                    return true;
                }   return 'Please provide a valid University name.';
            }
        }
])

.then(response => {
    const {name, id, email, university} = response;
    let employee = new Intern (name, id, email, university);
    console.log(employee);
    team.push(employee);
    buildTeam();
})
}
   
function buildNewTeam() {
    updateHTMLFile(team);
} 

const updateHTMLFile = data => {
    const htmldata = htmlUpdate(data);
    fs.writeFile('index.html', htmldata, err => {
        if (err) {
            console.log(err);
            return
        } else {
            console.log('You have successfully created your new team! The live webpage should display the team information you provided.')
        }

    })

};

startQuestions();