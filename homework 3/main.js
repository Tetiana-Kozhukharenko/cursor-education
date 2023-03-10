/* 1.Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
Приклади: 1236 -> 6, 987 -> 9, 385 -> 8*/

function getMaxDigit(number) {
  const digits = number.toString().split('').map(Number);
  return Math.max(...digits);
}

// 2.Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл 

function getPowerNumber(number, power) {
  let result = 1;
  for (let i = 0; i < power; i++) {
    result *= number;
  }
  return result;
}


// 3.Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function formatName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}


/* 4.Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% ->
19.5%). Приклад: 1000 -> 805 */

function calculateNetSalary(grossSalary) {
  const taxRate = 0.195;
  const taxAmount = grossSalary * taxRate;
  const netSalary = grossSalary - taxAmount;
  return netSalary;
}

// 5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(numberN, numberM) {
  return Math.floor(Math.random() * (numberM - numberN + 1)) + numberN;
}

// 6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(letter, word) {
  let count = 0;
  const letters = word.toLowerCase().split('');
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letter.toLowerCase()) {
      count++;
    }
  }
  return count;
}


/* 7.Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$ */

function convertCurrency(amountWithCurrency) {
  if (amountWithCurrency.includes('$')) {
    const dollars = parseFloat(amountWithCurrency);
    const hryvnia = dollars * 37;
    return hryvnia + ' грн';
  } else if (amountWithCurrency.includes('UAH')) {
    const hryvnia = parseFloat(amountWithCurrency);
    const dollars = hryvnia / 37;
    return dollars + '$';
  } else {
    return 'Неправильно введені дані';
  }
}


// 8.Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

function convertCurrency(amountWithCurrency) {
  amountWithCurrency = amountWithCurrency.toUpperCase();
  if (amountWithCurrency.includes('$')) {
    const dollars = parseFloat(amountWithCurrency);
    const hryvnia = dollars * 37;
    return hryvnia + ' грн';
  } else if (amountWithCurrency.includes('UAH')) {
    const hryvnia = parseFloat(amountWithCurrency);
    const dollars = hryvnia / 37;
    return dollars + '$';
  } else {
    return 'Неправильно введена валюта';
  }
}

/* 9.Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8
символам. Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124 */

function getRandomPassword(length = 8) {
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    password += randomDigit;
  }
  return password;
}


/* 10.Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"*/

function deleteLetters(letter, sentence) {
  return sentence.split(letter).join('');
}


/* 11.Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false,
isPalyndrom("Я несу гусеня") -> true */

function isPalindrome(word) {
  const cleanedWord = word.toLowerCase().replace(/\s/g, '');
  return cleanedWord === cleanedWord.split('').reverse().join('');
}


/* 12.Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт 
був дуже ніжним") -> "сктдеим" */

function deleteDuplicateLetter(sentence) {
  const charCount = {};
  const result = [];
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i].toLowerCase();
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i].toLowerCase();
    if (charCount[char] === 1 && char !== " ") {
      result.push(sentence[i]);
    }
  }
  return result.join("");
}


document.writeln(`Функція №1: ${getMaxDigit(137805)} <br>`);
document.writeln(`Функція №2: ${getPowerNumber(2, 4)} <br>`);
document.writeln(`Функція №3: ${formatName('тЕтЯнА')} <br>`);
document.writeln(`Функція №4: ${calculateNetSalary(4000)} <br>`);
document.writeln(`Функція №5: ${getRandomNumber(3, 101)} <br>`);
document.writeln(`Функція №6: ${countLetter('а', 'програмувАння')} <br>`);
document.writeln(`Функція №7: ${convertCurrency('90$')} <br>`);
document.writeln(`Функція №8: ${convertCurrency('3700Uah')} <br>`);
document.writeln(`Функція №9: ${getRandomPassword(9)} <br>`);
document.writeln(`Функція №10: ${deleteLetters('а', 'апарат')} <br>`);
document.writeln(`Функція №11: ${isPalindrome('Я несу гусеня')} <br>`);
document.writeln(`Функція №12: ${deleteDuplicateLetter('Бісквіт був')} <br>`);