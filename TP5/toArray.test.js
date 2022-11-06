const toArray = require('./toArray');

describe("List", () => {
    test('From 2 to 8 should return [ 2, 3, 4, 5, 6, 7, 8 ]', () => {
      expect(toArray(2,8)) == [ 2, 3, 4, 5, 6, 7, 8 ];
    });
   })