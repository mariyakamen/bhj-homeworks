function click(event) {
  event.target.parentElement
    .querySelector(".dropdown__list")
    .classList.toggle("dropdown__list_active");

  return false;
}

for (const each of document.getElementsByClassName("dropdown__value")) {
  each.onclick = click;
}

let textInMenu = document.getElementsByClassName("dropdown__item");

function dropdownClick(event) {
  let dropdownValue = document.getElementsByClassName("dropdown__value")[0];

  dropdownValue.textContent = event.target.textContent;

  dropdownValue.parentElement
    .querySelector(".dropdown__list")
    .classList.remove("dropdown__list_active");

  return false;
}

for (const each of textInMenu) {
  each.onclick = dropdownClick;
}
