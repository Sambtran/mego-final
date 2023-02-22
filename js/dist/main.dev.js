"use strict";

if (screen.width < 768) {
  var updatear = function updatear(params) {
    var logo = document.getElementById("logo");
    var cont = document.getElementById("nav");
    logo.addEventListener("click", function (ev) {
      click++;
      console.log(click);

      if (click == 1) {
        cont.innerHTML = " <img id=\"logo\" src=\"../img/Megoc.png\" alt=\"Logo de megoc peque\xF1o\" /> <a href=\"\">\n          <i class=\"fa-brands fa-facebook\"></i>Facebook\n        </a>\n        <a href=\"\"><i class=\"fa-regular fa-envelope\"></i>Email</a>\n        <a href=\"\"><i class=\"fa-brands fa-instagram\"></i>Instagram</a>";
      } else {
        cont.innerHTML = "<img id=\"logo\" src=\"../img/Megoc.png\" alt=\"Logo de megoc peque\xF1o\" />\n          <div>\n            <i class=\"fa-solid fa-microphone-lines\"></i>\n            <p>Ven a cantar con nosotros</p>\n          </div>\n          <div>\n            <i class=\"fa-regular fa-calendar\"> </i>\n            <p>Proximos conciertos</p>\n          </div>";
        click = 0;
      }

      updatear();
    });
  };

  var click = 0;
  updatear();
} else {}