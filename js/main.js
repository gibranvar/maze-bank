let nameUser = document.getElementById('name')
let saldo = document.getElementById('saldo-total')
const usuarioActivo = JSON.parse(localStorage.getItem("usuarioLog"))

window.addEventListener('DOMContentLoaded', () => {
    nameUser.innerHTML = usuarioActivo.nombre
    saldo.innerHTML = usuarioActivo.saldo
  })


