export const createSearchBar = (onSubmit) => {
  const formElement = document.createElement("form");
  formElement.classList.add("search-bar");
  formElement.setAttribute("data-js", "search-bar");

  formElement.innerHTML = `<input
  name="query"
  class="search-bar__input"
  type="text"
  placeholder="search characters"
  aria-label="character name"
  autocomplete="off"
/>
<button class="search-bar__button" aria-label="search for character">
  <img
    class="search-bar__icon"
    src="assets/magnifying-glass.png"
    alt=""
  />
</button>`;

  formElement.addEventListener("submit", onSubmit);

  return formElement;
};
