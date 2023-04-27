const CssClasses = {
  LETTER: "letter",
};

function createLiter(liters) {
  const component = document.createElement("div");
  component.classList.add(CssClasses.LETTER);
  component.innerHTML = liters;

  return component;
}

export { createLiter };
