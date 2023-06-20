const nombre = document.getElementById("Name")
const apellido = document.getElementById("Apellido")
const telefono = document.getElementById("Tel")
const email = document.getElementById("Email")
const form = document.getElementById("form")
const parrafo = document.getElementById("Warnings")






form.addEventListener("submit", e => {
  e.preventDefault()
  //let warnings = ""
  let entrar = false
  let ValidaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  //parrafo.innerHTML = ""
  if (nombre.value.length < 3) {
    alert('El Nombre no es valido...muy corto')
    entrar = true
  }
  if (apellido.value.length < 1) {
    alert('Debes ingresar un apellido')
    entrar = true
  }
  if (!ValidaEmail.test(email.value)) {
    alert('El email no es valido')
    entrar = true
  }


  if (entrar) {
    // parrafo.innerHTML = warnings
  } else {
    const $form = document.querySelector('#form')

    $form.addEventListener('submit', handlesubmit)

    async function handlesubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
          'Accept': 'application/json'
        }
      })
      if (response.ok) {
        this.reset()
        alert('Gracias por contactarnos, te responderemos a la brevedad')
      }
    }
  }
})

