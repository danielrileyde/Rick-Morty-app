import { createCharacterCard } from "./components/card/card.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = "";

const fetchCharacters = async () => {
  const apiURL = `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    maxPage = data.info.pages;
    const requiredData = data.results;

    cardContainer.innerHTML = "";

    requiredData.map((card) => {
      const createdCard = createCharacterCard(card);
      return cardContainer.append(createdCard);
    });
    pagination.innerHTML = `${page}/${maxPage}`;
  } catch (error) {
    console.error("error is ", error);
  }
};

fetchCharacters();

prevButton.addEventListener("click", () => {
  // console.log("I am clickerd Prev");
  if (page > 1) {
    page--;
    fetchCharacters();
  }
});

nextButton.addEventListener("click", () => {
  if (page <= maxPage) {
    page = page + 1;
    fetchCharacters();
  }
});

searchBar.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = searchBar.elements.query.value;
  fetchCharacters();
  searchBar.reset();
});
