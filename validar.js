document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var Name = document.getElementById('F-Name').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    var Apellido = document.getElementById('F-Apellido').value;
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }
    this.submit();
  }