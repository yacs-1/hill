let photoArr = document.querySelectorAll(".photo-container img");
let currentIndex = 0;


function showBig(_self) {
  const BIG_DIV = document.getElementById("big-container");
  const BIG_IMG = document.getElementById("big-img");
  
  BIG_DIV.style.display = "block";
  BIG_IMG.setAttribute("src",_self.src);
  
  for (let _i = 0; _i < photoArr.length; _i++) {
    if (photoArr[_i].isEqualNode(_self))
    currentIndex = _i;
  }
  
}

function hideBig(_self) {
  _self.style.display = "none";
}

window.addEventListener("keydown", (_key) => {
  if (_key.code == "ArrowRight") increaseIndex();
  else if (_key.code == "ArrowLeft") decreaseIndex();
  updateBig();
});

function increaseIndex() {
  currentIndex++;
  if (currentIndex >= photoArr.length) currentIndex = 0;
  
}

function decreaseIndex() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = photoArr.length - 1;
}

function updateBig() {
  const BIG_IMG = document.getElementById("big-img");
  BIG_IMG.setAttribute("src", photoArr[currentIndex].src);
}
