/**
This script will inject the global page header into the #header div of each page
**/

const INJECTION = '<div id="global-preheader"><h1 class="heading">Rylee Hill!</h1></div><div id="global-header"><ul id="nav-list"><li><a href="https://yacs-1.github.io/hill/">Home</a></li><li><a href="/hill/photos/index.html">Photos</a></li><ul><li><a href="#">Shopping</a></li><li><a href="#">Art</a></li></ul><li><a href="/hill/web-dev"></a>Web Development</a></li></ul></div>  ';

let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
