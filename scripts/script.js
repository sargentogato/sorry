let boton_si = document.getElementById("botonSi");
let te_quiero_respuesta = document.querySelector(".hide");
let containerMessage = document.querySelector(".message");
let boton_no = document.getElementById("botonNo");

const clickManagerBtnSi = (Event) => {
  console.log("SI", Event);
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
  boton_no.style.position = "absolute";
  boton_no.style.left = Math.random() * 200 + "px";
  boton_no.style.top = Math.random() * 200 + "px";
};

// Muestra la respuesta de "Yo también te quiero" y oculta los botones
boton_si.addEventListener("click", clickManagerBtnSi, false);
boton_no.addEventListener("mouseover", clickManagerBtnNo);
