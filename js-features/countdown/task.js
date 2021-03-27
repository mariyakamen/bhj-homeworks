let htmlObj = document.getElementById("timer");
let time = parseInt(htmlObj.innerHTML);
let secondsToHHMMSS = new Date(time * 1000).toISOString().substr(11, 8);
htmlObj.innerHTML = secondsToHHMMSS;

function tick() {
  let htmlObj = document.getElementById("timer");
  let time = parseInt(htmlObj.innerHTML.substr(6, 2));
  console.log(time);
  console.log(htmlObj.innerHTML.substr(6, 2));

  time -= 1;
  let secondsToHHMMSS = new Date(time * 1000).toISOString().substr(11, 8);
  console.log(secondsToHHMMSS);
  htmlObj.innerHTML = secondsToHHMMSS;

  if (time === 0) {
    alert("Вы победили в конкурсе");
    stop();
  }
  //console.log(htmlObj);
  //console.log(time);
}

let timer = setInterval(tick, 1000);

function stop() {
  clearInterval(timer);
}

/*
function tick() {
  let htmlObj = document.getElementById("timer");
  let time = parseInt(htmlObj.innerHTML);
  if (time === 0) alert("Вы победили в конкурсе");
  if (time === 0) stop();
  else {
    time -= 1;
    htmlObj.innerHTML = time;
    //console.log(htmlObj);
    //console.log(time);
  }
}

let timer = setInterval(tick, 1000);

function stop() {
  clearInterval(timer);
}
*/
