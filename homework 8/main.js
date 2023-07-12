/* Створіть клас Student та розробляйте методи всередині ного.

1.У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при
створенні студента(в конструктор).

2.Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський
Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.

3.Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5].

4.Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка
поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5].

5.Створіть метод отримання середнього балу this.getAverageMark() -> 4.6.

6.Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки
та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок).

7.Створіть метод this.recover, який дозволить поновити студента. */

class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];
    this.marksExpelledStudent = [];
    this.dismissed = false;
  }

  getInfo() {
    return`Студент ${this.course}го курсу ${this.university}, ${this.fullName}.`
  }

  getAverageMark() {
    let sumMarks = 0;
    for(let mark of this.marks) {
      sumMarks += mark;
    }
    return sumMarks / this.marks.length;
  }

  dismiss() {
    this.dismissed = true;
    this.marksExpelledStudent = this.marks;
    this.marks = null;
  }

  recover() {
    this.marks = this.marksExpelledStudent;
    this.dismissed = false;
  }

  get showMarks() {
    return this.marks;
  }

  set giveMarkStudent(newMark) {
    if(this.dismissed === false) {
      this.marks.push(newMark);
    } else {
       console.log('Ставити оцінки студенту, якого виключено не можна!');
      return null;
    }
  }
}

let student1 = new Student('Вищої Школи Психотерапії м.Одеса', 1, 'Остап Родоманський Бендер');
const info = student1.getInfo();
console.log(info);
const show = student1.showMarks;
console.log(show);
student1.giveMarkStudent = 5;
console.log(student1.marks);
const averageMark = student1.getAverageMark();
console.log(averageMark);
student1.dismiss();
student1.giveMarkStudent = 5;
console.log(student1.marks);
student1.recover();
console.log(student1.marks);

/* 8.Створіть новий клас BudgetStudent, який повністю наслідує клас Student.

9.Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії
супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії.

10.Метод отримання стипендії автоматично викликається кожні 30 секунд після
створення об'єкту. Підказка: викликайте його в constructor.

11.Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0.

12.Якщо студента виключено, він не отримує стипендію. */

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);

    setInterval(() => this.getScholarship(), 30000);
  }

  getScholarship() {
    if(this.getAverageMark() >= 4 || this.dismissed === false) {
      console.log('Ви отримали 1400 грн. стипендії.');
    } else {
      console.log('Ви не можете отримати стипендію.');
    }
  }
}

let student2 = new BudgetStudent('Вищої Школи Психотерапії м.Одеса', 2, 'Іван Вікторович Димко');
const info2 = student2.getInfo();
console.log(info2);