function printForecast(arr) {
    let forecastStr = '';
    for (let i = 0; i < arr.length; i++) {
        forecastStr += `... ${arr[i]}°C in ${i + 1} days `;
    }
    console.log(forecastStr + '...');
}

// Test Data 1: [17, 21, 23]
printForecast([17, 21, 23]);

// Test Data 2: [12, 5, -5, 0, 4]
printForecast([12, 5, -5, 0, 4]);

