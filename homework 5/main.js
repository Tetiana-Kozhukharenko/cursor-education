/* 1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є 
параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. */

function getRandomArray(length, min, max) {
  const newArr = [];

  for(let i = 0; i < length; i++) {
    let rNumber = Math.floor(Math.random() * (max - min + 1) + min);
    newArr.push(rNumber);
  }

  return newArr;
}

const randomNum = getRandomArray(15, 3, 100);
console.log(randomNum);


/* 3.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. 
Не цілі числа мають ігноруватися. */

function getAverage(...numbers) {
  let sum = 0;

  numbers.forEach(el => {
    if(Number.isInteger(el)) {
      sum += el;
    }
  })

  return sum / numbers.length;
}

const averageValue = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(averageValue);

// 4.Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. Не цілі числа мають ігноруватися.

function getMedian(...numbers) {
  const integers = numbers.filter(el => Number.isInteger(el));
  const sorted = integers.sort((a, b) => a - b);
  const middleIndex = Math.floor((sorted.length / 2));

  if (sorted.length % 2 == 0) {
    return(sorted[middleIndex -1] + sorted[middleIndex]) / 2;
  } else {
    return sorted[middleIndex];
  }
}

const medianNum = getMedian(1, 2, 3, 4, 5);
console.log(medianNum);

/* 5.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції.
Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5] */

function filterEvenNumbers(...numbers) {

  const oddNum = numbers.filter(el => {
    return el % 2 !== 0;
  })

  return oddNum;
}

const oddNumbers = filterEvenNumbers(1, 2, 3, 4, 5, 6);
console.log(oddNumbers);

// 6.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших за 0.

function countPositiveNumbers(...numbers) {
  
  const numPos = numbers.filter( el => {
    return el > 0;
  })

  return numPos.length;
}

const positiveNum = countPositiveNumbers(1, -2, 3, -4, -5, 6);
console.log(positiveNum);

/* 7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, 
які діляться на ціло на 5. */

function getDividedByFive(...numbers) {

  const dividedBy5 = numbers.filter(el => {
    return el % 5 == 0;
  })

  return dividedBy5;
}

const dividedByFive = getDividedByFive(6, 2, 55, 11, 78, 10, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 5);
console.log(dividedByFive);