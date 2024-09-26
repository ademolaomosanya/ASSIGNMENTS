//1.Convert Celsius to Fahrenheit
function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

console.log(convertToF(30));

//2.Reverse a String
function reverseString(str) {
  var reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseString("hello"));

//3.Factorialize a Number
function factorialize(num) {
  for (var products = 1; num > 0; num--) {
    products *= num;
  }
  return products;
}

console.log(factorialize(5));

//4.Find the Longest Word in a String
function findLongestWordLength(str) {
  let words = str.split(" ");
  let maxLength = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
// 5.Return Largest Numbers in Arrays
function largestOfFour(arr) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));