const liElement = document.createElement("li");
liElement.classList.add("card");

export function createCharacterCard(randomCharacter) {
  liElement.innerHTML += `
    <div class="card__image-container">
              <img
                class="card__image"
                src= ${randomCharacter.image}
                alt=${randomCharacter.name}
              />
              <div class="card__image-gradient"></div>
            </div>
            <div class="card__content">
              <h2 class="card__title">${randomCharacter.name}</h2>
              <dl class="card__info">
                <dt class="card__info-title">Status</dt>
                <dd class="card__info-description">${randomCharacter.status}</dd>
                <dt class="card__info-title">Type</dt>
                <dd class="card__info-description">${randomCharacter.type}</dd>
                <dt class="card__info-title">Occurrences</dt>
                <dd class="card__info-description">${randomCharacter["episode"].length}</dd>
              </dl>
            </div>
    `;
  return liElement;
}
