const Employee = require('../library/Employee');


test('creates an employee object', () => {
  const employee = new Employee('name');

  expect(Employee.name).toEqual(expect.any(String));
 
});


