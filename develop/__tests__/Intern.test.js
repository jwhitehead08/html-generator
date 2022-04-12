const Intern = require('../library/Intern');
const Inter = require('../library/Intern');



test('creates an intern object', () => {
  const intern = new Intern('name');

  expect(Intern.name).toEqual(expect.any(String));
 
});