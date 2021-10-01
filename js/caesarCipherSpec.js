// Rewrite this in Unit Test

// var cs = require("./caesarCipher");

// console.log(cs.caesarCipher("Boy! What a string!", -5) === "Wjt! Rcvo v nomdib!")
// console.log(cs.caesarCipher("Hello zach168! Yes here.", 5) === "Mjqqt efhm168! Djx mjwj.")
// console.log(cs.caesarCipher("Hello Zach168! Yes here.", -5) === "Czggj Uvxc168! Tzn czmz.")

const { expect } = require("@jest/globals");
const cs = require("./caesarCipher");

test("Is it a string?", () => {
  expect(typeof cs.caesarCipher("test", 4)).toBe("string");
});

test("Does it handle various character inputs properly?", () => {
  // Boy what a string test
  expect(cs.caesarCipher("Boy! What a string!", -5)).toBe(
    "Wjt! Rcvo v nomdib!"
  );

  //Test for numeral/punctuation handling
  expect(cs.caesarCipher("Hello zach168! Yes here.", 5)).toBe(
    "Mjqqt efhm168! Djx mjwj."
  );
  expect(cs.caesarCipher("Hello Zach168! Yes here.", -5)).toBe(
    "Czggj Uvxc168! Tzn czmz."
  );
});
