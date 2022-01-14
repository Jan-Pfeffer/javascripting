const conditionalSum = function(numArray, condition) {
    let x = 0
    if (condition == "odd") {
        let index = 0
        for (let num in numArray) {
            let oddCheck = numArray[index] % 2;
            if (oddCheck == 1) {
                x = x + numArray[index]
            }
            index++;
        }
        return x;
    } else if (condition == "even") {
        let index = 0
        for (let num in numArray) {
            let oddCheck = numArray[index] % 2;
            if (oddCheck == 0) {
                x = x + numArray[index]
            }
            index++;
        }
        return x;
    } else {
        return "Incorrect Parameters Given"
    }
}

console.log(conditionalSum([5, 5, 5, 5, 5, 4, 4, 4, 4], "even"));