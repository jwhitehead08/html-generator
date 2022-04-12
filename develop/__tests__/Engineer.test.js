const Engineer = require('../library/Engineer');



test('creates an engineer object', () => {
  const engineer = new Engineer('name');

  expect(Engineer.name).toEqual(expect.any(String));
 
});