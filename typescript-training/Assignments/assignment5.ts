interface Employee {
    name: string;
    baseSalary: number;
    experience: number;
    rating: number;
}

const employees: Employee[] = [
    { name: "Alice Johnson", baseSalary: 75000, experience: 5.1, rating: 4.2 },
    { name: "Bob Smith", baseSalary: 68000, experience: 3.2, rating: 3.8 },
    { name: "Carol Davis", baseSalary: 82000, experience: 7.1, rating: 4.5 },
    { name: "David Brown", baseSalary: 90000, experience: 10.2, rating: 2.5 },
    { name: "Eva Green", baseSalary: 60000, experience: 2.4, rating: 3.5 }
];

const hikePercentageMap = new Map<string, number>();

employees.forEach(employee => {
    let variablePayPercent: number;
    let bonus: number;

    // Determine variable pay and bonus based on rating
    if (employee.rating >= 4.0) {
        variablePayPercent = 15;
        bonus = 1500;
    } else if (employee.rating >= 3.0) {
        variablePayPercent = 10;
        bonus = 1200;
    } else {
        variablePayPercent = 3;
        bonus = 300;
    }

    // Reward for experience >= 5 years
    let reward = employee.experience >= 5 ? 5000 : 0;

    // Calculate Hike
    let hike =
        (employee.baseSalary * variablePayPercent / 100) +
        bonus +
        reward;

    // Calculate Hike Percentage
    let hikePercentage = (hike / employee.baseSalary) * 100;

    // Store in Map
    hikePercentageMap.set(employee.name, hikePercentage);

    console.log(
        `${employee.name} -> Hike Amount: ${hike.toFixed(2)}, Hike Percentage: ${hikePercentage.toFixed(2)}%`
    );
});

console.log("\nEmployee Hike Percentage Map:");
hikePercentageMap.forEach((value, key) => {
    console.log(`${key} : ${value.toFixed(2)}%`);
});