/*1.  Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and 
marks [75, 80, 82] Add 10 marks to each students using assignment operators and 
store it into another array, after adding 10 marks identify the average marks of all 
students
Expected Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89.0*/


// Arrays for student names and marks
let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];

// Add 10 marks to each student and store in a new array
let updatedMarks: number[] = marks.map(mark => mark + 10);

// Display updated marks
console.log("Updated Marks:");
for (let i = 0; i < studentNames.length; i++) {
    console.log(`${studentNames[i]}: ${updatedMarks[i]}`);
}

// Calculate average marks
//not able to calculate average marks
