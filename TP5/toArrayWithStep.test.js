const toArrayWithStep = require('./toArrayWithStep');

describe("List", () => {
    test('From 2 to 8 should return [ 2, 4, 6, 8 ]', () => {
      expect(toArrayWithStep(2,0,-100)) == [ 2 ];
    });
   })