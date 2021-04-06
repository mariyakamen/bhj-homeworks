function click(event) {
  for (const each of document.getElementsByClassName("tab")) {
    if (each === event.target.parentElement.querySelectorAll(".tab")) continue;
    each.classList.remove("tab_active");
  }

  event.target.classList.add("tab_active");
  let index = Array.from(event.target.parentElement.children).indexOf(
    event.target
  );

  for (const each of document.getElementsByClassName("tab__content")) {
    if (each === event.target.parentElement.querySelectorAll(".tab__content"))
      continue;
    each.classList.remove("tab__content_active");
  }

  let htmlObj = document
    .getElementsByClassName("tab__contents")[0]
    .querySelectorAll(".tab__content")[index];

  htmlObj.classList.add("tab__content_active");

  return false;
}

for (const each of document.getElementsByClassName("tab")) {
  each.onclick = click;
}
