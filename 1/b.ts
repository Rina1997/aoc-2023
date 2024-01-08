import fs from 'fs';
import { indexOf } from 'lodash';

const input = fs.readFileSync('./input.txt', 'utf-8');
const arrayInput = input.split('\n');
const twoDigits: number[] = [];
function findNum(textLine: string) {
    textLine = textLine.replaceAll('one', 'one1one');
    textLine = textLine.replaceAll('two', 'two2two');
    textLine = textLine.replaceAll('three', 'three3three');
    textLine = textLine.replaceAll('four', 'four4four');
    textLine = textLine.replaceAll('five', 'five5five');
    textLine = textLine.replaceAll('six', 'six6six');
    textLine = textLine.replaceAll('seven', 'seven7seven');
    textLine = textLine.replaceAll('eight', 'eight8eight');
    textLine = textLine.replaceAll('nine', 'nine9nine');
    return textLine;
}
arrayInput.forEach((line) => {
    const updatedLine = findNum(line);
    // console.log(updatedLine);
    const charArray = [];
    for (let character of updatedLine) {
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
