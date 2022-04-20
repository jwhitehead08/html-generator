const Manager = require('../library/Manager');



test('creates an manager object', () => {
  const manager = new Manager('name');

  expect(Manager.name).toEqual(expect.any(String));
 
});