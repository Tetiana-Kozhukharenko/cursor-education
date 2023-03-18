/* 1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції 
є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого 
числа. Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2] */

function getRandomArray(length, min, max) {
  const randomArray = [];
  for(let i = 0; i < length; i++) {
    let randomNumbers = Math.floor(Math.random(i) * (max - min + 1)) + min;
    randomArray.push(randomNumbers);
  }
  return randomArray;
}

console.log(getRandomArray(15, 1, 100));

/* 2.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕ ЦІЛІ 
ЧИСЛА ІГНОРУЮТЬСЯ. Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4 */

function getAverage(...numbers) {
  let res = 0;
  let count = 0;
  let result;
  for(let i = 0; i < numbers.length; i++) {
    if (Number.isInteger(numbers[i])) {
      res += numbers[i];
      count++
    }
  }
  result = (res / count);
  return result;
}

console.log(getAverage(1, 1, 3.9, 4, 9, 9.8));

/* 3.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції.
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5] */

function filterEvenNumbers(...numbers) {
  const res = numbers.filter((number) => {
    return number % 2 !== 0;
  });
  return res;
}

console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

/* 4.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших. Приклад: 
countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3 */

function countPositiveNumbers(...numbers) {
  const resNumber = numbers.filter((item) => {
    return item > 0;
  });
  return resNumber.length;
}

console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

/* 5.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, 
які діляться на ціло на 5. Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55] */

function getDividedByFive(...numbers) {
  const resNumbers = numbers.filter((number) => {
    return Number.isInteger(number / 5);
  });
  return resNumbers;
}

console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

/* 6. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. Якщо букв менше трьох 
– не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. Приклад: divideByThree("Commander) -> 
["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"] */

function divideByThree(word) {
  const result = [];
  const lowerCaseWord = word.toLowerCase().replace(/\s/g, '');
  for (let i = 0; i < lowerCaseWord.length; i += 3) {
    if(lowerCaseWord.length < 3) {
      return "Слово замале для того, щоб розбивати його на склади по 3 букви.";
    }
    result.push(lowerCaseWord.slice(i, i + 3));
  }
  return result;
}

console.log(divideByThree("Commander"));