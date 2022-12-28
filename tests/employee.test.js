const Employee = require('../lib/employee');
const employee = new Employee('Janaee Wallace', '24211', 'janaeew@hotmail.com');

describe ('Employee', () => {

it('returns an object that holds employee information', () => {
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.id).length.toEqual(5);
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.email).toContain('@');

});

it('returns employee name', () => {
    expect(employee.getName()).toEqual(expect.any(String));

});

it('returns employee id', () => {
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getId()).length.toEqual(5);
});

it('returns employee email', () => {
    expect(employee.getEmail()).toEqual(expect.any(String));
    expect(employee.getEmail()).toContain('@');
});

});