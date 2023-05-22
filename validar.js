const nombre = document.getElementById("Name")
const apellido = document.getElementById("Apellido")
const telefono = document.getElementById("Tel")
const email = document.getElementById("Email")
const form = document.getElementById("form")
const parrafo = document.getElementById("Warnings")

form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings = ""
  let entrar = false
  let ValidaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  parrafo.innerHTML = ""
  if(nombre.value.length <6){
      warnings += `El nombre no es valido <br>`
      entrar = true
  }
  if(apellido.value.length < 1){
    warnings += `Ingrese el apellido <br>`
    entrar = true
}
  if(!ValidaEmail.test(email.value)){
      warnings += `El email no es valido <br>`
      entrar = true
  }
  
  if (telefono.value.length < 8){
    warnings += 'El telefono no es valido <br>'
  }

  if(entrar){
      parrafo.innerHTML = warnings
  }else{
      parrafo.innerHTML = "Enviado"
  }
})

