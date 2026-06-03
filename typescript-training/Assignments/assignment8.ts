let paragraph: string =
  "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

let searchWord: string = "Java";
let indexes: number[] = [];
let position: number = paragraph.indexOf(searchWord);

// Find all occurrences and their indexes
while (position !== -1) {
    indexes.push(position);
    position = paragraph.indexOf(searchWord, position + 1);
}

// Print total occurrences
console.log("Total Occurrences: " + indexes.length);

// Print count and indexes
console.log("Count: " + indexes.length);
console.log("Indexes: " + indexes.join(", "));