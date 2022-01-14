const sumLargestNumbers = function(unsortedNumbers, iterations) {

    let arrayOfNumbers = unsortedNumbers.sort(function(a, b) { return a - b });
    let arrayOfLargestNumbers = []

    let counter = 0
    while (counter !== iterations) {
        let largestNumber = 0
        largestNumber = Math.max(...arrayOfNumbers);
        arrayOfNumbers.pop();
        arrayOfLargestNumbers.push(largestNumber);
        counter++;
    }
    return (arrayOfLargestNumbers.reduce((a, b) => a + b));
}

console.log(sumLargestNumbers([100, 100, 100, 50, 100, 2], 5));