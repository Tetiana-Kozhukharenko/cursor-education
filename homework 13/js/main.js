/* Створіть нескінченний генератор ідентифікаторів */

function* createIdGenerator() {
  let initialId = 0;
  for(let i = 0; i < Infinity; i++) {
    initialId += 1;
    yield initialId;
  }
};
const idGenerator = createIdGenerator();

/* Створіть генератор, який буде регулювати розміри шрифту для вашого сайту*/

const paragraph = document.querySelector("p");
const btnUp = document.querySelector(".btn-up");
const btnDown = document.querySelector(".btn-down");

function* newFontGenerator(initialFontSize) {
  let currentFontSize = initialFontSize;
  for (let i = 0; i < Infinity; i ++) {
    const instruction = yield currentFontSize;
    if (instruction === "up") {
      currentFontSize += 2;
    } else if (instruction === "down") {
      currentFontSize -= 2;
    }
    paragraph.style.fontSize = `${currentFontSize}px`;
  }
};

const fontGenerator = newFontGenerator(14);
fontGenerator.next();

btnUp.addEventListener("click", () => {
  fontGenerator.next("up");
});

btnDown.addEventListener("click", () => {
  fontGenerator.next("down");
});