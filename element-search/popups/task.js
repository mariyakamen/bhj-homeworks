let ObjMain = document.getElementById("modal_main");
ObjMain.classList.add("modal_active");
let ObjSuccess = document.getElementById("modal_success");

function clickClose() {
  ObjMain.classList.remove("modal_active");
  ObjSuccess.classList.remove("modal_active");
}

function clickSuccess() {
  ObjMain.classList.remove("modal_active");
  ObjSuccess.classList.add("modal_active");
}

for (const each of document.getElementsByClassName("modal__close")) {
  each.onclick = clickClose;
}

document.getElementsByClassName("show-success")[0].onclick = clickSuccess;
