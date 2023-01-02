const Employee = require ('./employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, office);
        this.office = office;
    }

    getOffice() {
        return this.office;
    }

    getRole(){
        return 'Manager';
    }

    htmlUpdate(){
        return `
        <div class="card border-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <h3>Name: ${this.getName()}</h3>
        <i class="fa-sharp fa-solid fa-chess-queen"><p>Manager</p></i>
        </div>
        
        <div class="card-body">
        <li class="card-text">ID: ${this.getId()}</li>
        <li class="card-text">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
        <li class="card-text">Office: ${this.getOffice()}</a></li>
        </div>
        </div>
        `
    }
}   

module.exports = Manager;