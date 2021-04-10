function click(event) {
  for (const each of document.getElementsByClassName("font-size")) {
    if (each === event.target.parentElement.querySelectorAll(".font-size"))
      continue;
    each.classList.remove("font-size_active");
  }

  event.target.classList.add("font-size_active");

  for (const each of document.getElementsByClassName("book")) {
    if (each === event.target.parentElement.querySelectorAll(".book")) continue;
    each.classList.remove("book_fs-big");
    each.classList.remove("book_fs-small");
  }

  let htmlObj = document.getElementById("book");

  if (event.target.matches(".font-size_active.font-size_small"))
    htmlObj.classList.add("book_fs-small");
  if (event.target.matches(".font-size_active.font-size_big"))
    htmlObj.classList.add("book_fs-big");

  return false;
}

for (const each of document.getElementsByClassName("font-size")) {
  each.onclick = click;
}
