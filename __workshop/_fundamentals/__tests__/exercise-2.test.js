// We import (require) the function that we want to test.
const redacted = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(redacted(["bacon", false, 42])).toStrictEqual(["redacted", false, 42]);
  // add more tests here...
  expect(redacted(["joe", false, 2])).toStrictEqual(["redacted", false, 2]);
  expect(redacted([true, "harris", 4])).toStrictEqual([true, "redacted", 4]);
  expect(redacted([7, false, "lucie"])).toStrictEqual([7, false, "redacted"]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
