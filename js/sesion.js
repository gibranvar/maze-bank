let username = document.getElementById('username');
let password = document.getElementById('psw');
let msg = document.getElementById('msg')


 const ListaDeClientes = [
    {
        cliente: 1,
        nombre: 'Mali',
        saldo: 200,
        contrasena: '123',
    },
    {
        cliente: 2,
        nombre: 'Gera',
        saldo: 290,
        contrasena:'1234'
    },
    {
        cliente: 3,
        nombre: 'Maui',
        saldo: 67,
        contrasena:'12345'

    }
]

function login () {
    for(let i = 0; i < ListaDeClientes.length; i++){
        if(username.value == ListaDeClientes[i].nombre && password.value == ListaDeClientes[i].contrasena){
            console.log(ListaDeClientes[i])
            const usuario = JSON.stringify(ListaDeClientes[i])
            localStorage.setItem("usuarioLog", usuario)
            window.location="mainmenu.html"
        }if( username.value == "" && password.value == ""){
           msg.innerHTML="Usuario(a) o Contraseña Incorrectos"
        }
    }
 } 
 
 
