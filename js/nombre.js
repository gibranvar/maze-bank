let nameUser = document.getElementById('name')
const usuarioActivo = JSON.parse(localStorage.getItem("usuarioLog"))

window.addEventListener('DOMContentLoaded', () => {
    nameUser.innerHTML = usuarioActivo.nombre
  })