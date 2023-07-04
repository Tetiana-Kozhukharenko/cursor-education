const ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476,
};

const latvia = {
  tax: 0.25,
  middleSalary: 1586,
  vacancies: 3921,
};

const litva = {
  tax: 0.15,
  middleSalary: 1509,
  vacancies: 1114,
};

/* 1.Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як
IT-спеціаліст в якійсь з країн. Функція повинна викликатись через call та працювати з даними через this. */

function getMyTaxes(salary) {
  return this.tax * salary;
}

console.log(getMyTaxes.call(ukraine, 2000));

/* 2.Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платять
IT-спеціалісти у кожній країні. Функція повинна викликатись через call та працювати з даними через this. */

function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}

console.log(getMiddleTaxes.call(litva));

/* 3.Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять
IT-спеціалісти у кожній країні. Функція повинна викликатись через call та працювати з даними через this. */

function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}

console.log(getTotalTaxes.call(latvia));

/* 4.Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number,
profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000, taxes –
розраховується в залежності від вибраної країни та значення salary, profit = salary - taxes. */

function getMySalary(country) {
  const obj = {};
  obj.salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
  obj.tax = country.tax * obj.salary;
  obj.profit = obj.salary - obj.tax;
  console.log(obj);
}

setInterval(getMySalary, 10000, latvia);
