let boton_si = document.getElementById("botonSi");
let te_quiero_respuesta = document.querySelector(".hide");
let containerMessage = document.querySelector(".message");
let boton_no = document.getElementById("botonNo");
const hamasterBtn = document.getElementById("hamsterBtn");

const clickManagerBtnSi = (Event) => {
  var contenedor = document.getElementById("miAnimacion");

  var opcionesAnimacion = {
    container: contenedor,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "assets/imges/Animation.json",
  };

  var animacion = lottie.loadAnimation(opcionesAnimacion);

  if (te_quiero_respuesta.classList.contains("hide")) {
    te_quiero_respuesta.classList.remove("hide");
  }

  if (containerMessage.classList.contains("show")) {
    containerMessage.classList.remove("show");
    containerMessage.classList.add("hide");
  }

  boton_si.removeEventListener("click", clickManagerBtnSi);
  boton_no.removeEventListener("mouseover", clickManagerBtnNo);
};

const clickManagerBtnNo = (Event) => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const limitWidth = 170;
  const limitHeight = 150;
  const margin = 70; // Margen de 50px

  hamasterBtn.style.position = "absolute";

  // Calcular la posición dentro de los límites
  const randomLeft = Math.floor(Math.random() * (width - limitWidth - 2 * margin)) + margin;
  const randomTop = Math.floor(Math.random() * (height - limitHeight - 2 * margin)) + margin;

  hamasterBtn.style.left = randomLeft + "px";
  hamasterBtn.style.top = randomTop + "px";


};

boton_si.addEventListener("click", clickManagerBtnSi, false);
boton_no.addEventListener("mouseover", clickManagerBtnNo);
