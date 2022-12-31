const Engineer = require('../lib/engineer');
const engineer = new Engineer('Janaee Wallace', '12345', 'janaeew@hotmail.com', 'jae-as');

describe ('Engineer', () => {

    it('returns an extended employee object contatining engineer info', () => {
        
        expect(engineer.github).toEqual(expect.any(String));

    });

    it('gets engineer github profile handle', () => {
        expect(engineer.getGithub()).toEqual(expect.any(String));
    });

    it('gets employee role', () => {
        expect(engineer.getRole()).toEqual('Engineer');
    });

})