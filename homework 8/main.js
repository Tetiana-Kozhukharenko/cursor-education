// 1.У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
class Student{
  constructor(university, course, fullName){
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];
    this.dismissed = false;
    this.savedMarks = null;
  }
/* 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", 
метод повертає сукупну інформацію про курс, учбовий заклад та імені студента. */
  getInfo(){
    console.log(`Студетнт ${this.course}го курсу ${this.university}, ${this.fullName}`);
  }
// 5.Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
  getAverageMark(){
    if (this.dismissed) {
      return null;
    }
  let sum = 0;
    for (let i = 0; i < this.marks.length; i++) {
      sum += this.marks[i];
    }
  const averageMark = sum / this.marks.length;
  return averageMark;
  }
/* 6.Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати 
їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок) */
  dismiss(){
    this.dismissed = true;
    this.savedMarks = this.marks;
    this.marks = null;
  }
// 7.Створіть метод this.recover, який дозволить поновити студента
  recover(){
    this.dismissed = false;
    this.marks = this.savedMarks;
    this.savedMarks = null;
  }
// 3.Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
  get marksStud(){
    return this.marks;
  }
/* 4.Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, 
геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5] */
  set marksStud(mark) {
    if (this.dismissed) {
      return null;
    }
    this.marks.push(mark);
  }
}

let student = new Student('Вищої Школи Психотерапії м.Одеса', 1, 'Остап Родоманський Бендер');
student.getInfo();
console.log(student.marks);
student.marksStud = 5;
console.log(student.marksStud);
student.getAverageMark();
student.dismiss();
console.log(student.marks);
student.marksStud = 5;
console.log(student.marksStud);
console.log(student.marks);
student.recover();
console.log(student.marks);
student.marksStud = 4;
console.log(student.marksStud);

// Advanced
// 1.Створіть новий клас BudgetStudent, який повністю наслідує клас Student
class BudgetStudent extends Student{
  constructor(university, course, fullName){
    super(university, course, fullName);
    this.marks = [5, 5, 5, 5];
/* 3. Метод отримання стипендії автоматично викликається кожні 30 секунд післестворення об'єкту. Підказка: викликайте його в constructor */
  setInterval(() => this.getScholarship(), 30000);
  }
/* 2.Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. Отримання стипендії супроводжується 
виведенням інформації в консоль: Ви отримали 1400 грн. стипендії */
// 4.Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
// 5.Якщо студента виключено, він не отримує стипендію
  getScholarship(){
    if((this.getAverageMark() >= 4) && (!this.dismissed)){
      console.log('Ви отримали 1400 грн. стипендії');
    }else{
      console.log('Ви не можете отримати стипендію');
    }
  }
}

let budgetStudent = new BudgetStudent('Вищої Школи Психотерапії м.Одеса', 2, 'Ксенія Валентинівна Боденко');
budgetStudent.getScholarship();
budgetStudent.getInfo();
console.log(budgetStudent.marks);
budgetStudent.marksStud = 5;
console.log(budgetStudent.marksStud);
budgetStudent.getAverageMark();
budgetStudent.dismiss();
console.log(budgetStudent.marks);
budgetStudent.marksStud = 5;
console.log(budgetStudent.marksStud);
console.log(budgetStudent.marks);
budgetStudent.recover();
console.log(budgetStudent.marks);