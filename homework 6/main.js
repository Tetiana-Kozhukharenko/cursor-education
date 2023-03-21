const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
  math: [4, 4, 3, 4],
  algorithms: [3, 3, 3, 4, 4, 4],
  data_science: [5, 5, 3, 4]
  }
  }, {
  name: "Victor",
  course: 4,
  subjects: {
  physics: [5, 5, 5, 3],
  economics: [2, 3, 3, 3, 3, 5],
  geometry: [5, 5, 2, 3, 5]
  }
  }, {
  name: "Anton",
  course: 2,
  subjects: {
  statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
  english: [5, 3],
  cosmology: [5, 5, 5, 5]
  }
  }];


/* 1.Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів
для конкретного студента. Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл */

function getSubjects(student) {
  const subjectsUpperCase = [];
  const subjectsStud = Object.keys(student.subjects);
  for(let i = 0; i < subjectsStud.length; i++) {
    const subject = subjectsStud[i].charAt(0).toUpperCase() + subjectsStud[i].slice(1);
    subjectsUpperCase.push(subject.replace('_', ' '));
  }
  return subjectsUpperCase;
};

console.log(getSubjects(students[0]));

/* 2.Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента
НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :) */

function getAverageMark(student) {
  let allMarks;
  let res = 0;
  let result;
  const marksStud = Object.values(student.subjects);
  const marks1 = marksStud[0], marks2 = marksStud[1], marks3 = marksStud[2];
  allMarks = marks1.concat(marks2, marks3);
  for(let i = 0; i < allMarks.length; i++) {
    res += allMarks[i];
  }
  result = res / allMarks.length;
  return result.toFixed(2);
 };

console.log(getAverageMark(students[0]));

/* 3.Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – 
яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання).
Повинна бути виведена інформація: курс, ім'я, середня оцінка. */

function getStudentInfo(student) {
  const studentInfo = {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
  };
  return studentInfo;
};

console.log(getStudentInfo(students[0]));

// 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(student) {
  const names = [];
  for(let key in student){
      names.push(student[key].name);
  }
  names.sort();
  return names;
};

console.log(getStudentsNames(students));

// 5.Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students) {
  const allAverageMarks = students.map(student => parseFloat(getAverageMark(student)));
  const maxAverageMark = Math.max(...allAverageMarks);
  const bestStudent = students.find(student => parseFloat(getAverageMark(student)) === maxAverageMark);
  return bestStudent.name;
};

console.log(getBestStudent(students));

/* 6.Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви 
у слові, а значення – кількість їх повторень. */

function calculateWordLetters(word) {
  const letterCounts = {};
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (letterCounts[letter]) {
      letterCounts[letter]++;
    } else {
      letterCounts[letter] = 1;
    }
  }
  return letterCounts;
};

console.log(calculateWordLetters("тест"));
