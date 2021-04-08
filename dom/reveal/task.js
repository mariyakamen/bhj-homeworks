function addReveal() {
  let elements = document.getElementsByClassName("reveal");

  for (const htmlElement of elements) {
    let heightRect = htmlElement.getBoundingClientRect().y;

    if (heightRect < window.innerHeight - window.innerHeight * 0.1) {
      htmlElement.classList.add("reveal_active");
    }
  }
}

document.addEventListener("scroll", addReveal);

/*function addReveal() {
  let elements = Array.from(document.getElementsByClassName("reveal"));

  for (const i of elements) { 
    let htmlObj = document.getElementsByClassName("reveal")[
      elements.indexOf(i)
    ];
    let heightRect = document
      .getElementsByClassName("reveal")
      [elements.indexOf(i)].getBoundingClientRect().y;

    if (heightRect < window.innerHeight - window.innerHeight * 0.1) {
      htmlObj.classList.add("reveal_active");
    }
  }
}

document.addEventListener("scroll", addReveal);*/
