import fs from 'fs';

const input = fs.readFileSync('./input.txt', 'utf-8');
const arrayInput = input.split('\n');
const twoDigits: number[] = [];
arrayInput.forEach((line) => {
    const charArray = [];
    for (let character of line) {
        if (isNaN(parseInt(character)) === false) {
            charArray.push(character);
        }
    }
    const firstItem = charArray[0];
    const lastItem = charArray[charArray.length - 1];
    twoDigits.push(parseInt(firstItem + lastItem));
});
let sum = 0;
for (let i = 0; i < twoDigits.length; i++) {
    sum = sum + twoDigits[i];
}
// console.log(twoDigits);
console.log(sum);
