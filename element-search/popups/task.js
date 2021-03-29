let ObjMain = document.getElementById("modal_main");
ObjMain.classList.add("modal_active");

let ObjSuccess = document.getElementById("modal_success");

function clickClose(event) {
  event.target.parentElement.parentElement.classList.remove("modal_active");
}

function clickSuccess(event) {
  clickClose(event);
  ObjSuccess.classList.add("modal_active");
}

for (const each of document.getElementsByClassName("modal__close")) {
  each.onclick = clickClose;
}

document.getElementsByClassName("show-success")[0].onclick = clickSuccess;
