let unsortedNumbers = [1, 50, 60, 5, 60, 25]
let arrayOfNumbers = unsortedNumbers.sort(function(a, b) { return a - b });


let arrayOfLargestNumbers = []
let counter = 0


while (counter !== 2) {
    let largestNumber = 0
    largestNumber = Math.max(...arrayOfNumbers);
    arrayOfNumbers.pop();
    arrayOfLargestNumbers.push(largestNumber);
    counter++;
}
let stLargestNumber = arrayOfLargestNumbers[0]
let ndLargestNumber = arrayOfLargestNumbers[1]

console.log(stLargestNumber + ndLargestNumber);