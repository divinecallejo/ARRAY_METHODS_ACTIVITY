// Use push() to add an element
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("After push():", fruits);

// Use unshift() to add two numbers
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("After unshift():", array1);

// Use pop() to remove the last elelements
fruits.pop();
console.log("After pop():", fruits);

// Use shift() to remove the first element 
let array2 = [1, 2, 3];
array2.shift();
console.log("After shift():", array2);

// Use sort() to sort the fruits array 
fruits.sort();
console.log("After sort():", fruits);

// Use slice() to create a new array 
let slicedFruits = fruits.slice(1, 3); 
console.log("Sliced Array:", slicedFruits);

// Use splice() to insert and remove elements 
let months = ["February", "April", "May", "July"];
months.splice(1, 0, "March"); 
months.splice(4, 1, "June"); 
console.log("After splice():", months);