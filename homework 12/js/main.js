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

function toggleCharacters() {
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

let currentPageUrl = "https://swapi.dev/api/planets/?page=1";

function renderPlanets(planets) {
  const divContainer2 = document.getElementById("div-container2");
  divContainer2.innerHTML = "";
  planets.forEach((planet) => {
    const divPlanets = document.createElement("div");
    divPlanets.classList.add("card-planets");
    divPlanets.innerHTML = `<h2 class="name">${planet.name}</h2>
                 <img src="${planetsPhotos[planet.url]}" alt="${planet.name}">
                 <p class="diameter">Diameter: ${planet.diameter}</p>
                 <p class="climate">Climate: ${planet.climate}</p>
                 <p class="terrain">Terrain: ${planet.terrain}</p>`;
    divContainer2.append(divPlanets);
  });
}

function getPlanets(pageUrl) {
  fetch(pageUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const planets = data.results;
      renderPlanets(planets);
      currentPageUrl = data.next;
      if (!currentPageUrl) {
        const btnNext = document.querySelector(".btn-next");
        btnNext.disabled = true;
      }
    });
}

function getFirstPagePlanets() {
  const btnNext = document.querySelector(".btn-next");
  btnNext.disabled = false;
  currentPageUrl = "https://swapi.dev/api/planets/?page=1";
  getPlanets(currentPageUrl);
}

function getNextPagePlanets() {
  getPlanets(currentPageUrl);
}

const planetsPhotos = {
  "https://swapi.dev/api/planets/1/": "https://swtorstrategies.com/wp-content/uploads/2010/01/tatooine.jpg",
	"https://swapi.dev/api/planets/2/": "https://upload.wikimedia.org/wikipedia/uk/5/55/AlderaanPlanet.png",
	"https://swapi.dev/api/planets/3/": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0eo8guOS-mTBDtdd7eRvFRQNsSAUGFXgQUtqV9T5NAOvJVOXSdGnV6zM_rQQA1S0MqnM&usqp=CAU",
	"https://swapi.dev/api/planets/4/": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfSSfUluSC6-G5nwCz0z8kWkbKV2F1fUX70Enh9nzUpy8aKlKimNcJYzLgeshqXMjqy8Y&usqp=CAU",
	"https://swapi.dev/api/planets/5/": "https://oyster.ignimgs.com/mediawiki/apis.ign.com/star-wars-episode-7/6/68/Dagobah_2.jpg",
	"https://swapi.dev/api/planets/6/": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdPaztNWVHFFxq5dzvsaE_FBbEAEGwTx8Ixvd7QXK7dSkFi6I0QLNz6gIN2N-I7RN54sQ&usqp=CAU",
	"https://swapi.dev/api/planets/7/": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYM30ORDVLQ7KTFACjk9M75jPO_2wRsAGoQh4avA7J13rjKHmwld1hqmirEPGGBxehLs&usqp=CAU",
	"https://swapi.dev/api/planets/8/": "https://i.pinimg.com/564x/9e/52/59/9e52599bdb1118bff89dea54a0ed3eda.jpg",
	"https://swapi.dev/api/planets/9/": "https://cdna.artstation.com/p/assets/images/images/030/865/456/large/shiny-man-coruscant-icon-3-black.jpg?1601907782",
	"https://swapi.dev/api/planets/10/": "https://i.pinimg.com/originals/9c/82/84/9c8284f9a24d37770950af2c603ccdbd.jpg",
}