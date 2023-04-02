/* Зробіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд.
Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks(); */

function generateBlocks() {
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

generateBlocks();

/* Зробіть так, щоб квадрати змінювали колір раз на секунду. Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно 
викликати функцію generateBlocksInterval(); */

function generateBlocksInterval(){
  const interval = setInterval(function(){
    const allBlocks = document.querySelectorAll('.block');
    for(let i = 0; i < allBlocks.length; i++){
    allBlocks[i].style.background = `rgb(${Math.floor(Math.random() * 255)}, 
    ${Math.floor(Math. random() * 255)}, 
    ${Math.floor(Math. random() * 255)})`;
    }
  }, 1000);
  return interval;
}

generateBlocksInterval();