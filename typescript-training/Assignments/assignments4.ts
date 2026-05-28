/*Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1 50000
2 -2000
3 3000
4 -15000
5 -200
6 -300
7 4000
8 -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using 
Loops and conditional statements 
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account 
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit 
Transaction with Amount” and also print total number of suspicious transactions */

// Store all transactions in an array
let transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let creditCount = 0;
let debitCount = 0;

let totalCredit = 0;
let totalDebit = 0;

let balance = 0;

let suspiciousCount = 0;

// Loop through all transactions
for (let amount of transactions) {

    // Credit Transaction
    if (amount > 0) {
        creditCount++;
        totalCredit += amount;
        balance += amount;
        

        // Check suspicious credit transaction
        if (amount > 10000) {
            console.log("Suspicious credit Transaction with Amount:", amount);
            suspiciousCount++;
        }
    }

    // Debit Transaction
    else {
        debitCount++;
        totalDebit += amount;
        balance += amount;
        

        // Check suspicious debit transaction
        if (amount < -10000) {
            console.log("Suspicious debit Transaction with Amount:", amount);
            suspiciousCount++;
        }
    }
}

// Print Results
console.log("Total Credit Transactions:", creditCount);
console.log("Total Debit Transactions:", debitCount)

console.log("Total Amount Credited:", totalCredit);
console.log("Total Amount Debited:", totalDebit);

console.log("Remaining Balance in Account:", balance);

console.log("Total Suspicious Transactions:", suspiciousCount);