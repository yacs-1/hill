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
   
   if (checkComplete()) {
     let winnerDiv = document.getElementById("winner");
     winnerDiv.style.display = "block";
     winnerDiv.innerText = isXTurn ? "Player X wins!" : "Player O wins!";
   }
   
   isXTurn = !isXTurn;
  } 
}


function checkComplete() {
  for (let _i = 0; _i < 3; _i++) {
    if ((squareArr[_i].innerText == "X" || squareArr[_i].innerText == "O") 
       && squareArr[_i].innerText == squareArr[_i + 3].innerText 
       && squareArr[_i].innerText == squareArr[_i + 6].innerText 
       ) return true;
   else if ((squareArr[3 * _i].innerText == "X" || squareArr[3 * _i].innerText == "O") 
       && squareArr[3 * _i].innerText == squareArr[3 * _i + 1].innerText 
       && squareArr[3 * _i].innerText == squareArr[3 * _i + 2].innerText 
       ) return true;
    }
  
  if ((squareArr[0].innerText == "X" || squareArr[0].innerText == "O") 
     && squareArr[0].innerText == squareArr[4].innerText 
     && squareArr[0].innerText == squareArr[8].innerText 
     ) return true;
  else if ((squareArr[2].innerText == "X" || squareArr[2].innerText == "O") 
     && squareArr[2].innerText == squareArr[4].innerText 
     && squareArr[2].innerText == squareArr[6].innerText 
     ) return true;
  else return false;
}


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
   
   if (checkComplete()) {
     let winnerDiv = document.getElementById("winner");
     winnerDiv.style.display = "block";
     winnerDiv.innerText = isXTurn ? "Player X wins!" : "Player O wins!";
   }
   
   isXTurn = !isXTurn;
  } 
}


function checkComplete() {
  for (let _i = 0; _i < 3; _i++) {
    if ((squareArr[_i].innerText == "X" || squareArr[_i].innerText == "O") 
       && squareArr[_i].innerText == squareArr[_i + 3].innerText 
       && squareArr[_i].innerText == squareArr[_i + 6].innerText 
       ) return true;
   else if ((squareArr[3 * _i].innerText == "X" || squareArr[3 * _i].innerText == "O") 
       && squareArr[3 * _i].innerText == squareArr[3 * _i + 1].innerText 
       && squareArr[3 * _i].innerText == squareArr[3 * _i + 2].innerText 
       ) return true;
    }
  
  if ((squareArr[0].innerText == "X" || squareArr[0].innerText == "O") 
     && squareArr[0].innerText == squareArr[4].innerText 
     && squareArr[0].innerText == squareArr[8].innerText 
     ) return true;
  else if ((squareArr[2].innerText == "X" || squareArr[2].innerText == "O") 
     && squareArr[2].innerText == squareArr[4].innerText 
     && squareArr[2].innerText == squareArr[6].innerText 
     ) return true;
  else return false;
}


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
   
   if (checkComplete()) {
     let winnerDiv = document.getElementById("winner");
     winnerDiv.style.display = "block";
     winnerDiv.innerText = isXTurn ? "Player X wins!" : "Player O wins!";
   }
   
   isXTurn = !isXTurn;
  } 
}


function checkComplete() {
  for (let _i = 0; _i < 3; _i++) {
    if ((squareArr[_i].innerText == "X" || squareArr[_i].innerText == "O") 
       && squareArr[_i].innerText == squareArr[_i + 3].innerText 
       && squareArr[_i].innerText == squareArr[_i + 6].innerText 
       ) return true;
   else if ((squareArr[3 * _i].innerText == "X" || squareArr[3 * _i].innerText == "O") 
       && squareArr[3 * _i].innerText == squareArr[3 * _i + 1].innerText 
       && squareArr[3 * _i].innerText == squareArr[3 * _i + 2].innerText 
       ) return true;
    }
  
  if ((squareArr[0].innerText == "X" || squareArr[0].innerText == "O") 
     && squareArr[0].innerText == squareArr[4].innerText 
     && squareArr[0].innerText == squareArr[8].innerText 
     ) return true;
  else if ((squareArr[2].innerText == "X" || squareArr[2].innerText == "O") 
     && squareArr[2].innerText == squareArr[4].innerText 
     && squareArr[2].innerText == squareArr[6].innerText 
     ) return true;
  else return false;
}


