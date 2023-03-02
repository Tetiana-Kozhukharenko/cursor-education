let iron = 15.678;
let phone = 123.965;
let headphones = 90.2345;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число

console.log(Math.max(iron, phone, headphones));


// Використовуючи вбудований об'єкт Math – виведіть мінімальне число

console.log(Math.min(iron, phone, headphones));


// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму

let allGoods = iron + phone + headphones;

console.log(allGoods);


 /* Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості
кожного товару між собою */

console.log(Math.trunc(iron));
console.log(Math.trunc(phone));
console.log(Math.trunc(headphones));

let wholePartOfValues = (Math.trunc(iron)) + (Math.trunc(phone)) + (Math.trunc(headphones));

console.log(wholePartOfValues);


/* Округлення використовувати в МЕНШУ сторону. 
Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260,
то виведіть 300) */
// Округлена сума в більшу сторону

console.log(Math.ceil(wholePartOfValues /100) * 100);

// Округлена сума в меншу сторону

let roundedAmount = Math.floor(wholePartOfValues /100) * 100;

console.log(roundedAmount);


/* Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу
  сторону) парним чи непарним числом? */

let evenOrOdd = roundedAmount % 2 === 0;

console.log(evenOrOdd);


/* Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо
  клієнт платить 500 грн. */

  let rest = 500 - iron - phone - headphones;

  console.log(rest);
  
  // Виведіть середнє значення цін, округлене до другого знаку після коми

  let averageValueOfPrices = (iron + phone + headphones) / 3;

  console.log(averageValueOfPrices.toFixed(2));


  /* Створіть змінну, в якої збережіть випадкову знижку
(використовуйте функцію Math.random). */

let randomDiscount = Math.random();


/* Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 
2 знаків після коми. */

let totalSum = 229.8775;

alert("Спеціально для вас діє знижка " + randomDiscount);

let amounToBePaid = totalSum - randomDiscount;

alert("Сума до оплати складає: " + amounToBePaid.toFixed(2));


/* Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та
собівартість товарів рівно в два рази нижче їх ціни?
(Приклад: ціна була 260.66, знижка склала 10%, клієнт заплатив на 26
меньше, собівартість = 260 / 2 -> 130. Чистий прибуток = 130 - 26 -> 104)
(Приклад 2: ціна була 100, знижка склала 90%, клієнт заплатив на 90
меньше, собівартість = 100 / 2 -> 50. Чистий прибуток = 50 - 90 -> -40) */

let netProfit = amounToBePaid - (iron / 2) - (phone / 2) - (headphones / 2);

console.log(netProfit);

/* Створіть шаблонний рядок та виведіть всі обчислення вчинені в Base
частині домашнього завдання у вигляді одного рядка наступного
вигляду:
Максимальна ціна: 9999.99 Мінімальна ціна: 1111.11 Вартість всіх товарів:
1345.66 ...і так далі */

alert(`Максимальна ціна товару: ${Math.max(iron, phone, headphones)} 
Мінімальна ціна товару: ${Math.min(iron, phone, headphones)}
Вартість всіх товарів: ${allGoods}
Сума цілої частини вартості товарів: ${wholePartOfValues}
Сума товарів округлена до сотень в меншу сторону: ${roundedAmount}
Cума всіх товарів є парним чи непарним числом? ${evenOrOdd}
Cума решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн: ${rest}
Середнє значення цін, округлене до другого знаку після коми: ${averageValueOfPrices.toFixed(2)}`);