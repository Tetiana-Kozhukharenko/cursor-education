const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана",];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних",];
const marks = [4, 5, 5, 3, 4, 5,];

/* 1.Розділіть студентів на пари(хлопець + дівчина). У вас повинен вийти вкладений масив з парами студентів:
[["Олександр", "Олена"], [..], [...]]; */

function getPairs(students) {
  const pairs = [];
  const male = [];
  const female = [];

  for (let i = 0; i < students.length; i++) {
    let student = (students[i]);

    if (student[student.length -1] === 'а') {
      female.push(student);
    } else {
      male.push(student);
    }
  }

  for (let i = 0; i < male.length; i++) {
    let par = [male[i], female[i]];
    pairs.push(par);
  }

  return pairs;
}

const pairs = getPairs(students);
console.log(pairs);

/* 2.Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]] */

function givePairsTopics(pairs, topics) {
  const pairsWithTopics = [];

  for (let i = 0; i < pairs.length; i++) {
    pairsWithTopics.push(pairs[i].concat(topics[i]));
  }

  return pairsWithTopics;
}

const topicsForPairs = givePairsTopics(pairs, themes);
console.log(topicsForPairs);

// 3.Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function giveMarksStudents(students, marks) {
  marksOfStud = [];

  for (let i = 0; i < students.length; i++) {
    marksOfStud.push([students[i], marks[i]]);
  }

  return marksOfStud;
}

const marksOfStudents = giveMarksStudents(students, marks);
console.log(marksOfStudents);

// 4.Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт: [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function giveMarksPairs(pairs) {
  const marksOfSPairs = [];

  for (let pair of pairs) {
    let randomMark = Math.ceil(Math.random() * 5);
    marksOfSPairs.push([...pair, randomMark]);
  }

  return marksOfSPairs;
}

const marksOfSPairs = giveMarksPairs(topicsForPairs);
console.log(marksOfSPairs);