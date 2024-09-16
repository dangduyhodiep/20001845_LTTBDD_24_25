//
function calcTip(bill) {
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
}

// Test the function with a bill value of 100
console.log(calcTip(100)); // Expected output: 15

let bills = [125, 555, 44];
let tips = bills.map(calcTip);
let total = bills.map((bill, index) => bill + tips[index]);

console.log('Bills:', bills);
console.log('Tips:', tips);
console.log('Total:', total);


