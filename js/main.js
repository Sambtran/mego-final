if(screen.width<768){
let click = 0;
function updatear(params) {
  let logo = document.getElementById("logo");
  let cont = document.getElementById("nav");
  logo.addEventListener("click", (ev) => {
    click++;
    console.log(click);
    if (click == 1) {
      cont.innerHTML = ` <img id="logo" src="../img/Megoc.png" alt="Logo de megoc pequeño" /> <a href="">
          <i class="fa-brands fa-facebook"></i>Facebook
        </a>
        <a href=""><i class="fa-regular fa-envelope"></i>Email</a>
        <a href=""><i class="fa-brands fa-instagram"></i>Instagram</a>`;
    } else {
      cont.innerHTML = `<img id="logo" src="../img/Megoc.png" alt="Logo de megoc pequeño" />
          <div>
            <i class="fa-solid fa-microphone-lines"></i>
            <p>Ven a cantar con nosotros</p>
          </div>
          <div>
            <i class="fa-regular fa-calendar"> </i>
            <p>Proximos conciertos</p>
          </div>`;
      click = 0;
    }
    updatear()
  });
}
updatear();
}else{

}