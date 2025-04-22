const UNCHECK_ICON = '<svg onclick ="crossOut(this)" viewBox="0 0 448 512" width="1em" title="square-uncheck"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" /></svg>';
const CHECK_ICON = '<svg style="fill:gray" onclick="unmarkItem(this)" viewBox="0 0 448 512" width="1em" title="square-check"><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>';

function addNewItem(){
  let newItem;
  let myList;
  let newItemText;
  let input;

  //Getting text from input-grp(see html) field for new li item
  input = document.getElementById("new-item");
  newItemText = input.value;
  
  if (newItemText != "") {
    newItem = document.createElement("li");
    newItem.innerHTML = UNCHECK_ICON + " " + newItemText;
    input.value = "";

    myList = document.getElementById("to-do");

    myList.appendChild(newItem);
  }
}

function clearList(){
  let theList = document.getElementById("to-do");
  theList.innerHTML = "";
}

function crossOut(_icon){
  let thisItem = _icon.parentElement;
  thisItem.style.textDecoration = "solid 2px line-through";
  thisItem.style.color = "gray";
  thisItem.innerHTML = CHECK_ICON + " " + thisItem.innerText;
}

function unmarkItem(_icon){
  let thisItem = _icon.parentElement;
  thisItem.style.textDecoration = "none";
  thisItem.style.color = "black";
  thisItem.innerHTML = UNCHECK_ICON + " " + thisItem.innerText;
}

window.addEventListener("keydown", (_key) => {
  if (_key.code == "Enter") addNewItem();
});
