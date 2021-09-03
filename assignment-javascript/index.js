
//1. Write a javaScript function that accepts an integer n then displays Even numbers from 1 to n

let y = 10;
function myInteger() {
  for (i = 1; i <= y; i++) {
    if (i % 2 == 0)
      console.log(i);
  }
}
myInteger()


/* 2. Use switch statement to implement a function that accepts a value n then returns 
a. 'Number is between range 1 to 3' if n is between 1 to 3
b. 'Number is between range 4 to 10' if n is between 4 to 10
c. 'Number is above 10' if n is between 4 to 10 */
function myValue(n){
if(n > 0 &&  n <= 3){
  return 'Number is between range 1 to 3';
}

if(n > 4 && n <= 10) {
  return 'Number is between range 4 to 10';
}
}

console.log(myValue(9))

/*3. Write a JavaScript function that accept two integers and display the larger one,
 if no argument is passed use the default values 7 and 9*/
 function myIntegers(a=7, b=9) {

  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(myIntegers());



// 4. Write a function that promps the user to enter two numbers and compute the sum of the two numbers
function myFunction(a, b) {
  let x = a * b
  console.log(x)
}
myFunction()

//  5.Write a function that accepts the values of π and the radius of a circle. 
// The program should compute the area of the circle using the formula: area = πr2 
function myArea(π, r) {
  return π * r * 2;
}

let result = myArea(3.142, 5);
console.log(result);

// 6.Write a function to print Even numbers from 0 to 20
function printEvenNumbers0to20() {
  for (i = 0; i <= 20; i++) {
    if (i % 2 == 0)
      console.log(i);
  }
}
printEvenNumbers0to20()

// 7.Write a function to print odd numbers from 0 to 20
function printOddNumbers0to20() {
  for (i = 0; i <= 20; i++) {
    if (i % 2 !== 0)
      console.log(i);
  }
}
printOddNumbers0to20()

//8.Write a javascript program to compute integers. if the two values are same,
// then returns triple their sum.Hint ("triple their sum" means add the two integers and multiply by 3)

function Integers(value1, value2) {
  if (value1 === value2) {
    return value1 + value2 * 3
  }
}
let result = Integers(5, 5);
console.log(result);
