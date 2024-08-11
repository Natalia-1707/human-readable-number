module.exports = function toReadable (number) {
    let numberArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let numberArr2 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let numberArr3 = [" ", " ", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety", " "];
    let numberArr4 = ["one hundred", "two hundred", "three hundred", "four hundred", "five hundred", "six hundred", "seven hundred", "eight hundred", "nine hundred"];
    let final
    if (number.toString().length === 1) {
        final = numberArr[number];
    }
    if (number.toString().length === 2) {
        if (10 <= number < 20) {
            final = numberArr2[number - 10];
        }
        if (number >= 20) {
            final = number.toString()[1] == 0 ? numberArr3[number.toString()[0]] : `${numberArr3[number.toString()[0]]} ${numberArr[number.toString()[1]]}`;  
        }
    }
    if (number.toString().length === 3) {
        if (number.toString()[2] == 0 && number.toString()[1] == 0) {
            final = numberArr4[number.toString()[0] - 1];
        }
        if (number.toString()[2] > 1 && number.toString()[1] !== 0) {
            final = `${numberArr4[number.toString()[0] - 1]} ${numberArr3[number.toString()[1]]} ${numberArr[number.toString()[2]]}`;
        }
        if (number.toString()[1] == 1) {
            final = `${numberArr4[number.toString()[0] - 1]} ${numberArr2[number.toString()[2]]}`;
        }
        if (number.toString()[1] == 0 && number.toString()[2] > 0) {
            final = `${numberArr4[number.toString()[0] - 1]} ${numberArr[number.toString()[2]]}`;
        }
    }
    return final;
}
