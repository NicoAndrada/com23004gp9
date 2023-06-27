const nombre = document.getElementById("Name")
const apellido = document.getElementById("Apellido")
const telefono = document.getElementById("Tel")
const email = document.getElementById("Email")
const form = document.getElementById("form")
const parrafo = document.getElementById("Warnings")

//si se completa mal el formulario la validacion funciona bien. 
//si corrijo el dato en el formulario y aprieto enviar no hace nada.... 
//hay que hacer dos veces click
//en el boton enviar para que la info se mande


form.addEventListener("submit", e => {
  e.preventDefault()
  let entrar = false
  let ValidaEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/

  if (nombre.value.length < 3) {
    alert('El Nombre no es válido...muy corto')
    entrar = true
  }
  if (apellido.value.length < 2) {
    alert('Debes ingresar un apellido')
    entrar = true
  }
  if (!ValidaEmail.test(email.value)) {
    alert('El email no es válido')
    entrar = true
  }

  if (entrar) {
    // parrafo.innerHTML = warnings
  } else {
    handlesubmit();
  }
});

async function handlesubmit() {
  const $form = document.querySelector('#form');
  const form = new FormData($form);
  const response = await fetch($form.action, {
    method: $form.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  });
  if (response.ok) {
    form.reset();
    alert('Gracias por contactarnos, te responderemos a la brevedad');
  }
}

