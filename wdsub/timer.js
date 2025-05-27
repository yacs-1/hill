let initDate;
let timeDifference = 0;
let hasInitDate = false;

cookieArr = document.cookie.split(";");

for (const element of cookieArr) {
  if(element.split("=")[0] == "init-data"){
    hasInitDate = true;
    initDate = element.split("=")[1];
  }
}

if (!hasInitDate) {
  document.cookie = "init-date=" + new Date() + "; max-age=31536000000";
} else{
  let now = new Date();
  document.cookie = "new-date=" + now + "; max-age=31536000000";
  timeDifference = now.getTime() - initDate.getTime();//gets the difference in milliseconds from first access until now
}

let timeSpent = document.getElementById("time-spent");
let numHours = Math.floor(timeDifference / 360000);
let numMins = Math.floor((timeDifference % 360000) * 60);
let diffStr = numHours + ":" + numMins;
timeSpent.innerText = diffStr;
