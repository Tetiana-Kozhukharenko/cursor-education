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

/* 1.Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Datascience"] - яка повертає список предметів 
для конкретного студента. Назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл */

function getSubjects(student) {
  const arrSubjects = [];

  for(let subject in student.subjects) {
    const capitalizeSubject = subject[0].toUpperCase() + subject.slice(1);

    if(capitalizeSubject.includes('_')) {
      arrSubjects.push(capitalizeSubject.replace('_', ' '));
    } else {
      arrSubjects.push(capitalizeSubject);
    }
  }

  return arrSubjects;
}

const subjectsStus = getSubjects(students[0]);
console.log(subjectsStus);


/* 2.Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для 
переданого студента НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2-го знаку. */

function getAverageMark(student) {
  const marks = [];
  let sumMarks = 0;

  for(let subject in student.subjects) {
    marks.push(...(student.subjects[subject]));
  }

  for(let mark of marks) {
    sumMarks += mark;
  }
  
  const averageMark = sumMarks / marks.length;
  return +averageMark.toFixed(2);
}

const averageMark = getAverageMark(students[0]);
console.log(averageMark);

/* 3.Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає 
інформацію загального виду по переданому студенту. Повинна бути виведена інформація: курс, ім'я, середня оцінка. */

function getStudentInfo(student) {
  const studInfo = {};

  studInfo.course = student.course;
  studInfo.name = student.name;
  studInfo.averageMark = +getAverageMark(student);

  return studInfo;
}

const studentInfo = getStudentInfo(students[0]);
console.log(studentInfo);

/* 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
– яка повертає імена студентів у алфавітному порядку. */

function getStudentsNames(students) {
  const names = [];

  for(let i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }

  return names.sort();
}

const studensNames = getStudentsNames(students);
console.log(studensNames);

/* 5.Створіть функцію getBestStudent(students) --> "Anton" – яка повертає
кращого студента зі списку по показнику середньої оцінки. */

function getBestStudent(students) {
  let maxAverageMark = 1;
  let bestStudentName = '';

  for(let i = 0; i < students.length; i++) {
    let averageMark = +getAverageMark(students[i]);

    if(averageMark > maxAverageMark) {
      maxAverageMark = averageMark;
      bestStudentName = students[i].name;
    }
  }

  return bestStudentName;
}

const bestStudent = getBestStudent(students);
console.log(bestStudent);

// 6.Створіть функцію getHighestAverageMark(students) --> 4.44 – яка повертає найбільшу середню оцінку.

function getHighestAverageMark(students) {
  const averageMark = [];

  for(let i = 0; i < students.length; i++) {
    averageMark.push(+getAverageMark(students[i]));
  }

  return Math.max(...averageMark);
}

const highestAverageMark = getHighestAverageMark(students);
console.log(highestAverageMark);

/* 7.Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка
повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень. */

function calculateWordLetters(word) {
  const obj = {};
  const wordLowerCase = word.toLowerCase();

  for(let i = 0; i < wordLowerCase.length; i++) {
    const letter = wordLowerCase[i];

    if(obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  }

  return obj;
}

const wordLetters = calculateWordLetters('тест');
console.log(wordLetters);