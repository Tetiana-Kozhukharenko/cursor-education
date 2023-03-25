const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/* 1.Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст 
в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this */

function getMyTaxes(salary) {
  console.log(this.tax * salary);
};

getMyTaxes.call(ukraine, 2500);

/* 2.Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платять IT-спеціалісти 
у кожній країні. (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this */


function getMiddleTaxes(salary) {
  console.log(this.tax * this.middleSalary);
};

getMiddleTaxes.call(latvia);

/* 3.Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у 
кожній країні. (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this */

function getTotalTaxes(country) {
  console.log(this.tax * this.middleSalary * this.vacancies);
};

getTotalTaxes.call(litva);

/* 4.Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } 
кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної 
країни та значення salary. profit = salary - taxes; для виводу в консоль кожні 10 секунд використайте setInterval */

function getMySalary(country) {
  const salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
  const taxes = this.tax * salary;
  const profit = salary - taxes;
  const obj = {salary: salary, taxes: taxes, profit: profit};
  setInterval(function() {
    console.log(obj);
  }, 10000);
};

getMySalary.call(ukraine);

