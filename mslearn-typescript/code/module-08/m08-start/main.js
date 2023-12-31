/*  Module 8: Organize code using TypeScript namespaces
    Lab Start */
/*  TODO Create LoanPrograms namespace. */
/*  TODO Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerms) {
    var payment;
    payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
/*  TODO Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(loanTerms) {
    var interest = calculateInterestRate(loanTerms.interestRate);
    var payment;
    payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
function calculateInterestRate(interestRate) {
    var interest = interestRate / 1200;
    return interest;
}
/*  TODO Add reference paths. */
/*  TODO Update the function calls. */
var interestOnlyPayment = calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
var conventionalLoanPayment = calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, months: 180 });
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment); //* Returns "The conventional loan payment is 237.24"
