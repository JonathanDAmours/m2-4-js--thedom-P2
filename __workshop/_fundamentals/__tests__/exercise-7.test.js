// We import (require) the function that we want to test.
const addValues = require("../exercise-7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: true },
    { name: "liv", age: 36, isAvailable: true },
    { name: "dave", age: 43, isAvailable: true },
  ]);
  // add more tests here...
  expect(
    addValues(
      [
        { name: "Mia", age: 2 },
        { name: "Luis", age: 3 },
        { name: "Rick", age: 4 },
      ],
      { isAvailable: false }
    )
  ).toStrictEqual([
    { name: "Mia", age: 2, isAvailable: false },
    { name: "Luis", age: 3, isAvailable: false },
    { name: "Rick", age: 4, isAvailable: false },
  ]);
  expect(
    addValues(
      [
        { name: "Hey", age: 23 },
        { name: "You", age: 36 },
        { name: "There", age: 43 },
      ],
      { isaFunnyPerson: true }
    )
  ).toStrictEqual([
    { name: "Hey", age: 23, isaFunnyPerson: true },
    { name: "You", age: 36, isaFunnyPerson: true },
    { name: "There", age: 43, isaFunnyPerson: true },
  ]);
  expect(
    addValues(
      [
        { name: "Fred", age: 23 },
        { name: "Joe", age: 36 },
        { name: "Sam", age: 43 },
      ],
      { isSingle: true }
    )
  ).toStrictEqual([
    { name: "Fred", age: 23, isSingle: true },
    { name: "Joe", age: 36, isSingle: true },
    { name: "Sam", age: 43, isSingle: true },
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
