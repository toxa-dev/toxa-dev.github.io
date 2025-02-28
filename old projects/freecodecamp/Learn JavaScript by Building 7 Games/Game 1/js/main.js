/*
let gridPlaceholders = document.querySelector("#grid-placeholders");
let gridCards = document.querySelector("#grid-cards");

let newCell;

function shuffleArray(array) {
  for (var i = array.length; i > 0; --i)
    array.push(array.splice((Math.random() * i) | 0, 1)[0]);
  return array;
}

let cards = [
  "cheeseburger.png",
  "cheeseburger.png",
  "fries.png",
  "fries.png",
  "hotdog.png",
  "hotdog.png",
  "ice-cream.png",
  "ice-cream.png",
  "milkshake.png",
  "milkshake.png",
  "pizza.png",
  "pizza.png",
];

let cardsRandom = shuffleArray(cards);

//Display placeholers

for (let i = 1; i <= 12; +i++) {
  gridPlaceholders.insertAdjacentHTML(
    "beforeend",
    `<img src="img/blank.png" alt="Placeholder for a game card" data-card-id="${i}">`
  );
}

//Display game cards
for (card of cardsRandom) {
  gridCards.insertAdjacentHTML(
    "beforeend",
    `<img src="img/${card}" alt="One of the game cards" data-card-id="${card}">`
  );
}
let placeHolders = document.querySelectorAll("#grid-placeholders img");

for (let element of placeHolders) {
  element.addEventListener("click", function (e) {
    element.style.visibility = "hidden";
  });
}

let gameCards = document.querySelectorAll("#grid-cards img");
let getCard;
let prevCard;
for (let element of gameCards) {
  element.addEventListener("click", function (e) {
    element.style.opacity = 1;
    if (!getCard) {
      getCard = element.dataset.cardId;
      prevCard = element;
    } else if (getCard === element.dataset.cardId) {
      prevCard.setAttribute("src", "img/white.png");
      element.setAttribute("src", "img/white.png");
      getCard = null;
      prevCard = null;
    } else if (getCard !== element.dataset.cardId) {
      prevCard.style.opacity = 0;
      element.style.opacity = 0;
      getCard = null;
      prevCard = null;
      alert("No match");
    }
  });
}
*/

/*
let grid = document.querySelector("#game-grid");

let cards = [
  "cheeseburger",
  "fries",
  "hotdog",
  "ice-cream",
  "milkshake",
  "pizza",
];

cards = cards.concat(cards);

let cardsRandom = shuffleArray(cards);

function shuffleArray(array) {
  for (var i = array.length; i > 0; --i)
    array.push(array.splice((Math.random() * i) | 0, 1)[0]);
  return array;
}

function randomFromArray(array) {
  return array[(Math.random() * array.length) | 0];
}

for (let i = 1; i <= 12; +i++) {
  grid.insertAdjacentHTML(
    "beforeend",
    `<img src="img/blank.png" alt="Placeholder for a game card" data-card="blank" data-card-id="${i}">`
  );
}

let placeHolders = document.querySelectorAll("#game-grid img");
let currentCard;
let prevCard;
let currentDataCard;
let prevDataCard;
let prevElement;
let currentElement;

for (let element of placeHolders) {
  element.addEventListener("click", function (e) {
    if (!currentCard) {
      currentCard = randomFromArray(cardsRandom);
    } else {
      prevCard = currentCard;
      currentCard = randomFromArray(cardsRandom);
    }

    element.setAttribute("src", `img/${currentCard}.png`);
    element.setAttribute("data-card", `${currentCard}`);

    if (!currentDataCard) {
      currentDataCard = element.getAttribute("data-card");
      currentElement = element;
    } else {
      prevDataCard = currentDataCard;
      currentDataCard = element.getAttribute("data-card");
      prevElement = currentElement;
      currentElement = element;

      if (prevDataCard === currentDataCard) {
        console.log("Match");
        cardsRandom = cardsRandom.filter((item) => {
          return item !== currentCard;
        });

        setTimeout(function () {
          prevElement.style.opacity = 0;
          currentElement.style.opacity = 0;
        }, 1000);

        currentCard = null;
        prevCard = null;
        prevDataCard = null;
        currentDataCard = null;
      } else {
        console.log("No match");
        setTimeout(function () {
          prevElement.setAttribute("src", "img/blank.png");
          prevElement.setAttribute("data-card", "blank");
          currentElement.setAttribute("src", "img/blank.png");
          currentElement.setAttribute("data-card", "blank");
        }, 1000);

        currentCard = null;
        prevCard = null;
        prevDataCard = null;
        currentDataCard = null;
      }
    }
  });
}
*/

let grid = document.querySelector("#game-grid");

let newCards = {
  1: "cheeseburger",
  2: "fries",
  3: "hotdog",
  4: "ice-cream",
  5: "milkshake",
  6: "pizza",
  7: "cheeseburger",
  8: "fries",
  9: "hotdog",
  10: "ice-cream",
  11: "milkshake",
  12: "pizza",
};

let values = Object.values(newCards);

shuffleArray(values);

function shuffleArray(array) {
  for (var i = array.length; i > 0; --i)
    array.push(array.splice((Math.random() * i) | 0, 1)[0]);
  return array;
}

let i = 0;
for (const property in newCards) {
  newCards[property] = values[i];
  i++;
}

for (let i = 1; i <= 12; +i++) {
  grid.insertAdjacentHTML(
    "beforeend",
    `<img src="img/blank.png" alt="Placeholder for a game card" data-card="blank" data-card-id="${i}">`
  );
}

let placeHolders = document.querySelectorAll("#game-grid img");
let dataCardId;
let prevDataCardId;
let prevElement;
let currentElement;

for (let element of placeHolders) {
  element.addEventListener("click", function (e) {
    if (element.getAttribute("src") !== "img/white.png") {
      if (!dataCardId) {
        dataCardId = element.getAttribute("data-card-id");
        currentElement = element;
      } else {
        prevDataCardId = dataCardId;
        dataCardId = element.getAttribute("data-card-id");
        prevElement = currentElement;
        currentElement = element;
      }
      element.setAttribute("src", `img/${newCards[dataCardId]}.png`);

      if (dataCardId && prevDataCardId) {
        if (newCards[prevDataCardId] === newCards[dataCardId]) {
          //Match
          console.log("Match");
          delete newCards[prevDataCardId];
          delete newCards[dataCardId];

          dataCardId = null;
          prevDataCardId = null;

          setTimeout(function () {
            prevElement.setAttribute("src", "img/white.png");
            currentElement.setAttribute("src", "img/white.png");
          }, 300);
        } else {
          //No match
          console.log("No match");

          setTimeout(function () {
            prevElement.setAttribute("src", "img/blank.png");
            currentElement.setAttribute("src", "img/blank.png");
          }, 300);

          dataCardId = null;
          prevDataCardId = null;
        }
      }
    } else {
      console.log("nothing");
    }
  });
}
