let activeInd = 0;
let arr = Array.from(document.getElementsByClassName("slider__item"));

function click(event) {
  let activePic = document.getElementsByClassName("slider__item_active")[0];
  activePic.classList.remove("slider__item_active");
  event.target.newFeature();
  arr[activeInd].classList.add("slider__item_active");
}

function movePrev() {
  activeInd -= 1;
  if (activeInd === -1) activeInd = arr.length - 1;
}

function moveNext() {
  activeInd += 1;
  if (activeInd >= arr.length) activeInd = 0;
}

for (const each of document.getElementsByClassName("slider__arrow_next")) {
  each.onclick = click;
  each.newFeature = moveNext;
}

for (const each of document.getElementsByClassName("slider__arrow_prev")) {
  each.onclick = click;
  each.newFeature = movePrev;
}
