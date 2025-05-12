let isXTurn = true;
const squareArr = document.querySelectorAll(".square");

for (const _element of squareArr) {
 _element.addEventListener("click", markSquare);  
}

function markSquare(_square) {
  if(_square.srcElement.innerText != "X" && _square.srcElement.innerText != "O")
  { if (isXTurn) {
    _square.srcElement.innerText = "X";
  } else {
    _square.srcElement.innerText = "O";
  }
   
   checkComplete();
   
   isXTurn = !isXTurn;
  } 
}


function checkComplete() {
  for (let _i = 0; _i < 3; _i++) {
    if ((squareArr[_i].innerText == "X" || squareArr[_i].innerText == "O") 
       && squareArr[_i].innerText == squareArr[_i + 3].innerText 
       && squareArr[_i].innerText == squareArr[_i + 6].innerText 
       ) console.log("game is over");
      
    }
}
