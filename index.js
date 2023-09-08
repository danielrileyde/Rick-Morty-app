import { createCharacterCard } from "./components/card/card.js";
import { createButton } from "./components/nav-button/nav-button.js";
import { createPagination } from "./components/nav-pagination/nav-pagination.js";
import { createSearchBar } from "./components/search-bar/search-bar.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const navigation = document.querySelector('[data-js="navigation"]');

// States‚
let maxPage = 1;
let page = 1;
let searchQuery = "";

const searchOnCharacters = (e) => {
  e.preventDefault();
  searchQuery = searchBar.elements.query.value;
  fetchCharacters();
  searchBar.reset();
};

const prevClick = () => {
  if (page > 1) {
    page--;
    fetchCharacters();
    nextButton.disabled = false;
    window.scrollTo(0, 0);
  } else {
    return null;
  }
};

const nextClick = () => {
  if (page <= maxPage) {
    page++;
    fetchCharacters();
    prevButton.disabled = false;
    window.scrollTo(0, 0);
  } else {
    return null;
  }
};

const handleError = () => {
  cardContainer.innerHTML = "";
  navigation.innerHTML = "";
  const pElement = document.createElement("p");
  const imgElement = document.createElement("img");
  pElement.textContent = `Searched Character "${searchQuery}" doesn't exist!`;
  imgElement.setAttribute(
    "src",
    "https://shots.codepen.io/username/pen/ZjLwYz-800.jpg?version=1532655820"
  );
  cardContainer.append(pElement);
  cardContainer.append(imgElement);
};

const searchBar = createSearchBar(searchOnCharacters);
searchBarContainer.append(searchBar);
const prevButton = createButton("button--prev", "button-prev", "←", prevClick);
navigation.append(prevButton);
const pagination = createPagination(page, maxPage);
navigation.append(pagination);
const nextButton = createButton("button--next", "button-next", "→", nextClick);
navigation.append(nextButton);

const fetchCharacters = async () => {
  const apiURL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    maxPage = data.info.pages;
    const requiredData = data.results;
    cardContainer.innerHTML = "";
    requiredData.map((character) => {
      const createdCard = createCharacterCard(character);
      return cardContainer.append(createdCard);
    });
    pagination.innerHTML = `${page}/${maxPage}`;

    if (page === 1) {
      prevButton.disabled = true;
    } else if (page === maxPage) {
      nextButton.disabled = true;
    }
  } catch (error) {
    if (error) {
      handleError();
    } else {
      return null;
    }
  }
};

fetchCharacters();
