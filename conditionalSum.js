const conditionalSum = function(numArray, condition) {
    let x = 0
    if (condition == "odd") {
        for (let num of numArray) {
            let oddCheck = num % 2;
            if (oddCheck == 1) {
                x = x + num
            }
        }
        return x;
    } else if (condition == "even") {
        for (let num of numArray) {
            let oddCheck = num % 2;
            if (oddCheck == 0) {
                x = x + num
            }
        }
        return x;
    } else {
        return "Incorrect Parameters Given"
    }
}

console.log(conditionalSum([5, 5, 5, 4, 5, 6, 7, 8, 4, 4, 4, 4], "odd"));