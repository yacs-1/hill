/**
This script will inject the global page header into the #header div of each page
**/

const INJECTION = '<div id="global-preheader"><h1 class="heading">Rylee Hill!</h1></div><div id="global-header"><ul id="nav-list"><li><a href="#">Home</a></li><li><a href="/hill/photos/index.html">Photos</a><ul><li><a href="#">Album 1</a></li><li><a href="#">Album 2</a></li><li><a href="#">Album 3</a></li></ul></li><li><a href="#">Shopping</a><ul><li><a href="#">Album 1</a></li><li><a href="#">Album 2</a></li><li><a href="#">Album 3</a></li></ul></li><li><a href="#">Art</a><ul><li><a href="#">Album 1</a></li><li><a href="#">Album 2</a></li><li><a href="#">Album 3</a></li></ul></li><li><a href="#">Web Development</a><ul><li><a href="#">Week 1</a></li><li><a href="#">Week 2</a></li><li><a href="#">Week 3</a></li><li><a href="#">Week 4</a></li><li><a href="#">Week 5</a></li><li><a href="#">Week 6</a></li><li><a href="#">Week 7</a></li><li><a href="#">Week 8</a></li><li><a href="#">Week 9</a></li></ul></li></ul></div>  '  ;
let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
