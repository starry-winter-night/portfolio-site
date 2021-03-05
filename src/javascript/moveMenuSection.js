const menu = document.querySelector(".aside__menu");

menu.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  const HOME = "#home";
  if (!id) {
    return;
  }
  id === HOME ? moveScrollHome() : moveScrollMenu(id);
});

function moveScrollMenu(id) {
  const selector = document.querySelector(id);
  selector.scrollIntoView({ behavior: "smooth" });
}

function moveScrollHome() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}
