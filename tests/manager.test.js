const Manager = require('../lib/manager');
const manager = new Manager('Janaee Wallace', 12345, 'janaeew@hotmail.com', 404);

describe ('Manager', () => {

    it('returns an extended employee object contatining manager info', () => {
        expect(manager.office).toEqual(expect.any(Number));
    });

    it('gets office number', () => {
        expect(manager.office).toEqual(expect.any(Number));
    });

    it('gets employee role', () => {
        expect(manager.getRole()).toEqual('Manager');
    });

})