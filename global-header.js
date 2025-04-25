/**
This script will inject the global page header into the #header div of each page
**/

const INJECTION = '<div id="global-preheader"><h1 class="heading">Rylee Hill!</h1></div><div id="global-header"><ul id="nav-list"><li><a href="/hill/index.html">Home</a></li><li><a href="/hill/photos/index.html">Photos</a><ul><li><a href="#">Album 1</a></li><li><a href="#">Album 2</a></li><li><a href="#">Album 3</a></li></ul></li><li><a href="/hill/art-projects/index.html">Art</a><ul><li><a href="#">Album 1</a></li><li><a href="#">Album 2</a></li><li><a href="#">Album 3</a></li></ul></li><li><a href="/hill/web-dev/index.html">Web Development</a><ul><li><a href="week1.html">Week 1</a></li><li><a href="recipe.html">Week 2</a></li><li><a href="anchors.html">Week 3</a></li><li><a href="poem.html">Week 4</a></li><li><a href="reviews.html">Week 5</a></li><li><a href="journal.html">Week 6</a></li><li><a href="band-page.html">Week 7</a></li><li><a href="list-maker.html">Week 8</a></li><li><a href="#">Week 9</a></li></ul></li></ul></div>  '  ;
let _div = document.getElementById("gheader");

_div.innerHTML = INJECTION;
