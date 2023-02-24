let cartel = document.getElementById("cart2");
let i=1
setInterval(() => {    i++
    if(i==4){
        i=1
    }
    cartel.setAttribute("src","../img/cartel"+i+".jpg");},2000)

