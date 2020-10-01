// We import (require) the function that we want to test.
const count = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(145);
  // add more tests here...

  expect(
    count(
      [
        { username: "Bob", score: 75 },
        { username: "Josie", score: 25 },
      ],
      "score"
    )
  ).toBe(100);

  expect(
    count(
      [
        { sport: "baseball", round: 1 },
        { sport: "bowling", round: 4 },
      ],
      "round"
    )
  ).toBe(5);

  expect(
    count(
      [
        { player: "Mario", number: 30 },
        { player: "Ryan", number: 10 },
      ],
      "number"
    )
  ).toBe(40);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
