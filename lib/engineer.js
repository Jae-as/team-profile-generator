const Employee = require ('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }

    htmlUpdate(){
    return
    `
    <div class="card border-info mb-3" style="max-width: 18rem;">
    <div class="card-header">
    <h3>Name: ${this.getName()}</h3>
    <i class="fa-solid fa-laptop-code"><h5>Engineer</h5></i>
    </div>
    
    <div class="card-body">
    <li class="card-text">ID: ${this.getId()}</li>
    <li class="card-text">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
    <li class="card-text">GitHub: <a href="https://github.com/${this.getGithub()}" target="_blank">${this.getGithub()}</a></li>
    </div>
    </div>
    `
    }
}   

module.exports = Engineer;