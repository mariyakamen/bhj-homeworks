function changeClass() {
  let rotators = document.getElementsByClassName("rotator");
  for (const rotator of rotators) {
    nextText(rotator);
  }
}

function nextText(rotator) {
  let current = rotator.getElementsByClassName("rotator__case_active")[0];

  for (const each of rotator.getElementsByClassName("rotator__case")) {
    each.classList.remove("rotator__case_active");
  }

  let next = current.nextElementSibling;
  if (next === null) {
    next = rotator.firstElementChild;
  }

  next.classList.add("rotator__case_active");
}

setInterval(changeClass, 1000);
