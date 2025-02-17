// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  // 1. Capturar el valor del campo de entrada
  const nombreAmigo = document.getElementById("amigo").value;

  // 2. Validar la entrada
  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre.");
    return; // Detener la ejecución si el campo está vacío
  }

  // 3. Actualizar el array de amigos
  amigos.push(nombreAmigo);

  // 4. Limpiar el campo de entrada
  document.getElementById("amigo").value = "";

  // 5. Actualizar la lista en el HTML
  actualizarListaAmigos();
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizarla

  amigos.forEach(amigo => {
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = amigo;
    listaAmigos.appendChild(nuevoElemento);
  });
}

