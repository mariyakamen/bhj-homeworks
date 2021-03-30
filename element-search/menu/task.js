function click(event) {
  for (const each of document.getElementsByClassName("menu_sub")) {
    each.classList.remove("menu_active");
  }

  event.target.parentElement
    .querySelector(".menu_sub")
    .classList.add("menu_active");

  return false;
}

for (const each of document.getElementsByClassName("menu__link")) {
  each.onclick = click;
}
