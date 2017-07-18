const ErrorNaturals = require('../index.js');
const path = require('path');

describe('errorNaturals', function () {
  test('Expect to return a value if error json file is provided in the constructor', () => {
    expect.assertions(1);
    let errorNaturals = new ErrorNaturals(path.join(__dirname, './test.json'));
    expect(errorNaturals.generateErrors('101')).toBeTruthy();
  });

  test('Expect to return an error if error json file is not provided in the constructor', () => {
    expect.assertions(2);
    let errorNaturals = new ErrorNaturals();
    expect(errorNaturals.errors).toBeUndefined();
    expect(errorNaturals.generateErrors).toBeFalsy();
  });
});
