const Manager = require('../lib/manager');
const manager = new Manager('404');

describe ('Manager', () => {

    it('returns an extended employee object contatining manager info', () => {
        expect(manager.office).toEqual(expect.any(Number));
        expect(manager.office).length.toEqual(3);

    });

    it('gets office number', () => {
        expect(manager.office).toEqual(expect.any(Number));
        expect(manager.office).length.toEqual(3);
    });

    it('gets employee role', () => {
        expect(intern.getRole()).toEqual('Manager');
    });

})