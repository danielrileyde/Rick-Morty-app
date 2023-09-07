export const createButton = (buttontype, dataType, text, onClick) => {
  const navButton = document.createElement("button");
  navButton.classList.add("button");
  navButton.classList.add(buttontype);
  navButton.setAttribute("data-js", dataType);
  navButton.innerText = text;

  navButton.addEventListener("click", onClick);

  return navButton;
};
