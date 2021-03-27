function clicker() {
  let htmlObj = document.getElementById("clicker__counter");
  let counter = parseInt(htmlObj.innerHTML);
  counter += 1;
  htmlObj.innerHTML = counter;

  //document.getElementById("clicker__counter").innerHTML = parseInt(document.getElementById("clicker__counter").innerHTML) + 1;

  let cookieWidth = document.getElementById("cookie").width;

  if (cookieWidth == 200) {
    document.getElementById("cookie").width = 250;
  } else {
    document.getElementById("cookie").width = 200;
  }
}

document.getElementById("cookie").onclick = clicker;
