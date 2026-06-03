/*Write a program to perform the following tasks:
1. Count the total number of words in the sentence.
2. Print the sentence words in reverse order.
3. Convert the first character of each word to uppercase and print original sentence*/

let sentence: string = "Java programming is fun and challenging";

// Split sentence into words
let words: string[] = sentence.split(" ");

// 1. Count the total number of words
console.log("Total number of words: " + words.length);

// 2. Print the sentence words in reverse order
let reversedSentence: string = words.slice().reverse().join(" ");
console.log("Sentence in reverse order: " + reversedSentence);

// 3. Convert the first character of each word to uppercase
let capitalizedSentence: string = words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

console.log("Sentence with first letter of each word capitalized: " + capitalizedSentence);