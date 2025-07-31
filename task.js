// let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
// fruits[1] = 'Jambura'; // Reassigning the third element
// console.log(fruits); // Output: cherry


// let touristDestinations = ['Paris', 'New York', 'Tokyo'];

// touristDestinations.push('London'); // Adding 'London' to the end of the array
// touristDestinations.push('Makka', 'Turkey'); // Adding 'London' to the end of the array
// touristDestinations.pop(); // Removing the last element ('Turkey')


// console.log(touristDestinations); // Output: ['Paris', 'New York', '

// let books = ['The Great Gatsby', '1984', 'To Kill a Mockingbird', 'Pride and Prejudice', 'The Catcher in the Rye'];

// console.log(books.includes('The Great Gatsby')); // Output: true
// if (books.includes('The Great Gatsby')) {
//     console.log('The Great Gatsby is in the list.');
// }
// console.log(books.includes('The Great gatsby')); // Output: false
// console.log(books.indexOf('1984')); // Output: 1


//check array of no array
// let numbers = [1, 2, 3, 4, 5];
// let fruits = [];
// let isStudent = true;
// let age = 25;
// let mixedArray = [numbers, fruits, isStudent, age];

// console.log(Array.isArray(numbers)); // Output: true
// console.log(Array.isArray(fruits)); // Output: true 
// console.log(Array.isArray(isStudent)); // Output: false
// console.log(Array.isArray(age)); // Output: false   
// console.log(Array.isArray(mixedArray)); // Output: true
// console.log(Array.isArray('Hello')); // Output: false


// combining arrays
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = array1.concat(array2); // Combining array1 and array2
// console.log(array1); // Output: [1, 2, 3, 4
// console.log(array2); // Output: [4, 5, 6] 
// console.log(array3); // Output: [1, 2, 3, 4, 5, 6]


//slice, splice, and reverse
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let slicedNumbers = numbers.slice(3, 7); // Slicing elements from index 3 to 7 (not including 7)
console.log(slicedNumbers); // Output: [2, 3, 4]
// let splicedNumbers = numbers.splice(5, 3); // Removing 2 elements starting from index 1
// console.log(splicedNumbers); // Output: [2, 3]