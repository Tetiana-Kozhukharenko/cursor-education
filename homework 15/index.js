import {allGoods, numberN, getMaxDigit, pairsOfStudents, getRandomArray, getSubjects, myStudents, getMyTaxes, ukraine, studentM, generateBlocks, getRandomChinese, toggleCharacters, createIdGenerator} from "./scripts/scripts.js";
console.log("HW-1:");
console.log(allGoods);

console.log("HW-2:");
console.log(parseInt(numberN));

console.log("HW-3:");
console.log(getMaxDigit(137805));

console.log("HW-4:");
console.log(pairsOfStudents);

console.log("HW-5:");
console.log(getRandomArray(15, 1, 100));

console.log("HW-6:");
console.log(getSubjects(myStudents[0]));

console.log("HW-7:");
getMyTaxes.call(ukraine, 2500);

console.log("HW-8:");
studentM.getInfo();

generateBlocks();

getRandomChinese(3);

toggleCharacters();

console.log("HW-13:");
const idGenerator = createIdGenerator();
console.log(idGenerator);
