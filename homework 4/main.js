const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


// 1.Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.

const femaleNames = [];
const maleNames = [];

for(let i = 0; i < students.length; i++) {
  if(students[i].slice(-1) === "а") {
    femaleNames.push(students[i]);
  } else {
    maleNames.push(students[i]);
  }
}

function getStudentPairs(namesF, namesM) {
  const pairs = [];
  for (let i = 0; i < namesM.length; i++) {
    pairs.push([namesM[i], namesF[i]]);
  }
  return pairs;
}

const pairsOfStudents = getStudentPairs(maleNames, femaleNames)
console.log(pairsOfStudents);

// 2.Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 

function matchPairsAndTopics(pairs, topics) {
  const pairsAndTopics = [];
  for (let i = 0; i < pairs.length; i++) {
    pairsAndTopics.push([pairs[i], topics[i]]);
  }
  return pairsAndTopics;
}

const pairsWithTopics = matchPairsAndTopics(pairsOfStudents, themes);
console.log(pairsWithTopics); 

// 3.Зіставте оцінки(marks) зі студентом(students)

function сompareMarcWithStudent(student, mark) {
  const marksStudents = [];
  for (let i = 0; i < student.length; i++) {
    marksStudents.push([student[i], mark[i]]);
  }
  return marksStudents;
}

const studentsMarks = сompareMarcWithStudent(students, marks);
console.log(studentsMarks);

// 4. Поставте кожній парі випадкову оцінку (від 1 до 5) за проєкт

function getRandomMark (pair) {
  const randomMark = [];
  for (let i = 0; i < pair.length; i++) {
    randomMark.push([pair[i], (Math.floor(Math.random() * 5) + 1)]);
  }
  return randomMark;
}

const randomMarks = getRandomMark(pairsWithTopics);
console.log(randomMarks);