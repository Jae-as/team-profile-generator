const Intern = require('../lib/intern');
const intern = new Intern('Janaee Wallace', 12345, 'janaeew@hotmail.com',  'University of Notre Dame');

describe ('Intern', () => {

    it('returns an extended employee object contatining intern info', () => {
        expect(intern.university).toEqual(expect.any(String));

    });

    it('gets intern university name', () => {
        expect(intern.getUniversity()).toEqual(expect.any(String));
    });

    it('gets employee role', () => {
        expect(intern.getRole()).toEqual('Intern');
    });

})