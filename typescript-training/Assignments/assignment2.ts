//1. 

let evaluateLoan: String;
let creditScore: number = 650;
let income: number = 5000;
let employeeStatus: boolean;
let dti: number;

 // Step 1: Credit Score Check
    if (creditScore > 750) {
        return "Loan Approved (Excellent Credit Score)";
    }

    if (creditScore < 650) {
        return "Loan Denied (Low Credit Score)";
    }

    // Step 2: Income Check (for scores 650–750)
    if (income < 50000) {
        return "Loan Denied (Income below $50,000)";
    }

    // Step 3: Employment Status Check
    if (employed) {
        return "Loan Denied (Customer is Unemployed)";
    }

    // Step 4: Debt-to-Income Ratio Check
    if (dti < 40) {
        return "Loan Approved";
    } else {
        return "Loan Denied (DTI ratio too high)";
    }
}