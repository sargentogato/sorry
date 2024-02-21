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

  hamasterBtn.style.position = "absolute";
  hamasterBtn.style.left =
    Math.max(Math.floor(Math.random() * width - limitWidth), limitWidth) + "px";
  hamasterBtn.style.top =
    Math.max(Math.floor(Math.random() * height - limitHeight), limitHeight) +
    "px";

  console.log(
    "🚀 ~ clickManagerBtnNo ~ hamasterBtn.style.left :",
    hamasterBtn.style.left,
  );
};

boton_si.addEventListener("click", clickManagerBtnSi, false);
boton_no.addEventListener("mouseover", clickManagerBtnNo);
