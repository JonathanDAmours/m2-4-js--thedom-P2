// Exercise 4
//
// Part 1 - Write
// ---------------
// Write a function accepts an array of objects as well as a key √
// and returns the sum of the values associated to that key in all of the array objects.
//
// e.g. count([{ name: "Bob", amount: 100 }, { name: "Josie", amount: 45 }], 'amount') returns 145
//
// - If any of the objects don't have that key, the function shouldn't break.
// - If the value of that key is not a number, ignore it, The function shouldn't break.

const count = (arr, key) => {
  // Insert missing solution please
  let sum = 0;

  arr.forEach((object) => {
    sum += object[key] && typeof object[key] === "number" ? object[key] : 0;
  });
  return sum;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = count;

//    Écrire une fonction qui accepte un ARRAY d'OBJECTS ainsi qu'une KEY √
//    et renvoie la SOMME des valeurs associées à cette KEY dans tous les objects de l'ARRAY.

//    EXEMPLE: count([{ name: "Bob", amount: 100 }, { name: "Josie", amount: 45 }], 'amount') returns 145

//    Si l'un des OBJECTS n'a pas cette KEY, la fonction ne doit pas être interrompue.
//    Si la valeur de cette KEY n'est pas un NUMBER, ignorez-le, la fonction ne devrait pas être interrompue.
