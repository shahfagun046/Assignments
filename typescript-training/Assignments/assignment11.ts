function printDiamond(rows: number): void {
    // Upper half including middle row
    for (let i = 1; i <= rows; i++) {
        let line = "";

        // Print leading spaces
        for (let j = 1; j <= rows - i; j++) {
            line += " ";
        }

        // Print numbers
        for (let j = 1; j <= i; j++) {
            line += j + " ";
        }

        console.log(line.trimEnd());
    }

    // Lower half
    for (let i = rows - 1; i >= 1; i--) {
        let line = "";

        // Print leading spaces
        for (let j = 1; j <= rows - i; j++) {
            line += " ";
        }

        // Print numbers
        for (let j = 1; j <= i; j++) {
            line += j + " ";
        }

        console.log(line.trimEnd());
    }
}
printDiamond(5);