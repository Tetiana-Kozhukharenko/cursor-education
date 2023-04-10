function getRandomChinese(length) {
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

getRandomChinese(3);


