function click(event) {
  for (const eachHole of document.getElementsByClassName("hole_has-mole")) {
    if (event.target.className.includes("hole_has-mole")) {
      document.getElementById("dead").innerHTML =
        parseInt(document.getElementById("dead").innerHTML) + 1;
    } else {
      document.getElementById("lost").innerHTML =
        parseInt(document.getElementById("lost").innerHTML) + 1;
    }
  }

  let deadMole = parseInt(document.getElementById("dead").innerHTML);
  let missedMole = parseInt(document.getElementById("lost").innerHTML);

  if (missedMole === 5) alert("Вы проиграли, попробуйте еще раз");
  if (deadMole === 10) alert("Победа");

  if (missedMole === 5 || deadMole === 10) reset();
}

for (const eachHole of document.getElementsByClassName("hole")) {
  eachHole.onclick = click;
}

function reset() {
  document.getElementById("dead").innerHTML = 0;
  document.getElementById("lost").innerHTML = 0;
}

//различать dead, lost
