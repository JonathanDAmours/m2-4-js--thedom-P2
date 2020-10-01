// We import (require) the function that we want to test.
const insert = require("../exercise-3");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 3", () => {
  expect(
    insert([{ name: "Bob" }, { name: "Josie" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Bob", isAvailable: false },
    { name: "Josie", isAvailable: false },
  ]);
  // add more tests here...

  expect(
    insert([{ name: "Joe" }, { name: "Alex" }], { isAvailable: true })
  ).toStrictEqual([
    { name: "Joe", isAvailable: true },
    { name: "Alex", isAvailable: true },
  ]);

  expect(
    insert([{ name: "Rob" }, { name: "John" }], { isAvailable: false })
  ).toStrictEqual([
    { name: "Rob", isAvailable: false },
    { name: "John", isAvailable: false },
  ]);

  expect(
    insert([{ name: "Roland" }, { name: "Mymy" }], { isAvailable: true })
  ).toStrictEqual([
    { name: "Roland", isAvailable: true },
    { name: "Mymy", isAvailable: true },
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
