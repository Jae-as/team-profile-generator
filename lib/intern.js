const Employee = require ('./employee');

class Intern extends Employee {
    constructor(name, id, email, university) {
        super(name, id, email);
        this.university = university;
    }

    getUniversity() {
        return this.university;
    }

    getRole() {
        return 'Intern';
    }

    htmlUpdate() {
        return `
        <div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <h3>Name: ${this.getName()}</h3>
        <i class="fa-sharp fa-solid fa-graduation-cap"><h5>Intern</h5></i>
        </div>
        
        <div class="card-body">
        <li class="card-text">ID: ${this.getId()}</li>
        <li class="card-text">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
        <li class="card-text">GitHub: ${this.getUniversity()}</li>
        </div>
        </div>
        `
    }
}   

module.exports = Intern;