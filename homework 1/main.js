// 1.Створіть 3 змінні з наступими значеннями: 15.678, 123.965, 90.2345, вони зберігають ціни на товари.
const apples = 15.678;
const book = 123.965;
const chocolate = 90.2345;

// 2.Використовуючи вбудований об'єкт Math – виведіть максимальне число.
const maxNumber = Math.max(apples, book, chocolate);
console.log(`Максимальна ціна: ${maxNumber}`);

// 3.Використовуючи вбудований об'єкт Math – виведіть мінімальне число.
const minNumber = Math.min(apples, book, chocolate);
console.log(`Мінімальна ціна: ${minNumber}`);

// 4.Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму.
const sumGoods = apples + book + chocolate;
console.log(`Вартість всіх товарів: ${sumGoods}`);

// 5.Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою.
const wholeSumGoods = Math.trunc(apples + book + chocolate);
console.log(`Ціла частина вартості товарів: ${wholeSumGoods}`);

// 6.Виведіть суму товарів округлену до сотень (наприклад якщо вийшло 260, то виведіть 300).
const roundedSumGoods = Math.ceil(wholeSumGoods / 100) * 100;
console.log(`Сума товарів округлена до сотень: ${roundedSumGoods}`);

// 7.Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const paritySum = (Math.floor(sumGoods) % 2 == 0);
console.log(`Чи є сума всіх товарів парним числом: ${paritySum}`);

// 8.Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const rest = 500 - sumGoods;
console.log(`Решта при оплаті всіх товарів, якщо клієнт платить 500 грн: ${rest}`);

// 9.Виведіть середнє значення цін, округлене до другого знаку після коми.
const averageValuePrices = (sumGoods / 3).toFixed(2);
console.log(`Середнє значення цін, округлене до другого знаку після коми: ${averageValuePrices}`);

// 10.Створіть змінну, в якій збережіть випадкову знижку (використовуйте функцію Math.random).
const maxDiscount = 70;
const randomDiscount = Math.random() * maxDiscount;
console.log(`Випадкова знижка: ${randomDiscount}`);

// 11.Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
const sumWithDiscount = (sumGoods - (sumGoods * (randomDiscount / 100))).toFixed(2);
console.log(`Сума до оплати зі знижкою, округлена до 2 знаків після коми: ${sumWithDiscount}`);

// 12.Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни.
const netProfit = (sumGoods / 2) - (sumGoods - sumWithDiscount );
console.log(`Чистий прибуток, якщо клієнт заплатив зі знижкою: ${netProfit}`);