function click(event) {
  for (const each of document.getElementsByClassName("menu_sub")) {
    if (each === event.target.parentElement.querySelector(".menu_sub"))
      continue;
    each.classList.remove("menu_active");
  }

  event.target.parentElement
    .querySelector(".menu_sub")
    .classList.toggle("menu_active");

  return false;
}

for (const each of document.getElementsByClassName("menu__link")) {
  each.onclick = click;
}
