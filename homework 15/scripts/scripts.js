//HW-1
const iron = 15.678;
const phone = 123.965;
const headphones = 90.2345;

export const allGoods = iron + phone + headphones;

//HW-2
export let numberN = +prompt('Введіть перше ціле число:', '');

while(true) {
  if (Number.isInteger(numberN) && numberN != '') {
    break;
  } else {
    numberN = +prompt('Ви помилилися, введіть перше число:', '');
  }
}

//HW-3
export function getMaxDigit(number) {
  const digits = number.toString().split('').map(Number);
  return Math.max(...digits);
}

//HW-4
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
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

export const pairsOfStudents = getStudentPairs(maleNames, femaleNames);

//HW-5
export function getRandomArray(length, min, max) {
  const randomArray = [];
  for(let i = 0; i < length; i++) {
    let randomNumbers = Math.floor(Math.random(i) * (max - min + 1)) + min;
    randomArray.push(randomNumbers);
  }
  return randomArray;
}

//HW-6
export const myStudents = [{
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

export function getSubjects(student) {
  const subjectsUpperCase = [];
  const subjectsStud = Object.keys(student.subjects);
  for(let i = 0; i < subjectsStud.length; i++) {
    const subject = subjectsStud[i].charAt(0).toUpperCase() + subjectsStud[i].slice(1);
    subjectsUpperCase.push(subject.replace('_', ' '));
  }
  return subjectsUpperCase;
};

//HW-7
export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

export function getMyTaxes(salary) {
  console.log(this.tax * salary);
};

//HW-8
class Student {
  constructor(university, course, fullName){
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [5, 4, 4, 5];
    this.dismissed = false;
    this.savedMarks = null;
  }

  getInfo(){
    console.log(`Студетнт ${this.course}го курсу ${this.university}, ${this.fullName}`);
  }
}

export let studentM = new Student('Вищої Школи Психотерапії м.Одеса', 1, 'Остап Родоманський Бендер');

//HW-9
export function generateBlocks() {
  const container = document.createElement('div');
  container.classList.add('container');
  container.style.display = 'flex';
  container.style.flexWrap = 'wrap';
  container.style.width = '250px';
  for (let i = 0; i < 25; i++) {
    const block = document.createElement('div');
    block.classList.add('block');
    block.style.background = `rgb(${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math. random() * 255)}, 
    ${Math.floor(Math. random() * 255)})`;
    block.style.width = '50px';
    block.style.height = '50px';
    container.append(block);
  }
  document.body.append(container);
}

//HW-10
window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('active');
});

//HW-11
export function getRandomChinese(length) {
  return new Promise((resolve) => {
    let res = '';
    let i = 0;
    while (i < length) {
      const sign = Date.now() % 100000;
      setTimeout(function() {
        res += String.fromCharCode(sign);
        if (res.length === length) {
          resolve(res);
        }
      }, 50 * i);
      i++;
    }
  }).then((res) => console.log(res));
}

//HW-12
function renderCharacters({ name, birth_year, gender, url }) {
  const divContainer = document.getElementById("div-container");
  const div = document.createElement("div");
  div.classList.add("card-character");
  div.innerHTML = `<h2 class="name">${name}</h2>
                 <img src="${characterPhotos[url]}" alt="${name}">
                 <p class="birth-year">Date of birth: ${birth_year}</p>
                 <p class="gender">Gender: ${gender}</p>`;
  divContainer.append(div);
}

let isCharactersVisible = false;

