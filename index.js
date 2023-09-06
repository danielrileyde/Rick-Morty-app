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
const maxPage = 1;
const page = 1;
const searchQuery = "";

const apiURL = "https://rickandmortyapi.com/api/character";
const fetchCharacters = async () => {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    const requiredData = data.results;
    console.log("requiredData", requiredData);
    requiredData.map((card) => {
      const createdCard = createCharacterCard(card);
      return cardContainer.append(createdCard);
    });
  } catch (error) {
    console.log("error is ", error);
  }
};
fetchCharacters();
