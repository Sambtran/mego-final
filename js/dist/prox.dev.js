"use strict";

var cartel = document.getElementById("cart2");
var i = 1;
setInterval(function () {
  i++;

  if (i == 4) {
    i = 1;
  }

  cartel.setAttribute("src", "../img/cartel" + i + ".jpg");
}, 2000);