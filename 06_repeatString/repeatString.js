const repeatString = function (string, num) {
    let stringConcated = "";
    if (num >= 0) {
        if(num === 0) return '';

        for (let i = 0; i < num; i++) {
           stringConcated = stringConcated + string;
        }

        return stringConcated
    } else {
        return "ERROR"
    }

};

console.log(repeatString('hey', 5))

// Do not edit below this line
module.exports = repeatString;
