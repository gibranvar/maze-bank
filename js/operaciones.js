let ingresar = document.getElementById('input')
let retiro = document.getElementById('input-retiro');
let mensaje = document.getElementById('msj')
let msg = document.getElementById('mensaje')
let post = document.getElementById('post')
let postRetiro = document.getElementById('post1')
const saldosCli = JSON.parse(localStorage.getItem("usuarioLog"))

const suma = () => {
    if(ingresar.value < 10){
        msj.innerHTML = "Ingrese una cantidad mayor a $10"
        ingresar.style.border = "3px solid red"
    }else{
        msj.innerHTML = ""
        ingresar.style.border = ""
    }if (ingresar.value >990){
        msj.innerHTML = "Ingrese una cantidad menor a $990"
        ingresar.style.border = "3px solid red"
    }

    sumaTotal = (parseInt(ingresar.value) + parseInt(saldosCli.saldo))
    post.innerHTML= `$ ${sumaTotal}`
    
}

const resta = () => {
    if(retiro.value < 10){
        msg.innerHTML = "Ingrese una cantidad mayor a $10"
        retiro.style.border = "3px solid red"
    }else{
        msg.innerHTML = ""
        retiro.style.border = ""
    }if (retiro.value >990){
        msg.innerHTML = "Ingrese una cantidad menor a $990"
        retiro.style.border = "3px solid red"
    }

    restaTotal = (parseInt(retiro.value) - parseInt(saldosCli.saldo))
    postRetiro.innerHTML= `$ ${restaTotal}`
    
} 









/* const condicional1 = (retiro) =>{
    if(retiro < 10){
        msg.innerHTML = "Ingrese una cantidad mayor que $10"
        retiro.style.border = "3px solid red"
    }else{
        msg.innerHTML = ""
       
    }if (retiro >990){
        msg.innerHTML = "Ingrese una cantidad menor que $990"
        
    }
   
}
    const resultado = (parseInt(condicional1) - parseInt(saldosCli.saldo))

const resta = () => {
    postRetiro.innerHTML= `$ ${resultado}`
}
 */

   
  

