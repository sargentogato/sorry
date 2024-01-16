let boton_si = document.getElementById("botonSi");
let te_quiero_respuesta = document.getElementById("teQuieroRespuesta");
let respuestas = document.querySelectorAll(".heart, .message");

boton_si.onclick = () => {
  respuestas.forEach((element) => {
    // Muestra la respuesta de "Yo también te quiero"
    element.classList.add("show");

    // Oculta el resto de respuestas
    element.classList.add("hide");
  });
};

let boton_no = document.getElementById("botonNo");

boton_no.onmouseover = () => {
  boton_no.style.position = "absolute";
  boton_no.style.left = Math.random() * 200 + "px";
  boton_no.style.top = Math.random() * 200 + "px";
};
