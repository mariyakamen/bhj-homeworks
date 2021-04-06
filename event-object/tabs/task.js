function click(event) {
  for (const each of document.getElementsByClassName("tab")) {
    if (each === event.target.parentElement.querySelectorAll(".tab")) continue;
    each.classList.remove("tab_active");
  }

  event.target.classList.add("tab_active");
  event.target.classList.add("tab__content_active");

  return false;
}

for (const each of document.getElementsByClassName("tab")) {
  each.onclick = click;
}
