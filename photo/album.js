function showBig(_self) {
  const BIG_DIV = document.getElementById("big-container");
  const BIG_IMG = document.getElementById("big-img");
  
  BIG_DIV.style.display = "block";
  BIG_IMG.setAttribute("src",_self.src);
}

function hideBig(_self) {
  _self.style.display = "none";
}
