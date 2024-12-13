
// Write a function named calculateDifference that takes two arguments and returns the difference between the first and second arguments.

function calculateDifference(  p, q){

    let a = Number(p);
    let b = Number(q);

    if(a>b)
    {
        return a-b;
    }
    else
    {
        return b-a;
    }
}
const p = prompt("Enter First Number: ");
const q = prompt("Enter Second Number: ");
console.log("Difference: " + calculateDifference(p,q));


// Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

isOdd = (c) => {

    if(c%2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }

}
const c = prompt("Enter a number: ");
console.log(("Odd: "+ isOdd(Number(c))));

// Write a function named findMin that takes an array of numbers and returns the smallest number from the array.

findMin = (array1) => {

    const numbers = array1.split(",").map(Number);

      let min = numbers[0];
    
      for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
          min = numbers[i];
        }
      }
    
      return min;

}

const array1 = prompt("Enter some numbers separated by commas:"); 

console.log("The smallest number is:", findMin(array1));


// Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

filterEvenNumber = () => {

    const numbers = array2.split(",").map(Number);

    return numbers.filter( numbers => numbers % 2 == 0);

}

const array2 = prompt("Enter some numbers separated by commas:");
console.log("Array containing even number only: " + filterEvenNumber(array2));


// Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

sortArrayDescending = (array3) =>{

    const numbers = array3.split(",").map(Number);
    return numbers.sort((d,e) => e-d);


}

const array3 = prompt("Enter some numbers separated by commas:");

console.log("Sorted array is: " + sortArrayDescending(array3));

// Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  let str = prompt("Enter a string: ");

  console.log("Same string with the first letter lowercased: " +lowercaseFirstLetter(str));

// Write a function named findAverage that takes an array of numbers and returns the average of all elements.

findAverage = (array4) => {

    const numbers = array4.split(",").map(Number);
       
    let sum = 0;
      for (let i = 0; i < numbers.length; i++) {

        sum += numbers[i];
        
      }

      const length = numbers.length;
      return (sum / length);

}

const array4 = prompt("Enter some numbers separated by commas:"); 

console.log("Average of all elements: ", findAverage(array4));

// Write a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year, and false if it is not.


function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true; // It is a leap year
    } else {
        return false; // It is not a leap year
    }
}

let year = prompt("Enter a year: ");
if (isNaN(year) || year.trim() === "") {
    console.log("Please enter a valid year.");
} else {
    console.log(year + " is a leap year: " + isLeapYear(Number(year)));
}
