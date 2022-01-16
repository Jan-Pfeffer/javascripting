const sumLargestNumbers = function(unsortedNumbers, iterations) {

    let arrayOfNumbers = unsortedNumbers.sort((a, b) => a - b);
    let arrayOfLargestNumbers = []

    let counter = 0
    while (counter !== iterations) {
        let largestNumber = 0
        largestNumber = Math.max(...arrayOfNumbers);
        if (isNaN(largestNumber)) {
            throw new Error('Invalid Array! Check your array and ensure it only contains numbers');
        }
        arrayOfNumbers.pop();
        arrayOfLargestNumbers.push(largestNumber);
        counter++;
    }
    return (arrayOfLargestNumbers.reduce((a, b) => a + b));
}

console.log(sumLargestNumbers([100, 100, 3, 50, 100, 2], 2));