export function toggleCharacters() {
  const divContainer = document.getElementById("div-container");
  if (!isCharactersVisible) {
    const filmNumber = document.getElementById("film-number").value;
    const url = `https://swapi.dev/api/films/${filmNumber}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const characters = data.characters;
        characters.forEach((character) => {
          fetch(character)
            .then((res) => res.json())
            .then((characterData) => {
              characterData.url = character;
              renderCharacters(characterData);
            })
        });
      })
    divContainer.classList.add("visible");
    isCharactersVisible = true;
  } else {
    divContainer.innerHTML = "";
    divContainer.classList.remove("visible");
    isCharactersVisible = false;
  }
}

const characterPhotos = {
  "https://swapi.dev/api/people/1/": "https://www.slashfilm.com/img/gallery/george-lucas-had-a-good-reason-for-scrapping-luke-skywalkers-original-last-name/l-intro-1676066290.jpg",
	"https://swapi.dev/api/people/2/": "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-2dprr0_16d98939.jpeg?region=0%2C0%2C1280%2C842",
	"https://swapi.dev/api/people/3/": "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=273%2C0%2C951%2C536",
	"https://swapi.dev/api/people/4/": "https://media.distractify.com/brand-img/p6YqWm4az/1200x628/will-darth-vader-be-in-the-obi-wan-series-1649173325239.jpeg",
	"https://swapi.dev/api/people/5/": "https://www.lavanguardia.com/files/og_thumbnail/uploads/2017/12/08/5fa3d8e24f841.jpeg",
  "https://swapi.dev/api/people/6/": "https://www.looper.com/img/gallery/the-untold-truth-of-owen-lars/l-intro-1652985309.jpg",
  "https://swapi.dev/api/people/7/": "https://www.starwarsaddicted.it/wp-content/uploads/2022/05/databank_berulars_01_169_68101518.webp",
  "https://swapi.dev/api/people/8/": "https://www.looper.com/img/gallery/r5-d4-the-complete-history-of-din-djarins-ally-in-the-mandalorian-explained/intro-1678514086.webp",
  "https://swapi.dev/api/people/9/": "https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780",
	"https://swapi.dev/api/people/10/": "https://www.cnet.com/a/img/resize/64e8d13cfb92a923b9024aad6350f7a765f629c5/hub/2019/08/16/65ef0311-d2a6-49f4-9b55-5fce9e60e3a1/obi2.jpg?auto=webp&fit=crop&height=675&width=1200",
  "https://swapi.dev/api/people/12/": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Grand-Moff-Tarkin-A-New-Hope-Cropped.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5",
	"https://swapi.dev/api/people/13/": "https://caracoltv.brightspotcdn.com/dims4/default/03a38b0/2147483647/strip/true/crop/907x510+32+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcaracol-brightspot.s3-us-west-2.amazonaws.com%2Fassets%2Fcaracoltv%2Fchew.jpg",
	"https://swapi.dev/api/people/14/": "https://cdn.mos.cms.futurecdn.net/W9MfAxqosUeg5xYqFZ4qDC-1200-80.jpg",
  "https://swapi.dev/api/people/15/": "https://pyxis.nymag.com/v1/imgs/c20/4ac/55db7c77cf4a0ed214af58f3201f5281bf-12-greedo-star-wars.rsocial.w1200.jpg",
  "https://swapi.dev/api/people/16/": "https://upload.wikimedia.org/wikipedia/en/5/53/Jabba_the_Hutt_in_Return_of_the_Jedi_%281983%29.png",
	"https://swapi.dev/api/people/18/": "https://lumiere-a.akamaihd.net/v1/images/630cbcbdbde4cd000161518d-image_5e089c89.jpeg?region=0%2C48%2C1536%2C768",
  "https://swapi.dev/api/people/19/": "https://i.redd.it/kfvbjz2ootu41.jpg",
	"https://swapi.dev/api/people/20/": "https://images.immediate.co.uk/production/volatile/sites/3/2017/12/yoda-the-empire-strikes-back-28a7558.jpg?quality=90&resize=800,534",
	"https://swapi.dev/api/people/21/": "https://www.looper.com/img/gallery/how-emperor-palpatine-was-even-more-evil-than-you-think/l-intro-1629941178.jpg",
	"https://swapi.dev/api/people/22/": "https://assets-jpcust.jwpsrv.com/thumbnails/hweb7cn4-1920.jpg",
	"https://swapi.dev/api/people/23/": "https://spikeybits.com/wp-content/uploads/2018/08/iggyy.jpg",
	"https://swapi.dev/api/people/24/": "https://static1.srcdn.com/wordpress/wp-content/uploads/2017/01/Bossk-in-Star-Wars-.jpg",
	"https://swapi.dev/api/people/25/": "https://media.comicbook.com/2017/01/lando-calrissian-cape-224728.jpg",
	"https://swapi.dev/api/people/26/": "https://sportshub.cbsistatic.com/i/2021/03/18/05f997f4-ad05-4a2d-99f5-e5db984a539f/star-wars-shows-landos-disturbing-reunion-with-lobot-1208975.jpg",
  "https://swapi.dev/api/people/81/": "https://lumiere-a.akamaihd.net/v1/images/image_617883f1.jpeg?region=0%2C47%2C457%2C257",
}

//HW-13
export function* createIdGenerator() {
  let initialId = 0;
  for(let i = 0; i < Infinity; i++) {
    initialId += 1;
    yield initialId;
  }
};
